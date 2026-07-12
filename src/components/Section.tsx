import { cn } from "@/lib/utils";

const PILL_COLORS = [
  "from-violet-500/20 to-indigo-500/10 border-violet-400/30",
  "from-cyan-500/20 to-blue-500/10 border-cyan-400/30",
  "from-indigo-500/20 to-purple-500/10 border-indigo-400/30",
  "from-fuchsia-500/20 to-violet-500/10 border-fuchsia-400/30",
];

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
};

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  accent,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 md:py-20", className)}>
      <div className="mx-auto max-w-3xl px-6">
        {title && (
          <header className="mb-10">
            <h2
              className={cn(
                "text-2xl font-semibold tracking-tight md:text-3xl",
                accent ? "gradient-text" : "text-foreground",
              )}
            >
              {title}
            </h2>
            {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export function SkillGroup({
  title,
  items,
  note,
  colorIndex = 0,
}: {
  title: string;
  items: readonly string[];
  note?: string;
  colorIndex?: number;
}) {
  const pillColor = PILL_COLORS[colorIndex % PILL_COLORS.length];

  return (
    <div className="border-t border-border/60 py-8 first:border-t-0 first:pt-0">
      <h3 className="mb-4 text-sm font-medium uppercase tracking-widest gradient-text-subtle">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              "rounded-full border bg-gradient-to-br px-3 py-1.5 text-sm text-foreground transition-transform hover:-translate-y-0.5",
              pillColor,
            )}
          >
            {item}
          </li>
        ))}
      </ul>
      {note && (
        <p className="mt-4 text-sm leading-relaxed text-muted">{note}</p>
      )}
    </div>
  );
}

export function TimelineEntry({
  title,
  subtitle,
  period,
  note,
  location,
  highlight = false,
  featured = false,
  index = 0,
}: {
  title: string;
  subtitle?: string;
  period: string;
  note?: string;
  location?: string;
  highlight?: boolean;
  featured?: boolean;
  index?: number;
}) {
  const accents = [
    "from-violet-500/10 to-transparent",
    "from-cyan-500/10 to-transparent",
    "from-amber-500/10 to-transparent",
  ];

  return (
    <article
      className={cn(
        "gradient-border glass-card relative mb-4 p-6 transition-transform hover:-translate-y-0.5 last:mb-0",
        "bg-gradient-to-br",
        accents[index % accents.length],
        highlight && "ring-1 ring-accent-secondary/30",
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-medium text-foreground md:text-lg">
              {title}
            </h3>
            {featured && (
              <span className="rounded-full bg-gradient-to-r from-accent to-accent-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
                QA
              </span>
            )}
            {highlight && (
              <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-300">
                ★
              </span>
            )}
          </div>
          {subtitle && (
            <p className="mt-1 text-sm text-accent-secondary">{subtitle}</p>
          )}
          {location && (
            <p className="mt-0.5 text-xs text-muted">{location}</p>
          )}
          {note && (
            <p className="mt-2 text-xs text-muted">{note}</p>
          )}
        </div>
        <time className="shrink-0 text-xs font-medium uppercase tracking-wider text-muted">
          {period}
        </time>
      </div>
    </article>
  );
}

export function ProjectCard({
  title,
  subtitle,
  achievements,
  link,
  linkLabel,
  linkIsPlaceholder = false,
  index = 0,
}: {
  title: string;
  subtitle: string;
  achievements: readonly string[];
  link?: string;
  linkLabel?: string;
  linkIsPlaceholder?: boolean;
  index?: number;
}) {
  const accents = [
    "from-violet-500/10 to-transparent",
    "from-cyan-500/10 to-transparent",
    "from-indigo-500/10 to-transparent",
    "from-fuchsia-500/10 to-transparent",
  ];
  const accent = accents[index % accents.length];

  return (
    <article
      className={cn(
        "group gradient-border glass-card relative mb-4 overflow-hidden p-6 transition-transform hover:-translate-y-1 last:mb-0",
        "bg-gradient-to-br",
        accent,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium text-foreground">{title}</h3>
          <p className="mt-1 text-sm text-accent-secondary">{subtitle}</p>
        </div>
        {link && linkLabel && (
          <a
            href={link}
            className={`shrink-0 text-sm gradient-text-subtle transition-opacity hover:opacity-70${linkIsPlaceholder ? " mock-placeholder" : ""}`}
            target={linkIsPlaceholder ? undefined : "_blank"}
            rel={linkIsPlaceholder ? undefined : "noopener noreferrer"}
          >
            {linkLabel} →
          </a>
        )}
      </div>
      <ul className="mt-4 space-y-2">
        {achievements.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-secondary" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
