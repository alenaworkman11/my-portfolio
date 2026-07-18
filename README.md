# Lena Bogdanova — Portfolio

Minimalist CV-style portfolio built with Next.js, featuring dark/light theme and multilingual support.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- Minimalist design inspired by professional QA portfolios
- Dark / light theme (system preference supported)
- Languages: English, Spanish, Russian, German, Chinese, Italian
- Sections: Home, About, Skills, Projects, Beyond Technology, Learning, Contact, Blog

## Mock Data

Placeholder content is marked with a **red border** (`mock-placeholder` class). Update these in:

- `src/data/site.ts` — email, links, blog posts, location, etc.
- `public/resume.pdf` — add your resume file
- Remove `mock-placeholder` class once real data is in place

## Environment

Copy `.env.example` to `.env.local` and set:

- `TELEGRAM_BOT_TOKEN` — bot token from [@BotFather](https://t.me/BotFather)
- `TELEGRAM_CHAT_ID` — chat ID where notifications are delivered

Analytics events (site visits, blog reading, resume clicks) are sent to the same Telegram chat when a visitor stays on a page for at least 7 seconds.

## Build

```bash
npm run build
npm start
```
