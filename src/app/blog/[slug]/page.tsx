import type { Metadata } from "next";
import { BlogPostPage } from "@/components/BlogPostPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBlogPostJsonLd, createBlogPostMetadata } from "@/lib/seo";
import { en } from "@/lib/i18n/en";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return en.blog.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return createBlogPostMetadata(slug);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return (
    <>
      <JsonLd data={createBlogPostJsonLd(slug)} />
      <BlogPostPage slug={slug} />
    </>
  );
}
