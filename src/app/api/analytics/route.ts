import { NextRequest, NextResponse } from "next/server";
import type { AnalyticsEvent } from "@/lib/analytics/constants";
import { formatAnalyticsMessage, sendTelegramMessage } from "@/lib/telegram";

const ALLOWED_EVENTS = new Set<AnalyticsEvent>([
  "visit",
  "article_leave",
  "resume_click",
]);

type AnalyticsBody = {
  event?: AnalyticsEvent;
  visitorId?: string;
  visitorName?: string;
  path?: string;
  articleTitle?: string;
  durationSeconds?: number;
  utmSource?: string;
  website?: string;
};

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  let payload: AnalyticsBody;

  try {
    payload = (await request.json()) as AnalyticsBody;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const event = payload.event;
  if (!event || !ALLOWED_EVENTS.has(event)) {
    return NextResponse.json({ error: "invalid_event" }, { status: 400 });
  }

  const visitorId = sanitize(payload.visitorId, 64);
  if (!visitorId) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  const visitorName = sanitize(payload.visitorName, 100);
  const visitorLabel = visitorName || visitorId;
  const path = sanitize(payload.path, 200);
  const articleTitle = sanitize(payload.articleTitle, 300);
  const utmSource = sanitize(payload.utmSource, 100);
  const durationSeconds =
    typeof payload.durationSeconds === "number" &&
    Number.isFinite(payload.durationSeconds)
      ? Math.max(0, Math.min(Math.round(payload.durationSeconds), 86_400))
      : undefined;

  if (event === "article_leave" && !articleTitle) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  if (event === "article_leave" && durationSeconds === undefined) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  try {
    const text = formatAnalyticsMessage(event, {
      visitorLabel,
      path: path || undefined,
      articleTitle: articleTitle || undefined,
      durationSeconds,
      utmSource: utmSource || undefined,
    });

    await sendTelegramMessage(text);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[analytics] Telegram delivery failed:", error);
    return NextResponse.json({ error: "delivery" }, { status: 502 });
  }
}
