import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { en } from "@/lib/i18n/en";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = en.blog.posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const latestBlogDate = blogPosts.reduce(
    (latest, post) =>
      post.lastModified > latest ? post.lastModified : latest,
    new Date(0),
  );

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: latestBlogDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}
