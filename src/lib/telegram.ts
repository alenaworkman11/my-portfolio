const TELEGRAM_API = "https://api.telegram.org";

type TelegramResponse = {
  ok: boolean;
  description?: string;
};

export function formatContactMessage(
  name: string,
  email: string,
  message: string,
): string {
  return `Пользователь '${name}' c почтой '${email}' отправил сообщение: '${message}'`;
}

export async function sendTelegramMessage(
  text: string,
  retries = 3,
): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("Telegram credentials are not configured");
  }

  let lastError: Error | null = null;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(
        `${TELEGRAM_API}/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            disable_web_page_preview: true,
          }),
          signal: AbortSignal.timeout(10_000),
        },
      );

      const data = (await response.json().catch(() => ({}))) as TelegramResponse;

      if (response.ok && data.ok !== false) {
        return;
      }

      lastError = new Error(
        data.description ?? `Telegram API responded with ${response.status}`,
      );

      if (
        response.status >= 400 &&
        response.status < 500 &&
        response.status !== 429
      ) {
        break;
      }
    } catch (error) {
      lastError =
        error instanceof Error ? error : new Error("Failed to reach Telegram");
    }

    if (attempt < retries - 1) {
      await new Promise((resolve) =>
        setTimeout(resolve, 500 * 2 ** attempt),
      );
    }
  }

  throw lastError ?? new Error("Failed to send Telegram message");
}
