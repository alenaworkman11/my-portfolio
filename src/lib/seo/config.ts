import { siteConfig, siteData } from "@/data/site";

export const seoKeywords = [
  "QA Automation Engineer",
  "SDET",
  "Software Quality Engineer",
  "Test Automation",
  "Playwright",
  "Selenium",
  "E2E Testing",
  "API Testing",
  "Performance Testing",
  "k6",
  "React",
  "Next.js",
  "TypeScript",
  "Quality Engineering",
  "New York",
  "Alena Workman",
  "инженер по автоматизации тестирования",
  "автоматизация тестирования",
  "тестирование ПО",
];

export const supportedLanguages = ["en", "es", "ru", "de", "zh", "it"] as const;

export function absoluteUrl(path = ""): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export const seoDefaults = {
  siteName: siteConfig.name,
  title: `${siteConfig.name} — QA Automation Engineer | SDET`,
  description: siteConfig.description,
  keywords: seoKeywords,
  locale: "en_US",
  type: "website" as const,
  author: {
    name: siteConfig.name,
    email: siteData.email,
    url: siteConfig.url,
    jobTitle: siteData.currentRole,
    company: siteData.company,
    location: siteData.location,
    sameAs: [siteData.github, siteData.linkedin],
    knowsAbout: [
      "Playwright",
      "Selenium",
      "Test Automation",
      "API Testing",
      "Performance Testing",
      "React",
      "Next.js",
      "TypeScript",
      "Quality Engineering",
    ],
  },
};
