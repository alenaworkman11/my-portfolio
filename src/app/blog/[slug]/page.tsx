import Link from "next/link";
import { placeholderData } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return placeholderData.blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = placeholderData.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-muted">Post not found.</p>
        <Link href="/blog" className="mt-4 inline-block text-accent">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/blog" className="text-sm text-muted transition-colors hover:text-foreground">
        ← Back to blog
      </Link>
      <time className="mock-placeholder mt-8 block text-xs uppercase tracking-widest text-muted">
        {post.date}
      </time>
      <h1 className="mock-placeholder mt-2 text-3xl font-medium tracking-tight text-foreground">
        {post.title}
      </h1>
      <div className="mock-placeholder mt-8 space-y-4 text-base leading-relaxed text-muted">
        <p>{post.excerpt}</p>
        <p>
          This is placeholder blog content. Replace with your full article text,
          code samples, and images.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quality
          engineering is about building systems that prevent defects before they
          reach production — a mindset that applies equally to test automation
          and software development.
        </p>
      </div>
    </article>
  );
}
