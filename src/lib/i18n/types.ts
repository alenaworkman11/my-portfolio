export type Locale = "en" | "es" | "ru" | "de" | "zh" | "it";

export const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "ru", label: "RU" },
  { code: "de", label: "DE" },
  { code: "zh", label: "中文" },
  { code: "it", label: "IT" },
];

export const defaultLocale: Locale = "en";

export type TranslationKeys = typeof import("./en").en;
