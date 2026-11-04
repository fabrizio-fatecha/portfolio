// Interface text (labels, buttons, headings). Content lives in the other data files.
// Every translatable value is { en, es }.
export const ui = {
  meta: {
    title: {
      en: 'Fabrizio Fatecha | Backend Developer',
      es: 'Fabrizio Fatecha | Desarrollo Backend',
    },
    description: {
      en: 'Backend developer experienced in Java, Spring Boot, C# .NET Core, Node.js and Python. REST APIs, databases and production deployment.',
      es: 'Desarrollo backend con Java, Spring Boot, C# .NET Core, Node.js y Python. APIs REST, bases de datos y despliegue a producción.',
    },
  },
  nav: {
    label: { en: 'Main navigation', es: 'Navegación principal' },
    links: [
      { href: '#projects', text: { en: 'Projects', es: 'Proyectos' } },
      { href: '#experience', text: { en: 'Experience', es: 'Experiencia' } },
      { href: '#certifications', text: { en: 'Certifications', es: 'Certificaciones' } },
      { href: '#contact', text: { en: 'Contact', es: 'Contacto' } },
    ],
    language: { en: 'Language', es: 'Idioma' },
  },
  hero: {
    viewProjects: { en: 'View projects', es: 'Ver proyectos' },
    getInTouch: { en: 'Get in touch', es: 'Contáctame' },
  },
  sections: {
    profile: { en: '01 — Profile', es: '01 — Perfil' },
    projects: { en: '02 — Projects', es: '02 — Proyectos' },
    experience: { en: '03 — Experience', es: '03 — Experiencia' },
    skills: { en: '04 — Skills', es: '04 — Habilidades' },
    education: { en: '05 — Education', es: '05 — Educación' },
    certifications: { en: '06 — Certifications', es: '06 — Certificaciones' },
    contact: { en: '07 — Contact', es: '07 — Contacto' },
  },
  certifications: {
    title: { en: 'Continuous learning.', es: 'Aprendizaje continuo.' },
  },
  contact: {
    // Keep ES words short: the title is 170px Bebas Neue and can't wrap mid-word.
    title: { en: 'Let’s build something great.', es: 'Hagamos algo genial.' },
  },
}
