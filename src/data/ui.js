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
    projects: { en: '02 — Projects', es: '02 — Proyectos' },
    experience: { en: '03 — Experience', es: '03 — Experiencia' },
    skills: { en: '04 — Skills', es: '04 — Habilidades' },
    education: { en: '05 — Education', es: '05 — Educación' },
    certifications: { en: '06 — Certifications', es: '06 — Certificaciones' },
    security: { en: '07 — Security', es: '07 — Seguridad' },
    contact: { en: '08 — Contact', es: '08 — Contacto' },
  },
  // Teaser panel that links to the /pentesting/ page.
  security: {
    prompt: 'fabrizio@sec:~$ ./basic-pentest',
    title: { en: 'Basic pentesting services.', es: 'Servicios de pentesting básico.' },
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
