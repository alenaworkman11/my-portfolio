"use client";

import { siteData } from "@/data/site";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "./providers/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-accent/20 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href={siteData.github}
              className="text-muted transition-colors hover:text-accent-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav.github}
            </a>
            <a
              href={siteData.linkedin}
              className="text-muted transition-colors hover:text-accent-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav.linkedin}
            </a>
            <a
              href={siteData.resumePdf}
              className="mock-placeholder text-muted transition-colors hover:text-accent-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav.resume}
            </a>
          </div>
          <LanguageSwitcher />
        </div>
        <p className="mt-6 text-xs text-muted">
          © {year}{" "}
          <span className="gradient-text-subtle">{t.hero.name}</span>.{" "}
          {t.footer.rights} · {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
