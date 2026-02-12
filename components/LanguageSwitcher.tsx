'use client';

import { useState, useRef, useEffect } from 'react';
import posthog from 'posthog-js';
import { useQuiz } from '@/lib/quiz-context';
import type { Lang } from '@/lib/types';

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
];

export function LanguageSwitcher() {
  const { state, dispatch } = useQuiz();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isTerminal = state.theme === 'terminal';

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  const select = (lang: Lang) => {
    posthog.capture('language_changed', { lang });
    dispatch({ type: 'SET_LANG', lang });
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`flex items-center gap-2 text-xs text-[--foreground] uppercase transition-all duration-200
                   active:scale-95 ${
          isTerminal
            ? 'border border-[--border] px-3 py-1.5 tracking-[0.25em] hover:border-[--foreground] hover:shadow-[0_0_12px_var(--glow)]'
            : 'px-3.5 py-1.5 rounded-full bg-[--surface] font-medium shadow-[0_1px_6px_rgba(44,40,37,0.10)] tracking-[0.15em] hover:shadow-[0_4px_16px_rgba(44,40,37,0.14)] hover:bg-[--foreground] hover:text-[--surface]'
        }`}
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        {state.lang.toUpperCase()}
      </button>

      {open && (
        <div
          role="listbox"
          className={`absolute right-0 mt-2 min-w-[8rem] overflow-hidden ${
            isTerminal
              ? 'border border-[--border] bg-[--background]'
              : 'rounded-xl bg-[--surface] shadow-[0_8px_30px_rgba(44,40,37,0.12)]'
          }`}
        >
          {LANGUAGES.map(({ code, label }) => (
            <button
              key={code}
              role="option"
              aria-selected={state.lang === code}
              onClick={() => select(code)}
              className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-xs transition-colors ${
                state.lang === code
                  ? 'text-[--accent] font-medium'
                  : 'text-[--foreground]'
              } ${
                isTerminal
                  ? 'hover:bg-[--surface] tracking-[0.15em] uppercase font-mono'
                  : 'hover:bg-[--background]'
              }`}
            >
              <span className="uppercase tracking-wider opacity-50 w-5">{code}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
