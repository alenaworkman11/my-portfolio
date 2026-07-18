import { ImageResponse } from "next/og";
import { seoDefaults } from "@/lib/seo/config";

export const alt = seoDefaults.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
            fontSize: 22,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#a78bfa",
            marginBottom: 24,
          }}
        >
          QA Automation Engineer
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            background: "linear-gradient(90deg, #818cf8, #c084fc, #f472b6)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {seoDefaults.siteName}
        </div>
        <div
          style={{
            marginTop: 28,
            maxWidth: 900,
            fontSize: 28,
            lineHeight: 1.4,
            color: "#cbd5e1",
          }}
        >
          Playwright · React · Next.js · API & Performance Testing
        </div>
      </div>
    ),
    { ...size },
  );
}
