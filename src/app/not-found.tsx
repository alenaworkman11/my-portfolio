import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        404 — Page Not Found
      </h1>
      <p className="mt-4 text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full border border-accent/40 px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent-secondary hover:text-accent-secondary"
      >
        Back to home
      </Link>
    </div>
  );
}
