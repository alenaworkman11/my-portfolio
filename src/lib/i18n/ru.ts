export const ru = {
  nav: {
    home: "Главная",
    about: "Обо мне",
    skills: "Навыки",
    projects: "Проекты",
    education: "Образование",
    activities: "Активности",
    blog: "Блог",
    resume: "Резюме",
    github: "GitHub",
    linkedin: "LinkedIn",
    contact: "Контакты",
  },
  hero: {
    name: "Alena Workman",
    title: "QA Automation Engineer | SDET | Software Quality Engineer",
    tagline:
      "Я создаю надёжное ПО, сочетая автоматизацию тестирования, инженерное мышление и практический frontend — от 350+ Playwright-тестов до production React-фич.",
    journey: "От тестирования к инженерии.",
  },
  about: {
    heading: "Обо мне",
    p1: "Я QA Automation Engineer с 5+ годами опыта, увлечённая созданием качественного ПО. Мой бэкграунд включает автоматизацию тестирования, API и performance testing, а также frontend-разработку на enterprise React/Next.js.",
    p2: "Я считаю, что качество — это не только поиск багов, но и их предотвращение, улучшение процессов, инструментирование продукта для автоматизации и помощь командам в создании лучших продуктов.",
    p3: "Мой путь от ручного тестирования к автоматизации и инженерии отражает адаптивность и самообучение. Я сочетаю глубокую regression automation с практическим frontend — полностью владела favorites end-to-end, поддерживая enterprise Playwright coverage на протяжении многих релизов.",
  },
  skills: {
    heading: "Технические навыки",
    testAutomation: "Автоматизация тестирования",
    apiTesting: "API-тестирование",
    performance: "Нагрузочное тестирование",
    frontend: "Frontend-технологии",
    frontendNote:
      "Практический вклад в React/Next.js enterprise client — favorites, reports tables, forms ActionButtons, Super Admin navigation и Glassboard UI.",
    qualityEngineering: "Quality Engineering & Testability",
    tools: "Инструменты и рабочий процесс",
  },
  projects: {
    heading: "Избранные проекты",
    viewProject: "Смотреть проект",
  },
  beyond: {
    heading: "За пределами технологий",
    intro:
      "Восемь лет в сборной Беларуси по лёгкой атлетике — включая бронзу на чемпионате Европы — и десятилетия марафонского бега сформировали мой подход к инженерии: последовательность, устойчивость и долгосрочный фокус.",
    traits: "Последовательность. Дисциплина. Мышление долгосрочного роста.",
  },
  education: {
    heading: "Образование",
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
    heading: "Activities",
    subtitle: "Спорт и выносливость — фундамент инженерной дисциплины.",
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
    heading: "Обучение и рост",
    items: [
      "Продвинутые паттерны TypeScript",
      "Advanced React & Next.js App Router",
      "AI-инструменты для разработки ПО",
      "Современные стратегии тестирования",
    ],
  },
  blog: {
    heading: "Блог и заметки",
    subtitle: "Мысли о качестве, автоматизации и инженерии ПО.",
    readMore: "Читать далее",
  },
  contact: {
    heading: "Контакты",
    subtitle:
      "Открыта к возможностям в QA automation, SDET, software quality engineering и quality-focused frontend.",
    getResume: "Скачать резюме",
    sendMessage: "Написать сообщение",
    email: "Email",
  },
  footer: {
    rights: "Все права защищены.",
    builtWith: "Создано на Next.js",
  },
  projectItems: [
    {
      title: "Enterprise Test Automation Framework",
      subtitle: "Playwright Automation Suite",
      achievements: [
        "Разработала и поддерживала 350+ автоматизированных E2E-тестов",
        "Создала переиспользуемые POM-компоненты и test utilities",
        "Повысила эффективность регрессионного тестирования",
        "Добавила диагностику сбоев со скриншотами и видео",
        "Интегрировала автоматизацию в CI/CD и процесс разработки",
      ],
    },
    {
      title: "Favorites & Reports Experience",
      subtitle: "Enterprise React Client — end-to-end ownership",
      achievements: [
        "Полностью владела favorites: от иконки и race fixes до saved-search favorites",
        "Production-фичи в reports, tables и forms за несколько спринтов",
        "useSetSearchFavorite hook, RowActions extraction, URL/searchId sync",
        "Исправила refresh persistence, star toggle и disabled-state edge cases",
        "36 коммитов в MainAppReportsTable, 18 в GenericTable",
      ],
    },
    {
      title: "Testability & QA Enablement",
      subtitle: "data-testid instrumentation по всему продукту",
      achievements: [
        "25+ коммитов со stable data-testid для Playwright e2e",
        "Инструментировала Super Admin, Apps, tables и forms (DEBT sprints)",
        "Улучшила a11y: aria-current, focus fixes, IconButton semantics",
        "Закрыла npm vulnerabilities (#1169 и follow-ups)",
        "Ускорила QA-команду — надёжные селекторы для каждого regression run",
      ],
    },
    {
      title: "Performance Testing & Data Grid Quality",
      subtitle: "k6 Load Testing · AG Grid · Enterprise Data Workflows",
      achievements: [
        "k6-сценарии для auth endpoints под concurrent load",
        "Валидация AG Grid — filtering, editing, import/export",
        "Тестирование enterprise data workflows и UI improvements с dev-командой",
        "Анализ поведения приложения под нагрузкой",
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
      "Faker (генерация тестовых данных)",
    ],
    apiTesting: [
      "REST API",
      "Postman",
      "Newman",
      "API validation",
      "Authentication flows",
      "Backend integration testing",
    ],
    performance: ["k6", "Load testing", "Performance analysis"],
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
