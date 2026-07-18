import { UTM_SOURCE_KEY } from "@/lib/analytics/constants";

export function captureUtmSourceFromSearch(search: string): void {
  const params = new URLSearchParams(
    search.startsWith("?") ? search.slice(1) : search,
  );
  const source = params.get("utm_source") ?? params.get("utmSource");
  const trimmed = source?.trim().slice(0, 100);

  if (trimmed) {
    localStorage.setItem(UTM_SOURCE_KEY, trimmed);
  }
}

export function getStoredUtmSource(): string | null {
  const value = localStorage.getItem(UTM_SOURCE_KEY);
  return value?.trim() || null;
}
