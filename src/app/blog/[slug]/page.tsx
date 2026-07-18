import { BlogPostPage } from "@/components/BlogPostPage";
import { en } from "@/lib/i18n/en";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return en.blog.posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <BlogPostPage slug={slug} />;
}
