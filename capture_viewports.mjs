import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function captureScreenshot(url, outPath, width, height, isMobile = false, fullPage = false) {
  const port = 9400 + Math.floor(Math.random() * 100);
  const chrome = spawn(CHROME_PATH, [
    `--remote-debugging-port=${port}`,
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    `--window-size=${width},${height}`,
    'about:blank'
  ]);

  try {
    await sleep(1500);
    
    const targets = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${port}/json/list`, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    const page = targets.find(t => t.type === 'page');
    if (!page) throw new Error('Page target not found');

    const ws = new WebSocket(page.webSocketDebuggerUrl);

    let id = 1;
    const send = (method, params = {}) => {
      const msgId = id++;
      return new Promise((resolve, reject) => {
        const handler = (evt) => {
          const res = JSON.parse(evt.data);
          if (res.id === msgId) {
            ws.removeEventListener('message', handler);
            if (res.error) reject(res.error);
            else resolve(res.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    };

    await new Promise(resolve => ws.addEventListener('open', resolve));

    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 2,
      mobile: isMobile
    });

    await send('Page.navigate', { url });
    await sleep(2000);

    const screenshot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: fullPage
    });

    const buffer = Buffer.from(screenshot.data, 'base64');
    fs.writeFileSync(outPath, buffer);
    console.log(`Saved screenshot to ${outPath} (${buffer.length} bytes)`);

    ws.close();
  } finally {
    chrome.kill();
  }
}

async function run() {
  const artifactDir = "C:/Users/IASA-FCA/.gemini/antigravity/brain/69e863cc-c1e4-46c4-ab13-a4a64fdbd155";
  
  console.log('1. Capturing Desktop Viewport...');
  await captureScreenshot('http://127.0.0.1:4321/', `${artifactDir}/desktop_view.png`, 1440, 960, false, false);
  
  console.log('2. Capturing Facilitador Section Desktop...');
  await captureScreenshot('http://127.0.0.1:4321/#facilitador', `${artifactDir}/facilitador_desktop.png`, 1440, 900, false, false);

  console.log('3. Capturing Mobile Viewport...');
  await captureScreenshot('http://127.0.0.1:4321/', `${artifactDir}/mobile_full_view.png`, 390, 844, true, true);

  console.log('Done captures!');
}

run().catch(console.error);
