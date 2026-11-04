// To add a project: copy one object, change the values and save.
export const projects = [
  {
    title: { en: 'Core API for optimized reads', es: 'API central para lecturas optimizadas' },
    kind: { en: 'Personal project', es: 'Proyecto personal' },
    stack: 'Java 8–21 · Spring Boot · SQL',
    summary: {
      en: 'Spring Boot API built for fast reads over a database of 50 million records.',
      es: 'API en Spring Boot pensada para lecturas rápidas sobre una base de datos de 50 millones de registros.',
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
  },
]
