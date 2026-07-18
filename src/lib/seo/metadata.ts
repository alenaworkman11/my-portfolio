import type { Metadata } from "next";
import { en } from "@/lib/i18n/en";
import { siteConfig } from "@/data/site";
import { absoluteUrl, seoDefaults } from "./config";

function buildVerification(): Metadata["verification"] {
  const google = process.env.GOOGLE_SITE_VERIFICATION;
  const yandex = process.env.YANDEX_VERIFICATION;
  const bing = process.env.BING_SITE_VERIFICATION;

  if (!google && !yandex && !bing) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(yandex ? { yandex } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}

function baseOpenGraph(
  title: string,
  description: string,
  path: string,
  type: "website" | "article" = "website",
): Metadata["openGraph"] {
  return {
    type,
    locale: seoDefaults.locale,
    url: absoluteUrl(path),
    siteName: seoDefaults.siteName,
    title,
    description,
    images: [
      {
        url: absoluteUrl(`${path === "/" ? "" : path}/opengraph-image`),
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  };
}

function baseTwitter(title: string, description: string): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title,
    description,
    creator: `@${seoDefaults.siteName.replace(/\s+/g, "")}`,
  };
}

export function createRootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: seoDefaults.title,
      template: `%s | ${seoDefaults.siteName}`,
    },
    description: seoDefaults.description,
    keywords: seoDefaults.keywords,
    applicationName: seoDefaults.siteName,
    authors: [{ name: seoDefaults.author.name, url: seoDefaults.author.url }],
    creator: seoDefaults.author.name,
    publisher: seoDefaults.author.name,
    category: "technology",
    classification: "Portfolio, QA Automation, Software Testing",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: absoluteUrl("/"),
      types: {
        "application/rss+xml": absoluteUrl("/feed.xml"),
      },
    },
    openGraph: baseOpenGraph(
      seoDefaults.title,
      seoDefaults.description,
      "/",
    ),
    twitter: baseTwitter(seoDefaults.title, seoDefaults.description),
    verification: buildVerification(),
    other: {
      "content-language": "en",
      "geo.region": "US-NY",
      "geo.placename": "New York",
    },
  };
}

export function createHomeMetadata(): Metadata {
  return {
    title: seoDefaults.title,
    description: seoDefaults.description,
    alternates: { canonical: absoluteUrl("/") },
    openGraph: baseOpenGraph(
      seoDefaults.title,
      seoDefaults.description,
      "/",
    ),
    twitter: baseTwitter(seoDefaults.title, seoDefaults.description),
  };
}

export function createBlogMetadata(): Metadata {
  const title = `${en.blog.heading} — ${seoDefaults.siteName}`;
  const description = en.blog.subtitle;

  return {
    title: en.blog.heading,
    description,
    keywords: [
      ...seoDefaults.keywords.slice(0, 8),
      "QA blog",
      "test automation blog",
      "software quality",
      "блог о тестировании",
    ],
    alternates: { canonical: absoluteUrl("/blog") },
    openGraph: baseOpenGraph(title, description, "/blog"),
    twitter: baseTwitter(title, description),
  };
}

export function createBlogPostMetadata(slug: string): Metadata {
  const post = en.blog.posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: en.blog.notFound,
      robots: { index: false, follow: false },
    };
  }

  const title = post.title;
  const description = post.excerpt;
  const path = `/blog/${slug}`;

  return {
    title,
    description,
    keywords: [
      ...seoDefaults.keywords.slice(0, 6),
      "QA",
      "software testing",
      post.title,
    ],
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      ...baseOpenGraph(title, description, path, "article"),
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [seoDefaults.author.name],
      section: "Software Quality",
      tags: ["QA", "Test Automation", "Software Engineering"],
    },
    twitter: baseTwitter(title, description),
  };
}
