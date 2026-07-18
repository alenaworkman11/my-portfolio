import { SENT_EVENTS_KEY } from "@/lib/analytics/constants";

type SentEvents = {
  visit?: string;
  resume_click?: string;
};

function getTodayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function readSentEvents(): SentEvents {
  try {
    const raw = localStorage.getItem(SENT_EVENTS_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as SentEvents;
  } catch {
    return {};
  }
}

function writeSentEvents(events: SentEvents): void {
  localStorage.setItem(SENT_EVENTS_KEY, JSON.stringify(events));
}

export function wasDailyEventSent(
  event: keyof SentEvents,
): boolean {
  const sent = readSentEvents();
  return sent[event] === getTodayKey();
}

export function markDailyEventSent(event: keyof SentEvents): void {
  const sent = readSentEvents();
  sent[event] = getTodayKey();
  writeSentEvents(sent);
}

export function shouldSkipAnalyticsEvent(
  event: "visit" | "article_leave" | "resume_click",
): boolean {
  if (event === "visit") return wasDailyEventSent("visit");
  if (event === "resume_click") return wasDailyEventSent("resume_click");
  return false;
}

export function markAnalyticsEventSent(
  event: "visit" | "article_leave" | "resume_click",
): void {
  if (event === "visit") markDailyEventSent("visit");
  if (event === "resume_click") markDailyEventSent("resume_click");
}
