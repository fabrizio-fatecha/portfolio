# Portfolio — Fabrizio Fatecha

Vite + React 18, CSS plano, fuentes con Fontsource. Una sola página con anclas, sin router.
Inglés por defecto, con selector **EN / ES** (se recuerda la elección; `?lang=es` abre el sitio en español).

## Correrlo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/ para probar el build
```

Requiere Node 20.19+ (o 22.12+).

## Editar contenido

Todo el texto vive en `src/data/`; los componentes solo lo dibujan.
Cada texto traducible es un objeto `{ en, es }`; lo que es igual en ambos idiomas (nombres de tecnologías, empresas, links) va como string simple.

| Archivo | Qué contiene |
| --- | --- |
| `profile.js` | Nombre, email, links, titular, intro, stack, "sobre mí" |
| `projects.js` | Proyectos — copiá un objeto para agregar otro |
| `experience.js` | Experiencia laboral |
| `skills.js` / `education.js` | Habilidades y educación |
| `certifications.js` | Certificaciones — copiá un bloque, cambiá título / área / emisor |
| `ui.js` | Textos de interfaz (menú, botones, títulos de sección, meta) |

## Deploy en Netlify

`netlify.toml` ya trae el build (`npm run build`), la carpeta publicada (`dist`), Node 22 y headers de seguridad/caché.

- **Con GitHub (recomendado):** subí el repo, en Netlify → *Add new site → Import an existing project*, y listo. Cada push a `main` republica solo.
- **Sin GitHub:** `npx netlify-cli deploy --prod --dir=dist` después de `npm run build`.

Para que la imagen al compartir (`og-image.png`) tenga URL absoluta en un build local, usá:

```bash
VITE_SITE_URL=https://tu-dominio.com npm run build
```

(En Netlify no hace falta: usa la variable `URL` que define el propio Netlify.)
