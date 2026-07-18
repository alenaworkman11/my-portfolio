import {
  VISITOR_ID_KEY,
  VISITOR_NAME_KEY,
} from "@/lib/analytics/constants";

function createVisitorId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `v-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function ensureVisitorId(): string {
  const existing = localStorage.getItem(VISITOR_ID_KEY);
  if (existing) return existing;

  const id = createVisitorId();
  localStorage.setItem(VISITOR_ID_KEY, id);
  return id;
}

export function getVisitorId(): string {
  return localStorage.getItem(VISITOR_ID_KEY) ?? ensureVisitorId();
}

export function getVisitorName(): string | null {
  const name = localStorage.getItem(VISITOR_NAME_KEY);
  return name?.trim() || null;
}

export function setVisitorName(name: string): void {
  const trimmed = name.trim().slice(0, 100);
  if (!trimmed) return;
  localStorage.setItem(VISITOR_NAME_KEY, trimmed);
}

export function getVisitorLabel(): string {
  return getVisitorName() ?? getVisitorId();
}
