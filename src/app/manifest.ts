import type { MetadataRoute } from "next";
import { seoDefaults } from "@/lib/seo/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoDefaults.title,
    short_name: seoDefaults.siteName,
    description: seoDefaults.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#6366f1",
    lang: "en",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
