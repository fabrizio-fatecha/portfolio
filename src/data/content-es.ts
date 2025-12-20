export const contentEs = {
  nav: {
    about: "Sobre Mí",
    experience: "Experiencia",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto"
  },
  hero: {
    greeting: "Hola, soy",
    name: "Desarrollador Fullstack",
    title: "Azure Certified | Odoo Developer | Backend Specialist",
    description: "Especializado en arquitecturas backend robustas, despliegues continuos y soluciones empresariales. Con conocimientos profundos en Azure, NestJS, Odoo y tecnologías cloud.",
    cta: {
      projects: "Ver Proyectos",
      contact: "Contáctame"
    }
  },
  about: {
    title: "Sobre Mí",
    subtitle: "Desarrollador Fullstack con enfoque en Backend",
    description: "Soy un desarrollador fullstack con 2 años de experiencia profesional, especializado en arquitecturas backend escalables y soluciones empresariales. Certificado en Azure, experto en desarrollo y administración de Odoo, y capaz de desarrollar servicios completos de forma independiente.",
    highlights: [
      {
        title: "Backend & Cloud",
        description: "Especializado en NestJS, microservicios y arquitecturas cloud con Azure. Experiencia en despliegues con Docker y CI/CD."
      },
      {
        title: "Odoo Expert",
        description: "Desarrollo y administración de módulos Odoo. Gestión de features y despliegues a producción con control de versiones."
      },
      {
        title: "DevOps Ready",
        description: "Conocimientos en flujos de despliegue continuo, Linux, Docker, Nginx, y gestión de infraestructura."
      }
    ],
    stats: {
      experience: "2+ Años",
      projects: "Proyectos de Alto Impacto",
      technologies: "15+ Tecnologías"
    }
  },
  experience: {
    title: "Experiencia Profesional",
    subtitle: "Mi trayectoria profesional",
    jobs: [
      {
        company: "Neighpart S.A.E.C.A",
        position: "Desarrollador Fullstack & DevOps",
        period: "AGO 2025 - Presente",
        location: "Paraguay",
        description: "Gestión y administración del desarrollo de features y despliegues a producción del sistema Odoo a través de GitHub.",
        achievements: [
          "Administración completa del sistema Odoo empresarial",
          "Implementación de flujos CI/CD para despliegues automatizados",
          "Desarrollo de módulos custom para necesidades específicas del negocio",
          "Gestión de control de versiones y releases"
        ],
        technologies: ["Odoo", "Python", "XML", "PostgreSQL", "Git", "GitHub", "Linux", "Docker"]
      },
      {
        company: "Vitalics Project",
        position: "Desarrollador Fullstack",
        period: "AGO 2025 - Presente",
        location: "Instituto de Previsión Social del Paraguay",
        description: "Proyecto de $5 millones de dólares para modernización de sistemas del IPS Paraguay.",
        achievements: [
          "Desarrollo de soluciones críticas para institución gubernamental",
          "Trabajo con presupuesto de $5M USD",
          "Implementación de sistemas de alta disponibilidad",
          "Colaboración en arquitectura de microservicios"
        ],
        technologies: ["NestJS", "React", "MUI", "Node.js + Express", "TypeScript", "PostgreSQL", "Docker", "Nginx", "Azure", "Figma", "Postman"]
      },
      {
        company: "ITTI S.A.E.C.A",
        position: "Desarrollador Fullstack",
        period: "OCT 2024 - AGO 2025",
        location: "Paraguay",
        description: "Proyecto colaborativo para desarrollo de backoffice para analistas de soporte de aplicación con alto impacto interno.",
        achievements: [
          "Desarrollo de backoffice para analistas de soporte",
          "Arquitectura backend con NestJS y OracleDB",
          "Frontend moderno con React",
          "Containerización con Docker y gestión con GitHub",
          "Alto impacto a nivel interno de la organización"
        ],
        technologies: ["NestJS", "React", "MUI", "Docker", "OracleDB", "PLSQL", "GitHub", "TypeScript", "Docker", "Nginx","Figma", "Postman", "JIRA"]
      }
    ]
  },
  skills: {
    title: "Habilidades Técnicas",
    subtitle: "Stack tecnológico y herramientas",
    categories: [
      {
        name: "Backend",
        skills: [
          { name: "NestJS", level: 90 },
          { name: "Node.js", level: 85 },
          { name: "Python", level: 80 },
          { name: "Java", level: 75 }
        ]
      },
      {
        name: "Frontend",
        skills: [
          { name: "React", level: 85 },
          { name: "TypeScript", level: 90 },
          { name: "JavaScript", level: 95 }
        ]
      },
      {
        name: "Databases",
        skills: [
          { name: "PostgreSQL", level: 85 },
          { name: "OracleDB", level: 80 }
        ]
      },
      {
        name: "DevOps & Cloud",
        skills: [
          { name: "Azure", level: 85 },
          { name: "Docker", level: 85 },
          { name: "Linux", level: 80 },
          { name: "Nginx", level: 75 },
          { name: "Git/GitHub", level: 90 }
        ]
      },
      {
        name: "ERP & Tools",
        skills: [
          { name: "Odoo", level: 90 },
          { name: "Postman", level: 85 }
        ]
      }
    ]
  },
  projects: {
    title: "Proyectos Destacados",
    subtitle: "Trabajos de alto impacto",
    list: [
      {
        title: "Backoffice ITTI",
        company: "ITTI S.A.E.C.A",
        description: "Sistema de backoffice para analistas de soporte con arquitectura moderna y escalable.",
        impact: "Alto impacto a nivel interno",
        image: "/public/images/itti_logo.png",
        technologies: ["NestJS", "React", "MUI", "Docker", "OracleDB", "PLSQL", "GitHub", "TypeScript", "Docker", "Nginx","Figma", "Postman", "JIRA"],
        highlights: [
          "Arquitectura backend robusta con NestJS",
          "Integración con OracleDB",
          "Containerización completa con Docker",
          "CI/CD con GitHub Actions"
        ]
      },
      {
        title: "Vitalics - IPS Paraguay",
        company: "Instituto de Previsión Social",
        description: "Proyecto gubernamental de $5M USD para modernización de sistemas críticos.",
        impact: "Presupuesto: $5,000,000 USD",
        image: "/public/images/vitalics.png",
        technologies: ["NestJS", "React", "MUI", "Node.js + Express", "TypeScript", "PostgreSQL", "Docker", "Nginx", "Azure", "Figma", "Postman"],
        highlights: [
          "Sistemas críticos para institución gubernamental",
          "Alta disponibilidad y escalabilidad",
          "Arquitectura de microservicios",
          "Despliegue en Azure Cloud"
        ]
      },
      {
        title: "Sistema Odoo Neighpart",
        company: "Neighpart S.A.E.C.A",
        description: "Gestión completa del sistema ERP Odoo con desarrollo de módulos custom y CI/CD.",
        impact: "Sistema empresarial completo",
        image: "/public/images/neighpart.png",
        technologies: ["Odoo", "Python", "XML", "PostgreSQL", "Git", "GitHub", "Linux", "Docker"],
        highlights: [
          "Desarrollo de módulos custom",
          "Gestión de despliegues a producción",
          "Control de versiones con Git",
          "Administración completa del sistema"
        ]
      }
    ]
  },
  contact: {
    title: "Contacto",
    subtitle: "Disponible para proyectos freelance",
    description: "Busco oportunidades de trabajo independiente donde pueda aplicar mi experiencia en desarrollo fullstack y arquitecturas backend.",
    form: {
      name: "Nombre",
      email: "Email",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar Mensaje"
    },
    info: {
      email: "contacto@ejemplo.com",
      location: "Paraguay",
      availability: "Disponible para Freelance"
    },
    success: "¡Mensaje enviado con éxito!"
  },
  footer: {
    text: "Desarrollador Fullstack | Azure Certified | Disponible para Freelance",
    rights: "Fabrizio Fatecha - Todos los derechos reservados."
  },
  certifications: {
    title: "Certificaciones",
    list: [
      "Microsoft Azure Certified Administrator"
    ]
  }
};
