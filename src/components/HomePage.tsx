"use client";

import { siteData, stats } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";
import { ProjectCard, Section, SkillGroup, TimelineEntry } from "@/components/Section";
import { useI18n } from "@/components/providers/I18nProvider";

export function HomePage() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="scroll-mt-20 border-b border-border/50 py-20 md:py-32"
      >
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-accent-secondary">
            {t.hero.journey}
          </p>

          <h1 className="text-4xl font-semibold leading-snug tracking-tight md:text-6xl md:leading-snug">
            <span className="gradient-text block">{t.hero.title}</span>
          </h1>

          <div className="gradient-border glass-card relative mt-8 px-6 py-5">
            <p className="text-base md:text-lg">
              <span className="text-muted">Hello, my name is </span>
              <span className="font-medium gradient-text-subtle">{t.hero.name}</span>
              <span className="text-muted">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              {t.hero.tagline}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={siteData.resumePdf}
              data-analytics="resume"
              className="mock-placeholder btn-gradient inline-flex items-center rounded-full px-6 py-2.5 text-sm font-medium transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.getResume}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-accent/40 bg-surface/50 px-6 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-accent-secondary hover:text-accent-secondary"
            >
              {t.nav.contact}
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            {siteData.office} · {siteData.yearsExperience} years experience ·{" "}
            {siteData.currentRole}
          </p>

          {/* Stats */}
          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className="gradient-border glass-card relative px-4 py-5 text-center"
                style={{
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <dt className="gradient-text text-2xl font-semibold md:text-3xl">
                  {value}
                </dt>
                <dd className="mt-2 text-[11px] leading-snug text-muted md:text-xs">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <Section id="about" title={t.about.heading} accent>
        <div className="glass-card gradient-border relative space-y-4 p-6 text-base leading-relaxed text-muted">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title={t.skills.heading} accent className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 via-transparent to-accent-secondary/5" />
        <SkillGroup
          title={t.skills.testAutomation}
          items={t.skillGroups.testAutomation}
          colorIndex={0}
        />
        <SkillGroup
          title={t.skills.apiTesting}
          items={t.skillGroups.apiTesting}
          colorIndex={1}
        />
        <SkillGroup
          title={t.skills.performance}
          items={t.skillGroups.performance}
          colorIndex={2}
        />
        <SkillGroup
          title={t.skills.frontend}
          items={t.skillGroups.frontend}
          note={t.skills.frontendNote}
          colorIndex={3}
        />
        <SkillGroup
          title={t.skills.qualityEngineering}
          items={t.skillGroups.qualityEngineering}
          colorIndex={0}
        />
        <SkillGroup
          title={t.skills.tools}
          items={t.skillGroups.tools}
          colorIndex={1}
        />
      </Section>

      {/* Projects */}
      <Section id="projects" title={t.projects.heading} accent>
        {t.projectItems.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            achievements={project.achievements}
            link={siteData.github}
            linkLabel={t.projects.viewProject}
            index={index}
          />
        ))}
      </Section>

      {/* Education */}
      <Section id="education" title={t.education.heading} accent>
        {t.education.items.map((item, index) => (
          <TimelineEntry
            key={item.institution}
            title={item.institution}
            subtitle={item.degree}
            period={item.period}
            note={"note" in item ? (item.note as string) : undefined}
            location={"location" in item ? (item.location as string) : undefined}
            featured={"featured" in item ? Boolean(item.featured) : false}
            index={index}
          />
        ))}
      </Section>

      {/* Activities */}
      <Section
        id="activities"
        title={t.activities.heading}
        subtitle={t.activities.subtitle}
        accent
      >
        {t.activities.items.map((item, index) => (
          <TimelineEntry
            key={`${item.title}-${item.period}`}
            title={item.title}
            subtitle={item.subtitle}
            period={item.period}
            highlight={"highlight" in item ? Boolean(item.highlight) : false}
            index={index}
          />
        ))}
      </Section>

      {/* Beyond Technology */}
      <Section id="beyond" title={t.beyond.heading} accent>
        <div className="glass-card gradient-border relative p-6">
          <p className="text-base leading-relaxed text-muted">{t.beyond.intro}</p>
          <p className="mt-8 text-sm italic gradient-text-subtle">{t.beyond.traits}</p>
        </div>
      </Section>

      {/* Learning */}
      <Section id="learning" title={t.learning.heading} accent>
        <ul className="grid gap-3 sm:grid-cols-2">
          {t.learning.items.map((item, i) => (
            <li
              key={item}
              className="gradient-border glass-card relative px-4 py-3 text-sm text-foreground transition-transform hover:-translate-y-0.5"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title={t.contact.heading} subtitle={t.contact.subtitle} accent>
        <div className="gradient-border glass-card relative flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
          <a
            href={`mailto:${siteData.email}`}
            className="text-lg font-medium gradient-text-subtle transition-opacity hover:opacity-80"
          >
            {siteData.email}
          </a>
          <div className="flex gap-4 text-sm">
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
          </div>
        </div>
        <ContactForm />
      </Section>
    </>
  );
}
