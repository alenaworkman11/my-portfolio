"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { MIN_DWELL_MS } from "@/lib/analytics/constants";
import { wasDailyEventSent } from "@/lib/analytics/dedupe";
import { trackAnalytics } from "@/lib/analytics/track";
import { captureUtmSourceFromSearch, getStoredUtmSource } from "@/lib/analytics/utm";
import { ensureVisitorId } from "@/lib/analytics/visitor";

function isBlogArticlePath(pathname: string): boolean {
  return pathname.startsWith("/blog/") && pathname !== "/blog/";
}

export function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const sessionStartRef = useRef(Date.now());

  useEffect(() => {
    ensureVisitorId();
    sessionStartRef.current = Date.now();
    captureUtmSourceFromSearch(window.location.search);
  }, []);

  useEffect(() => {
    if (isBlogArticlePath(pathname)) return;
    if (wasDailyEventSent("visit")) return;

    const timer = window.setTimeout(() => {
      const utmSource = getStoredUtmSource();
      trackAnalytics({
        event: "visit",
        path: pathname,
        utmSource: utmSource ?? undefined,
      });
    }, MIN_DWELL_MS);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest(
        '[data-analytics="resume"]',
      );
      if (!target) return;
      if (wasDailyEventSent("resume_click")) return;
      if (Date.now() - sessionStartRef.current < MIN_DWELL_MS) return;

      trackAnalytics({ event: "resume_click", path: pathname });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return children;
}
