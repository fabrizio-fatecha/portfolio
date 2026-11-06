# Portfolio — Fabrizio Fatecha

Live at **[fatecha.com.py](https://fatecha.com.py)**.

A single-page portfolio built with Vite and React 18, plain CSS and self-hosted fonts (Fontsource). No router, just anchor links.
English is the default language, with an **EN / ES** switcher: the visitor's choice is remembered, and `?lang=es` opens the site in Spanish.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serves dist/ to test the production build
```

Requires Node 20.19+ (or 22.12+).

## Editing content

All the text lives in `src/data/`; the components only render it.
Every translatable value is an `{ en, es }` object. Values that are the same in both languages (tech names, companies, links) are plain strings.

| File | What it holds |
| --- | --- |
| `profile.js` | Name, email, links, headline, intro, hero stack chips, "about" text |
| `projects.js` | Featured projects (`projects`) and the compact "More web projects" list (`webProjects`). Copy an object to add another |
| `experience.js` | Work experience |
| `skills.js` / `education.js` | Skills and education |
| `certifications.js` | Certifications. Copy a block and change the title, area and issuer |
| `ui.js` | Interface text: nav, buttons, section labels and titles, page title and description, the Security teaser |
| `pentest.js` | All the content of the `/pentesting/` page (service, scope, method, deliverables, benefits, contact) |

## Project structure

```
index.html                      portfolio page (/)
pentesting/index.html           pentesting services page (/pentesting/), dark theme
src/
  main.jsx, App.jsx             entry point and layout of the portfolio
  pentesting.jsx                entry point of the pentesting page
  i18n.jsx                      EN/ES language context shared by both pages
  styles/global.css             portfolio: design tokens, layout and responsive rules
  styles/pentest.css            pentesting page: its own dark "terminal" theme
  data/                         all editable content (see above)
  components/                   one component per section (components/pentest/ for the pentesting page)
public/                         favicons and Open Graph images
netlify.toml                    build settings and response headers
```

The site has two HTML entry pages (multi-page Vite build); both share the language switcher and the fonts.

## Deploy

Hosted on Netlify, which builds and publishes automatically on every push to `main`.
`netlify.toml` already defines the build command (`npm run build`), the publish directory (`dist`), Node 22 and the security and cache headers.

- **From GitHub (recommended):** in Netlify, *Add new project → Import an existing project*, pick this repo and deploy.
- **Manually:** run `npm run build`, then `npx netlify-cli deploy --prod --dir=dist`.

The Open Graph image (`og-image.png`) needs an absolute URL. On Netlify this is automatic, because the build reads Netlify's `URL` variable. For a local build, pass it yourself:

```bash
VITE_SITE_URL=https://example.com npm run build
```

## Previous version

The earlier, Google Sheets-driven version of this portfolio is kept in the [`old-portfolio`](https://github.com/fabrizio-fatecha/portfolio/tree/old-portfolio) branch.
