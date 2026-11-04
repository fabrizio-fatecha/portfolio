// To add a certification: copy one line, change title / area / issuer and save.
// `area` reuses the labels below so the Spanish version stays consistent.
const area = {
  csharp: 'C# / .NET',
  backend: 'Backend',
  practices: { en: 'Best practices', es: 'Buenas prácticas' },
  databases: { en: 'Databases', es: 'Bases de datos' },
  cloud: { en: 'Cloud', es: 'Nube' },
  devops: 'DevOps',
  networking: { en: 'Networking', es: 'Redes' },
  frontend: 'Frontend',
  python: 'Python',
  mobile: { en: 'Mobile', es: 'Móvil' },
  health: { en: 'Health', es: 'Salud' },
  ai: { en: 'AI', es: 'IA' },
  business: { en: 'Business', es: 'Negocios' },
  career: { en: 'Career', es: 'Carrera' },
}

export const certifications = [
  {
    title: { en: 'Object-Oriented Programming with C#', es: 'Programación Orientada a Objetos con C#' },
    area: area.csharp, issuer: 'Platzi',
  },
  {
    title: { en: 'Basic Programming with C#', es: 'Programación Básica con C#' },
    area: area.csharp, issuer: 'Platzi',
  },
  {
    title: { en: 'Backend with NestJS', es: 'Backend con NestJS' },
    area: area.backend, issuer: 'Platzi',
  },
  {
    title: 'API First',
    area: area.backend, issuer: 'Platzi',
  },
  {
    title: {
      en: 'Clean Code and Best Practices with JavaScript',
      es: 'Clean Code y Buenas Prácticas con JavaScript',
    },
    area: area.practices, issuer: 'Platzi',
  },
  {
    title: { en: 'Oracle PL/SQL from Scratch', es: 'Oracle PL/SQL desde Cero' },
    area: area.databases, issuer: 'Udemy',
  },
  {
    title: 'Microsoft Azure Administrator Associate (AZ-104)',
    area: area.cloud, issuer: 'Udemy',
  },
  {
    title: {
      en: 'Serverless Framework: API Gateway, AWS & Node.js',
      es: 'Serverless Framework: API Gateway, AWS y Node.js',
    },
    area: area.cloud, issuer: 'Udemy',
  },
  {
    title: {
      en: 'NGINX Fundamentals: High Performance Servers from Scratch',
      es: 'Fundamentos de NGINX: Servidores de Alto Rendimiento desde Cero',
    },
    area: area.devops, issuer: 'Udemy',
  },
  {
    title: {
      en: 'Git + GitHub: A Complete Version Control System from Scratch',
      es: 'Git + GitHub: Un Sistema de Control de Versiones Completo desde Cero',
    },
    area: area.devops, issuer: 'Udemy',
  },
  {
    title: {
      en: 'Introduction to Linux Server Administration',
      es: 'Introducción a la Administración de Servidores Linux',
    },
    area: area.devops, issuer: 'Platzi',
  },
  {
    title: { en: 'Internet Networking Fundamentals', es: 'Fundamentos de Redes de Internet' },
    area: area.networking, issuer: 'Platzi',
  },
  {
    title: 'TypeScript',
    area: area.frontend, issuer: 'Platzi',
  },
  {
    title: { en: 'JavaScript Fundamentals', es: 'Fundamentos de JavaScript' },
    area: area.frontend, issuer: 'Platzi',
  },
  {
    title: { en: 'Python Fundamentals', es: 'Fundamentos de Python' },
    area: area.python, issuer: 'Platzi',
  },
  {
    title: {
      en: 'Python TOTAL: Advanced Programmer in 16 Days',
      es: 'Python TOTAL: Programador Avanzado en 16 Días',
    },
    area: area.python, issuer: 'Udemy',
  },
  {
    title: {
      en: 'Odoo: Complete Development for Programmers',
      es: 'Odoo: Desarrollo Completo para Programadores',
    },
    area: area.python, issuer: 'Udemy',
  },
  {
    title: 'Flutter',
    area: area.mobile, issuer: 'Platzi',
  },
  {
    title: {
      en: 'HL7 FHIR Mastery: A Course for Newbies and Pros',
      es: 'HL7 FHIR Mastery: Un Curso para Principiantes y Profesionales',
    },
    area: area.health, issuer: 'Udemy',
  },
  {
    title: 'Claude Code',
    area: area.ai, issuer: 'Platzi',
  },
  {
    title: { en: 'Prompt Engineering', es: 'Ingeniería de Prompts' },
    area: area.ai, issuer: 'Platzi',
  },
  {
    title: { en: 'Business Models', es: 'Modelos de Negocio' },
    area: area.business, issuer: 'Platzi',
  },
  {
    title: { en: 'Digital Marketing', es: 'Marketing Digital' },
    area: area.business, issuer: 'Platzi',
  },
  {
    title: { en: 'How to Land a Programming Job', es: 'Cómo Conseguir un Trabajo en Programación' },
    area: area.career, issuer: 'Platzi',
  },
]
