"use client";

import { locales } from "@/lib/i18n/types";
import { useI18n } from "./providers/I18nProvider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-1 text-xs text-muted">
      {locales.map(({ code, label }, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 && <span className="opacity-30">·</span>}
          <button
            type="button"
            onClick={() => setLocale(code)}
            className={`transition-colors hover:text-foreground ${
              locale === code ? "text-foreground" : "opacity-60"
            }`}
            aria-label={`Switch to ${label}`}
            aria-current={locale === code ? "true" : undefined}
          >
            {label}
          </button>
        </span>
      ))}
    </div>
  );
}
