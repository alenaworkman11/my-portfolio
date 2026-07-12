export const es = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    education: "Educación",
    activities: "Actividades",
    blog: "Blog",
    resume: "CV",
    github: "GitHub",
    linkedin: "LinkedIn",
    contact: "Contacto",
  },
  hero: {
    name: "Alena Workman",
    title: "QA Automation Engineer | SDET | Software Quality Engineer",
    tagline:
      "Construyo software confiable combinando automatización de pruebas, mentalidad de ingeniería y contribución frontend — de 350+ tests Playwright a features React en producción.",
    journey: "Del aseguramiento de calidad a la ingeniería.",
  },
  about: {
    heading: "Sobre mí",
    p1: "Soy QA Automation Engineer con más de 5 años de experiencia, apasionada por software de alta calidad. Mi background incluye automatización, API/performance testing y cada vez más — frontend en aplicaciones enterprise React/Next.js.",
    p2: "Creo que la calidad no es solo encontrar bugs — es prevenirlos, mejorar procesos, instrumentar el producto y ayudar a los equipos a construir mejores experiencias.",
    p3: "Mi camino de testing manual a automatización e ingeniería refleja adaptabilidad. Combino automatización de regresión con contribución frontend — ownership end-to-end de favorites y cobertura Playwright enterprise en múltiples ciclos de release.",
  },
  skills: {
    heading: "Habilidades Técnicas",
    testAutomation: "Automatización de Pruebas",
    apiTesting: "Pruebas de API",
    performance: "Pruebas de Rendimiento",
    frontend: "Tecnologías Frontend",
    frontendNote:
      "Contribución práctica en React/Next.js enterprise — favorites, tablas de reports, ActionButtons, Super Admin y Glassboard UI.",
    qualityEngineering: "Quality Engineering & Testability",
    tools: "Herramientas y Flujo de Trabajo",
  },
  projects: {
    heading: "Proyectos Destacados",
    viewProject: "Ver proyecto",
  },
  beyond: {
    heading: "Más Allá de la Tecnología",
    intro:
      "Ocho años como atleta olímpica nacional de atletismo de Bielorrusia — incluyendo bronce en el Campeonato Europeo — y décadas de maratón moldearon mi enfoque en ingeniería: consistencia, resiliencia y enfoque a largo plazo.",
    traits: "Consistencia. Disciplina. Mentalidad de crecimiento a largo plazo.",
  },
  education: {
    heading: "Educación",
    items: [
      {
        institution: "Chroma Tech Academy",
        degree: "Advanced Education Certification, Software QA/Testing",
        period: "Nov 2021 – May 2023",
        note: "Certificate",
        featured: true,
      },
      {
        institution: "Belarusian State University",
        location: "Republic of Belarus",
        degree: "Master's / Advanced Education",
        period: "1994 – 1998",
      },
      {
        institution:
          "Institute of Advanced Training and Retraining of Managers and Specialists of Physical Culture, Sports and Tourism",
        degree: "Master's / Advanced Education",
        period: "2012 – 2018",
      },
    ],
  },
  activities: {
    heading: "Actividades",
    subtitle: "Atletismo y resistencia — base de la disciplina en ingeniería.",
    items: [
      {
        title: "Belarus National Olympic Track and Field Team",
        subtitle: "Professional National Athlete",
        period: "1990 – 1998",
      },
      {
        title: "European Championship",
        subtitle: "Bronze Medalist — Track & Field",
        period: "1997",
        highlight: true,
      },
      {
        title: "World Championship Marathon",
        subtitle: "Chicago Marathon",
        period: "2023",
        highlight: true,
      },
    ],
  },
  learning: {
    heading: "Aprendizaje y Crecimiento",
    items: [
      "Patrones avanzados de TypeScript",
      "Advanced React & Next.js App Router",
      "Herramientas de IA para desarrollo",
      "Estrategias modernas de testing",
    ],
  },
  blog: {
    heading: "Blog y Notas",
    subtitle: "Reflexiones sobre calidad, automatización e ingeniería.",
    readMore: "Leer más",
  },
  contact: {
    heading: "Contacto",
    subtitle:
      "Abierta a oportunidades en QA automation, SDET, software quality engineering y frontend con enfoque en calidad.",
    getResume: "Descargar CV",
    sendMessage: "Enviar mensaje",
    email: "Correo",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    builtWith: "Construido con Next.js",
  },
  projectItems: [
    {
      title: "Enterprise Test Automation Framework",
      subtitle: "Playwright Automation Suite",
      achievements: [
        "Diseñé y mantuve 350+ tests E2E automatizados",
        "Componentes POM reutilizables y test utilities",
        "Mejor eficiencia de regresión en flujos críticos",
        "Diagnósticos con screenshots y video",
        "Integración en CI/CD y workflow de desarrollo",
      ],
    },
    {
      title: "Favorites & Reports Experience",
      subtitle: "Enterprise React Client — ownership end-to-end",
      achievements: [
        "Ownership de favorites: icono, race fixes, saved-search favorites",
        "Features en producción en reports, tables y forms a lo largo de múltiples sprints",
        "useSetSearchFavorite, RowActions, URL/searchId sync",
        "Fixes de refresh persistence, star toggle y disabled states",
        "36 commits en MainAppReportsTable, 18 en GenericTable",
      ],
    },
    {
      title: "Testability & QA Enablement",
      subtitle: "Instrumentación data-testid en el producto",
      achievements: [
        "25+ commits con data-testid estables para Playwright e2e",
        "Super Admin, Apps, tables y forms (DEBT sprints)",
        "a11y: aria-current, focus fixes, IconButton semantics",
        "Vulnerabilidades npm (#1169 y follow-ups)",
        "Multiplicador de velocidad QA para regression runs",
      ],
    },
    {
      title: "Performance Testing & Data Grid Quality",
      subtitle: "k6 · AG Grid · Enterprise Data Workflows",
      achievements: [
        "Escenarios k6 para auth endpoints bajo carga concurrente",
        "Validación AG Grid — filtering, editing, import/export",
        "Workflows de datos enterprise y mejoras UI con developers",
        "Análisis de comportamiento bajo carga",
      ],
    },
  ],
  skillGroups: {
    testAutomation: [
      "Playwright",
      "Selenium WebDriver",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Page Object Model",
      "Faker (generación de datos)",
    ],
    apiTesting: [
      "REST API",
      "Postman",
      "Newman",
      "Validación de API",
      "Flujos de autenticación",
      "Pruebas de integración backend",
    ],
    performance: ["k6", "Pruebas de carga", "Análisis de rendimiento"],
    frontend: [
      "React",
      "Next.js App Router",
      "TypeScript",
      "CSS Modules",
      "Material UI",
      "React Hooks",
      "AG Grid",
    ],
    qualityEngineering: [
      "data-testid instrumentation",
      "Playwright e2e enablement",
      "Accessibility (a11y)",
      "Regression strategy",
      "Test design",
      "npm security hygiene",
    ],
    tools: [
      "Git / GitHub",
      "GitHub Desktop",
      "Jira",
      "CI/CD pipelines",
      "VS Code",
      "Vitest ecosystem",
    ],
  },
} as const;
