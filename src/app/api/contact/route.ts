import { NextRequest, NextResponse } from "next/server";
import { formatContactMessage, sendTelegramMessage } from "@/lib/telegram";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitize(payload.name, 100);
  const email = sanitize(payload.email, 254);
  const message = sanitize(payload.message, 2000);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "email" }, { status: 400 });
  }

  try {
    await sendTelegramMessage(formatContactMessage(name, email, message));
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Telegram delivery failed:", error);
    return NextResponse.json({ error: "delivery" }, { status: 502 });
  }
}
