"use client";

import { useEffect } from "react";
import { MIN_DWELL_MS } from "@/lib/analytics/constants";
import { trackAnalytics } from "@/lib/analytics/track";

type BlogArticleTrackerProps = {
  slug: string;
  title: string;
};

export function BlogArticleTracker({ slug, title }: BlogArticleTrackerProps) {
  useEffect(() => {
    const startedAt = Date.now();
    let leaveSent = false;

    const sendLeave = () => {
      if (leaveSent) return;

      const durationSeconds = Math.round((Date.now() - startedAt) / 1000);
      if (durationSeconds < MIN_DWELL_MS / 1000) return;

      leaveSent = true;
      trackAnalytics({
        event: "article_leave",
        articleTitle: title,
        path: `/blog/${slug}`,
        durationSeconds,
      });
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendLeave();
      }
    };

    window.addEventListener("pagehide", sendLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("pagehide", sendLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      sendLeave();
    };
  }, [slug, title]);

  return null;
}
