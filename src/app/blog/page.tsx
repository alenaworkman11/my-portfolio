import { BlogPage } from "@/components/BlogPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBlogListJsonLd, createBlogMetadata } from "@/lib/seo";

export const metadata = createBlogMetadata();

export default function Blog() {
  return (
    <>
      <JsonLd data={createBlogListJsonLd()} />
      <BlogPage />
    </>
  );
}
