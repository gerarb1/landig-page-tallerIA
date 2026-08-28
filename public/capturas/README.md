# Guía de Capturas de Pantalla del Taller

Coloca aquí las capturas de pantalla organizadas por parcela. Astro sirve automáticamente cualquier archivo dentro de la carpeta `public/` en la raíz del sitio web.

## Estructura de Carpetas Sugerida

```text
public/
└── capturas/
    ├── t2/
    │   ├── paso-1.png  (Pantalla de bienvenida / lista de notebooks)
    │   ├── paso-2.png  (Botón de crear notebook)
    │   ├── paso-3.png  (Panel de carga de fuentes con PDFs listados)
    │   ├── paso-4.png  (Panel de chat con el prompt pegado)
    │   └── paso-5.png  (Respuesta con cita anclada resaltada)
    ├── t3/
    │   ├── paso-1.png  (Pantalla principal de Gemini)
    │   ├── paso-2.png  (Menú lateral con Explorar Gems resaltado)
    │   ├── paso-3.png  (Panel de edición de instrucciones con prompt)
    │   ├── paso-4.png  (Campo de nombre + botón guardar)
    │   └── paso-5.png  (Conversación de prueba con el Gem funcionando)
    └── t4/
        ├── paso-1.png  (Documento en blanco recién creado en Docs)
        ├── paso-2.png  (Documento con el contenido previo pegado)
        ├── paso-3.png  (Panel lateral de Gemini abierto en Docs)
        ├── paso-4.png  (Respuesta de Gemini dentro de Docs)
        └── paso-5.png  (Texto ya insertado y editado en el documento)
```

## Formatos Recomendados
- **Formato**: `.png`, `.jpg` o `.webp` (resolución sugerida: 1280×720 o 1920×1080).
- **Cómo vincularlas**: En `src/pages/index.astro`, añade la propiedad `imageSrc` al `TutorialStep` correspondiente:
  ```astro
  <TutorialStep 
    stepNumber={1}
    title="Accede a NotebookLM"
    instruction="..."
    caption="pantalla de bienvenida / lista de notebooks"
    imageSrc="/capturas/t2/paso-1.png"
  />
  ```
