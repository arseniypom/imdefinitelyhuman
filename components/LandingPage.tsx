'use client';

import Link from 'next/link';
import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

const FAQ_COUNT = 8;

const STEPS = [
  { num: '01', key: '1' },
  { num: '02', key: '2' },
  { num: '03', key: '3' },
] as const;

export function LandingPage() {
  const { state } = useQuiz();
  const isTerminal = state.theme === 'terminal';

  return (
    <div
      className={`relative min-h-dvh w-full bg-[--background] ${
        isTerminal
          ? 'scanline-overlay font-mono animate-flicker'
          : 'paper-texture'
      }`}
    >
      {/* Theme / Language controls */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      {/* ─── Hero ─── */}
      <section className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
        <div className="max-w-2xl">
          {/* Pre-heading label */}
          <div
            className={`mb-6 text-xs text-[--muted] ${
              isTerminal
                ? 'tracking-[0.3em] uppercase'
                : 'tracking-[0.15em] light-serif'
            }`}
          >
            {isTerminal
              ? '// human_verification_protocol'
              : t('landing.hero.label', state.lang)}
          </div>

          {/* Main headline */}
          <h1
            className={`text-5xl sm:text-7xl md:text-8xl mb-6 ${
              isTerminal ? '' : 'text-[--foreground]'
            }`}
          >
            {t('landing.hero.title', state.lang)}
          </h1>

          {/* Subtitle */}
          <p
            className={`text-base sm:text-lg text-[--muted] mb-10 max-w-md mx-auto ${
              isTerminal ? 'font-mono' : 'light-serif'
            }`}
          >
            {t('landing.hero.subtitle', state.lang)}
          </p>

          {/* CTA */}
          <Link href="/quiz" className="quiz-btn inline-block text-base px-8 py-3.5">
            {t('landing.hero.cta', state.lang)}
            <span className="ml-2 text-[--muted]">&rarr;</span>
          </Link>

          {/* Micro text */}
          <p className="mt-5 text-[11px] text-[--muted] opacity-60 tracking-wide">
            {t('landing.hero.micro', state.lang)}
          </p>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div
            className={`w-px h-10 mx-auto ${
              isTerminal ? 'bg-[--border]' : 'bg-[--border]'
            }`}
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
            }}
          />
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h2
            className={`text-2xl sm:text-3xl mb-14 text-center ${
              isTerminal ? '' : ''
            }`}
          >
            {t('landing.how.title', state.lang)}
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {STEPS.map(({ num, key }) => (
              <div
                key={key}
                className={`group p-6 transition-all duration-300 ${
                  isTerminal
                    ? 'border border-[--border] hover:border-[--foreground] hover:shadow-[0_0_20px_var(--glow)]'
                    : 'bg-[--surface] rounded-2xl shadow-[0_2px_12px_rgba(44,40,37,0.06)] hover:shadow-[0_8px_30px_rgba(44,40,37,0.10)] hover:-translate-y-1'
                }`}
              >
                <div
                  className={`text-xs mb-4 ${
                    isTerminal
                      ? 'text-[--foreground] tracking-[0.3em] font-mono'
                      : 'text-[--accent] tracking-[0.2em] font-medium'
                  }`}
                >
                  {isTerminal ? `[${num}]` : num}
                </div>

                <h3
                  className={`text-lg mb-2 ${
                    isTerminal
                      ? 'font-mono lowercase'
                      : 'light-serif text-xl'
                  }`}
                >
                  {t(`landing.how.${key}.title`, state.lang)}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    isTerminal ? 'text-[--muted]' : 'text-[--muted]'
                  }`}
                >
                  {t(`landing.how.${key}.desc`, state.lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl sm:text-3xl mb-14 text-center">
            {t('landing.faq.title', state.lang)}
          </h2>

          <div
            className={`divide-y ${
              isTerminal ? 'divide-[--border]' : 'divide-[--border]'
            }`}
          >
            {Array.from({ length: FAQ_COUNT }, (_, i) => {
              const n = i + 1;
              return (
                <details key={n} className="group">
                  <summary
                    className={`flex w-full items-center justify-between py-5 text-left ${
                      isTerminal ? 'font-mono' : ''
                    }`}
                  >
                    <span
                      className={`text-sm sm:text-base pr-4 ${
                        isTerminal ? '' : 'light-serif text-base'
                      }`}
                    >
                      {t(`landing.faq.q${n}`, state.lang)}
                    </span>
                    <svg
                      className={`faq-chevron shrink-0 w-4 h-4 text-[--muted]`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap={isTerminal ? 'square' : 'round'}
                      strokeLinejoin={isTerminal ? 'miter' : 'round'}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div
                    className={`pb-5 text-sm leading-relaxed text-[--muted] ${
                      isTerminal ? 'font-mono pl-0' : 'pl-0'
                    }`}
                  >
                    {t(`landing.faq.a${n}`, state.lang)}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Footer CTA ─── */}
      <section className="px-6 py-24 sm:py-32 text-center">
        <div className="mx-auto max-w-lg">
          <h2 className="text-2xl sm:text-3xl mb-8">
            {t('landing.footer.title', state.lang)}
          </h2>

          <Link href="/quiz" className="quiz-btn inline-block text-base px-8 py-3.5">
            {t('landing.footer.cta', state.lang)}
            <span className="ml-2 text-[--muted]">&rarr;</span>
          </Link>
        </div>

        {/* Branding footer */}
        <div className="mt-20">
          {isTerminal ? (
            <pre className="text-[10px] text-[--muted] opacity-30 leading-tight select-none">
{`  ╔══════════════════════╗
  ║  HUMAN VERIFICATION  ║
  ║     PROTOCOL v0.1    ║
  ╚══════════════════════╝`}
            </pre>
          ) : (
            <div className="flex items-center justify-center gap-3 select-none opacity-30">
              <div className="w-6 h-px bg-[--muted]" />
              <span className="text-[10px] text-[--muted] tracking-[0.2em] light-serif">
                imdefinitelyhuman
              </span>
              <div className="w-6 h-px bg-[--muted]" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
