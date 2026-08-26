# Taller DBCA: Redacción Científica e inovacion Digital para la investigacion en Agroecologia

Plataforma metodológica e interactiva del taller de flujos de trabajo con IA aplicada a ciencias agropecuarias estructurada bajo la lógica de Diseño de Bloques Completos al Azar (DBCA).

---

## Stack Tecnológico

* **Framework:** [Astro](https://astro.build/)
* **API / Backend:** [Hono](https://hono.dev/)
* **Despliegue:** [Cloudflare Pages / Workers](https://developers.cloudflare.com/) con el adaptador `@astrojs/cloudflare`
* **Estilos:** Tailwind CSS con tokens cromáticos de herbario (`tinta`, `tierra`, `musgo`, `trigo`, `papel`, `niebla`)
* **Tipografías:** Fraunces (Display), Public Sans / Inter (Cuerpo), IBM Plex Mono (Prompts de campo)

---

## Cómo correr el proyecto localmente

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:4321
   ```

---

## Compilación para Producción

Para generar los artefactos optimizados para Cloudflare:

```bash
npm run build
```

---


