"use client";

import Link from "next/link";
import { placeholderData } from "@/data/site";
import { Section } from "@/components/Section";
import { useI18n } from "@/components/providers/I18nProvider";

export function BlogPage() {
  const { t } = useI18n();

  return (
    <Section title={t.blog.heading} subtitle={t.blog.subtitle}>
      <div className="space-y-0">
        {placeholderData.blogPosts.map((post) => (
          <article
            key={post.slug}
            className="mock-placeholder border-t border-border py-8 first:border-t-0 first:pt-0"
          >
            <time className="text-xs uppercase tracking-widest text-muted">
              {post.date}
            </time>
            <h3 className="mt-2 text-lg font-medium text-foreground">
              {post.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-3 inline-block text-sm text-accent transition-colors hover:text-accent-hover"
            >
              {t.blog.readMore} →
            </Link>
          </article>
        ))}
      </div>
      <p className="mock-placeholder mt-8 text-xs text-muted">
        Blog posts are placeholder content — replace with your real articles.
      </p>
    </Section>
  );
}
