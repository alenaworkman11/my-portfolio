import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { it } from "./it";
import { ru } from "./ru";
import type { Locale } from "./types";
import { zh } from "./zh";

export const translations = { en, es, ru, de, zh, it } as const;

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.en;
}

export type { Locale };
