export const MIN_DWELL_MS = 7_000;

export const VISITOR_ID_KEY = "portfolio-visitor-id";
export const VISITOR_NAME_KEY = "portfolio-visitor-name";
export const SENT_EVENTS_KEY = "portfolio-analytics-sent";
export const UTM_SOURCE_KEY = "portfolio-utm-source";

export type AnalyticsEvent =
  | "visit"
  | "article_leave"
  | "resume_click";

export type AnalyticsPayload = {
  event: AnalyticsEvent;
  visitorId: string;
  visitorName?: string;
  path?: string;
  articleTitle?: string;
  durationSeconds?: number;
  utmSource?: string;
  website?: string;
};
