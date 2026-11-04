import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Absolute site URL, needed for og:image (social crawlers ignore relative URLs).
// Netlify sets `URL` automatically at build time (custom domain if configured).
// For a local build you can pass it yourself: VITE_SITE_URL=https://example.com npm run build
const siteUrl = (process.env.URL || process.env.VITE_SITE_URL || '').replace(/\/$/, '')

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'site-url',
      transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl),
    },
  ],
})
