"use client";

import Link from "next/link";
import { Section } from "@/components/Section";
import { useI18n } from "@/components/providers/I18nProvider";

export function BlogPage() {
  const { t } = useI18n();

  return (
    <Section title={t.blog.heading} subtitle={t.blog.subtitle} titleAs="h1" accent>
      <div className="space-y-0">
        {t.blog.posts.map((post) => (
          <article
            key={post.slug}
            className="border-t border-border py-8 first:border-t-0 first:pt-0"
          >
            <time className="text-xs uppercase tracking-widest text-muted">
              {post.date}
            </time>
            <h2 className="mt-2 text-lg font-medium text-foreground">
              {post.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-3 inline-block text-sm gradient-text-subtle transition-opacity hover:opacity-80"
            >
              {t.blog.readMore} →
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
