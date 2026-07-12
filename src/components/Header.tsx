"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "./providers/I18nProvider";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { key: "home" as const, href: "/#home" },
  { key: "about" as const, href: "/#about" },
  { key: "skills" as const, href: "/#skills" },
  { key: "projects" as const, href: "/#projects" },
  { key: "education" as const, href: "/#education" },
  { key: "blog" as const, href: "/blog" },
];

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-accent/20 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight gradient-text-subtle transition-opacity hover:opacity-70"
        >
          Portfolio
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="text-sm text-muted transition-colors hover:text-accent-secondary"
            >
              {t.nav[key]}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            className="mock-placeholder text-sm text-muted transition-colors hover:text-accent-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.resume}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-accent/20 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navItems.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  className="text-sm text-muted"
                  onClick={() => setOpen(false)}
                >
                  {t.nav[key]}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                className="mock-placeholder text-sm text-muted"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.nav.resume}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
