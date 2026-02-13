import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-6 text-center paper-texture bg-[--background]">
      <div className="max-w-md">
        <p className="mb-4 text-xs tracking-[0.15em] text-[--muted]">
          imdefinitelyhuman
        </p>

        <h1 className="mb-4 text-5xl sm:text-6xl">404</h1>

        <p className="mb-8 text-[--muted] leading-relaxed">
          This page doesn&apos;t exist — but you probably do.
        </p>

        <Link href="/" className="quiz-btn inline-block text-base px-8 py-3.5">
          Go home
          <span className="ml-2 text-[--muted]">&rarr;</span>
        </Link>
      </div>
    </main>
  );
}
