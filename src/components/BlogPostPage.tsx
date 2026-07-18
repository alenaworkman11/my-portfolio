"use client";

import Link from "next/link";
import { BlogArticleTracker } from "@/components/analytics/BlogArticleTracker";
import { useI18n } from "@/components/providers/I18nProvider";

type BlogPostPageProps = {
  slug: string;
};

export function BlogPostPage({ slug }: BlogPostPageProps) {
  const { t } = useI18n();
  const post = t.blog.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-muted">{t.blog.notFound}</p>
        <Link href="/blog" className="mt-4 inline-block text-accent">
          {t.blog.backToBlog}
        </Link>
      </div>
    );
  }

  return (
    <>
      <BlogArticleTracker slug={slug} title={post.title} />
      <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        {t.blog.backToBlog}
      </Link>

      <time className="mt-8 block text-xs uppercase tracking-widest text-muted">
        {post.date}
      </time>

      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {post.title}
      </h1>

      <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
        {post.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {post.sections.map((section, index) => (
          <div
            key={section.title ?? index}
            className="border-t border-border/60 pt-8"
          >
            {section.title && (
              <h2 className="gradient-text text-xl font-semibold tracking-tight md:text-2xl">
                {section.title}
              </h2>
            )}

            <div className={section.title ? "mt-6 space-y-4" : "space-y-4"}>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {"listItems" in section &&
                section.listItems &&
                section.listItems.length > 0 && (
                <ul className="space-y-2 pt-1">
                  {section.listItems.map((item: string) => (
                    <li key={item} className="flex gap-2 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}

        {post.outro.length > 0 && (
          <div className="space-y-4 border-t border-border/60 pt-8">
            {post.outro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </article>
    </>
  );
}
