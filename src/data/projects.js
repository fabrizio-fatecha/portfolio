// To add a project: copy one object, change the values and save.
// `link` is optional: { url, label: { en, es } }.
const visitSite = { en: 'Visit site', es: 'Visitar sitio' }

export const projects = [
  {
    title: { en: 'Core API for optimized reads', es: 'API central para lecturas optimizadas' },
    kind: { en: 'Personal project', es: 'Proyecto personal' },
    stack: 'Java 8–21 · Spring Boot · SQL',
    summary: {
      en: 'Spring Boot API built for fast reads over a database of 50 million records.',
      es: 'API en Spring Boot pensada para lecturas rápidas sobre una base de datos de 50 millones de registros.',
    },
    // No trailing slash: /swagger/ returns 403, /swagger redirects to the Swagger UI.
    link: {
      url: 'https://api.fatecha.com.py/swagger',
      label: { en: 'API docs (Swagger)', es: 'Documentación de la API (Swagger)' },
    },
  },
  {
    title: { en: 'Duties: document management', es: 'Duties: gestión documental' },
    kind: { en: 'Web platform', es: 'Plataforma web' },
    stack: 'React · Node.js · AWS · Flutter',
    summary: {
      en:
        'Frontend and backend of a cloud platform on AWS. Cut physical paperwork ' +
        'by 70% and errors in shift calculations.',
      es:
        'Frontend y backend de una plataforma en la nube sobre AWS. Redujo el papeleo ' +
        'físico en un 70% y los errores en el cálculo de turnos.',
    },
    link: { url: 'https://duties-website.netlify.app/', label: visitSite },
  },
  {
    title: { en: 'Hospital triage system', es: 'Sistema de triaje hospitalario' },
    kind: 'Neighpart S.A.E.C.A.',
    stack: 'Node.js · FastAPI · PostgreSQL · Redis',
    summary: {
      en:
        'REST APIs for patient flow. Improved processing efficiency by 25% and ' +
        'cut response time by 40% with Redis caching.',
      es:
        'APIs REST para el flujo de pacientes. Mejoró la eficiencia de procesamiento en un 25% ' +
        'y redujo el tiempo de respuesta en un 40% con caché en Redis.',
    },
    link: { url: 'https://vitalics.net/', label: visitSite },
  },
]

// Smaller projects, shown as compact rows under "More web projects".
// The three agency sites are concept/demo builds (placeholder contact data and
// fictional brands), so they are labelled as such. Don't present them as client work.
const concept = { en: 'Concept website', es: 'Sitio conceptual' }
const demoNote = { en: 'Demo content.', es: 'Contenido de demostración.' }

export const webProjects = [
  {
    title: { en: 'Valle de Flores', es: 'Valle de Flores' },
    kind: { en: 'Interactive 3D experience', es: 'Experiencia 3D interactiva' },
    stack: 'WebGL',
    summary: {
      en: 'A flower valley you can explore in 3D from the browser: walk with WASD or the arrow keys, look around with the mouse and run with Shift.',
      es: 'Un valle de flores en 3D que se recorre desde el navegador: se camina con WASD o las flechas, se mira con el mouse y se corre con Shift.',
    },
    link: { url: 'https://sunflowersparaguay.netlify.app/', label: visitSite },
  },
  {
    title: { en: 'Real estate landing page', es: 'Landing page inmobiliaria' },
    kind: concept,
    stack: 'React',
    summary: {
      en: `Landing page for a real estate agency: hero, featured listings, benefits section and contact form. ${demoNote.en}`,
      es: `Landing page para una inmobiliaria: hero, propiedades destacadas, sección de beneficios y formulario de contacto. ${demoNote.es}`,
    },
    link: { url: 'https://real-st-agency.netlify.app/', label: visitSite },
  },
  {
    title: { en: 'Sneaker store landing page', es: 'Landing page de tienda de zapatillas' },
    kind: concept,
    stack: 'React',
    summary: {
      en: `Landing page for a sneaker brand: collection showcase, product features and newsletter signup. ${demoNote.en}`,
      es: `Landing page para una marca de zapatillas: colección, características del producto y suscripción al newsletter. ${demoNote.es}`,
    },
    link: { url: 'https://shoes-agency.netlify.app/', label: visitSite },
  },
  {
    title: { en: 'Customs brokerage website', es: 'Sitio de despacho aduanero' },
    kind: concept,
    stack: 'React',
    summary: {
      en: `Corporate website for a customs brokerage: services, about, team and contact form. ${demoNote.en}`,
      es: `Sitio corporativo para un despacho aduanero: servicios, nosotros, equipo y formulario de contacto. ${demoNote.es}`,
    },
    link: { url: 'https://customs-agency.netlify.app/', label: visitSite },
  },
]
