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
      // Separate page. Hidden on phones (no room), where the Security panel links to it.
      { href: '/pentesting/', text: { en: 'Pentesting', es: 'Pentesting' }, accent: true },
    ],
    language: { en: 'Language', es: 'Idioma' },
  },
  hero: {
    viewProjects: { en: 'View projects', es: 'Ver proyectos' },
    getInTouch: { en: 'Get in touch', es: 'Contáctame' },
  },
  sections: {
    profile: { en: '01 — Profile', es: '01 — Perfil' },
    security: { en: '02 — Security', es: '02 — Seguridad' },
    projects: { en: '03 — Projects', es: '03 — Proyectos' },
    experience: { en: '04 — Experience', es: '04 — Experiencia' },
    skills: { en: '05 — Skills', es: '05 — Habilidades' },
    education: { en: '06 — Education', es: '06 — Educación' },
    certifications: { en: '07 — Certifications', es: '07 — Certificaciones' },
    contact: { en: '08 — Contact', es: '08 — Contacto' },
  },
  // Teaser panel (right below Profile) that links to the /pentesting/ page.
  security: {
    prompt: 'fabrizio@sec:~$ ./pentest',
    title: { en: 'Pentesting services.', es: 'Servicios de pentesting.' },
    text: {
      en: 'Methodical, controlled security testing of web apps, networks and servers, delivered with clear executive and technical reports.',
      es: 'Pruebas de seguridad metódicas y controladas para aplicaciones web, redes y servidores, con informes ejecutivo y técnico claros.',
    },
    cta: { en: 'Explore the service', es: 'Conocer el servicio' },
  },
  projects: {
    more: { en: 'More web projects', es: 'Más proyectos web' },
  },
  // Big heading shown at the top of each section's content column.
  sectionTitles: {
    experience: { en: 'Hands-on experience.', es: 'Experiencia práctica.' },
    skills: { en: 'Tools of the trade.', es: 'Herramientas del oficio.' },
    education: { en: 'Academic foundation.', es: 'Base académica.' },
    certifications: { en: 'Continuous learning.', es: 'Aprendizaje continuo.' },
  },
  contact: {
    // Keep ES words short: the title is 170px Bebas Neue and can't wrap mid-word.
    title: { en: 'Let’s build something great.', es: 'Hagamos algo genial.' },
  },
}
