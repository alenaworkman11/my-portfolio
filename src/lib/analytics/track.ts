"use client";

import type { AnalyticsPayload } from "@/lib/analytics/constants";
import {
  markAnalyticsEventSent,
  shouldSkipAnalyticsEvent,
} from "@/lib/analytics/dedupe";
import {
  ensureVisitorId,
  getVisitorLabel,
  getVisitorName,
} from "@/lib/analytics/visitor";

export function trackAnalytics(
  payload: Omit<AnalyticsPayload, "visitorId" | "visitorName">,
): void {
  if (shouldSkipAnalyticsEvent(payload.event)) return;

  markAnalyticsEventSent(payload.event);

  const body: AnalyticsPayload = {
    ...payload,
    visitorId: ensureVisitorId(),
    visitorName: getVisitorName() ?? undefined,
  };

  const serialized = JSON.stringify(body);

  if (
    payload.event === "article_leave" &&
    typeof navigator !== "undefined" &&
    "sendBeacon" in navigator
  ) {
    navigator.sendBeacon(
      "/api/analytics",
      new Blob([serialized], { type: "application/json" }),
    );
    return;
  }

  fetch("/api/analytics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: serialized,
    keepalive: payload.event === "article_leave",
  }).catch(() => {});
}

export function getAnalyticsVisitorLabel(): string {
  return getVisitorLabel();
}
