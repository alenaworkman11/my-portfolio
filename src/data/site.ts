export const siteConfig = {
  name: "Alena Workman",
  url: "https://alenaworkman.dev",
  description:
    "QA Automation Engineer | SDET | Software Quality Engineer — building reliable software through automation, frontend engineering, and deep user experience understanding.",
};

export const siteData = {
  email: "alenaworkman11@gmail.com",
  workEmail: "alena.workman@transperfect.com",
  location: "New York, NY, USA",
  office: "TransPerfect · New York, NY",
  github: "https://github.com/alenaworkman",
  linkedin: "https://www.linkedin.com/in/alena-workman-9a137626b",
  resumePdf: "/resume.pdf",
  yearsExperience: "5+",
  currentRole: "QA Automation Engineer",
  company: "TransPerfect",
  repo: "https://github.com/devBenWolf/client2",
};

/** Career-level metrics for 5+ years in QA automation & software engineering */
export const stats = [
  { value: "5+", label: "Years in QA & software engineering" },
  { value: "350+", label: "E2E tests in active automation suites" },
  { value: "1,200+", label: "Automated scenarios delivered" },
  { value: "200+", label: "API & integration test cases" },
];

/** Placeholder content — marked with mock-placeholder class in UI */
export const placeholderData = {
  blogPosts: [
    {
      slug: "from-qa-to-engineering",
      date: "2026-03-15",
      title: "From QA to Engineering: A Journey of Continuous Learning",
      excerpt:
        "How moving beyond traditional testing roles opened new perspectives on software quality and development.",
    },
    {
      slug: "playwright-best-practices",
      date: "2026-02-08",
      title: "Playwright Best Practices for Enterprise Test Suites",
      excerpt:
        "Lessons learned from maintaining 350+ automated tests in a production environment.",
    },
    {
      slug: "favorites-feature-ownership",
      date: "2026-01-20",
      title: "Owning Favorites End-to-End: From Icon to API Sync",
      excerpt:
        "What I learned shipping a multi-month favorites feature across reports, searches, and refresh persistence.",
    },
  ],
  projectLinks: [
    { url: "#", label: "Playwright Framework" },
    { url: "https://github.com/devBenWolf/client2", label: "client2 Repository" },
    { url: "https://github.com/devBenWolf/client2/pull/1424", label: "Favorite Searches PR" },
  ],
};

/** @deprecated use siteData */
export const mockData = { ...siteData, ...placeholderData };
