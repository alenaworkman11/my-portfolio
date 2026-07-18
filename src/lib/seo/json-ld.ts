import { en } from "@/lib/i18n/en";
import { absoluteUrl, seoDefaults } from "./config";

function personSchema() {
  const { author } = seoDefaults;
  return {
    name: author.name,
    url: author.url,
    email: author.email,
    jobTitle: author.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: author.company,
    },
    sameAs: author.sameAs,
    knowsAbout: author.knowsAbout,
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
  };
}

export function createHomeJsonLd() {
  const person = personSchema();
  const personEntity = { "@type": "Person" as const, ...person };

  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: seoDefaults.title,
      description: seoDefaults.description,
      url: absoluteUrl("/"),
      mainEntity: personEntity,
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: seoDefaults.siteName,
      url: absoluteUrl("/"),
      description: seoDefaults.description,
      inLanguage: ["en", "es", "ru", "de", "zh-CN", "it"],
      author: personEntity,
    },
    {
      "@context": "https://schema.org",
      ...personEntity,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `${seoDefaults.author.name} — QA Automation & Quality Engineering`,
      description: seoDefaults.description,
      url: absoluteUrl("/"),
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      provider: personEntity,
    },
  ];
}

export function createBlogListJsonLd() {
  const posts = en.blog.posts;
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: en.blog.heading,
      description: en.blog.subtitle,
      url: absoluteUrl("/blog"),
      isPartOf: {
        "@type": "WebSite",
        name: seoDefaults.siteName,
        url: absoluteUrl("/"),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: en.blog.heading,
          item: absoluteUrl("/blog"),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: en.blog.heading,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/blog/${post.slug}`),
        name: post.title,
      })),
    },
  ];
}

export function createBlogPostJsonLd(slug: string) {
  const post = en.blog.posts.find((p) => p.slug === slug);
  if (!post) return [];

  const person = personSchema();
  const personEntity = { "@type": "Person" as const, ...person };
  const url = absoluteUrl(`/blog/${slug}`);
  const description = post.excerpt;

  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description,
      datePublished: post.date,
      dateModified: post.date,
      author: personEntity,
      publisher: {
        "@type": "Person",
        name: personEntity.name,
        url: personEntity.url,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      url,
      inLanguage: "en",
      articleBody: [
        ...post.intro,
        ...post.sections.flatMap((s) => [
          ...(s.title ? [s.title] : []),
          ...s.paragraphs,
          ...("listItems" in s && s.listItems ? s.listItems : []),
        ]),
        ...post.outro,
      ].join("\n\n"),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: en.blog.heading,
          item: absoluteUrl("/blog"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: url,
        },
      ],
    },
  ];
}
