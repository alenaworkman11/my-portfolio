import { ImageResponse } from "next/og";
import { en } from "@/lib/i18n/en";
import { seoDefaults } from "@/lib/seo/config";

export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = en.blog.posts.find((p) => p.slug === slug);
  const title = post?.title ?? "Blog Post";
  const excerpt = post?.excerpt ?? en.blog.subtitle;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1033 50%, #0f172a 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#a78bfa",
            marginBottom: 24,
          }}
        >
          {`${seoDefaults.siteName} · Blog`}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 48,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#e2e8f0",
          }}
        >
          {title.length > 90 ? `${title.slice(0, 87)}...` : title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            maxWidth: 900,
            fontSize: 24,
            lineHeight: 1.4,
            color: "#cbd5e1",
          }}
        >
          {excerpt.length > 160 ? `${excerpt.slice(0, 157)}...` : excerpt}
        </div>
      </div>
    ),
    { ...size },
  );
}

export async function generateStaticParams() {
  return en.blog.posts.map((post) => ({ slug: post.slug }));
}
