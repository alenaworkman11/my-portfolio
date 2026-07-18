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
  github: "https://github.com/alenaworkman11",
  linkedin: "https://www.linkedin.com/in/alena-workman-9a137626b",
  resumePdf: "/resume.pdf",
  yearsExperience: "5+",
  currentRole: "QA Automation Engineer",
  company: "TransPerfect",
  repo: "https://github.com/alenaworkman11",
};

/** Career-level metrics for 5+ years in QA automation & software engineering */
export const stats = [
  { value: "5+", label: "Years in QA & software engineering" },
  { value: "350+", label: "E2E tests in active automation suites" },
  { value: "1,200+", label: "Automated scenarios delivered" },
  { value: "200+", label: "API & integration test cases" },
];

/** Placeholder content — marked with mock-placeholder class in UI */
export const placeholderData = {};

/** @deprecated use siteData */
export const mockData = { ...siteData, ...placeholderData };
