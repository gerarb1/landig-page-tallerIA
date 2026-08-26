/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        tinta: '#1F2318',
        tierra: '#2B2418',
        musgo: '#46573C',
        trigo: '#C9A227',
        papel: '#E8E4D6',
        niebla: '#DCE3D9',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        fraunces: ['Fraunces', 'serif'],
        sans: ['Public Sans', 'Inter', 'sans-serif'],
        inter: ['Inter', 'Public Sans', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'field': '3px 3px 0px 0px rgba(31, 35, 24, 0.9)',
        'field-lg': '6px 6px 0px 0px rgba(31, 35, 24, 0.9)',
        'field-hover': '5px 5px 0px 0px #46573C',
      }
    },
  },
  plugins: [],
};
