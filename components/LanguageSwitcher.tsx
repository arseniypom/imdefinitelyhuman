'use client';

import { useQuiz } from '@/lib/quiz-context';

export function LanguageSwitcher() {
  const { state, dispatch } = useQuiz();
  const isTerminal = state.theme === 'terminal';

  const toggle = () =>
    dispatch({ type: 'SET_LANG', lang: state.lang === 'en' ? 'ru' : 'en' });

  return (
    <button
      onClick={toggle}
      className={`fixed top-4 right-4 z-50 text-xs text-[--foreground] uppercase transition-all duration-200
                 active:scale-95 ${
        isTerminal
          ? 'border border-[--border] px-3 py-1.5 tracking-[0.25em] hover:border-[--foreground] hover:shadow-[0_0_12px_var(--glow)]'
          : 'px-3 py-1.5 rounded-full bg-[--surface] shadow-[0_1px_4px_rgba(44,40,37,0.08)] tracking-[0.15em] hover:shadow-[0_3px_12px_rgba(44,40,37,0.12)] hover:bg-[--foreground] hover:text-[--surface]'
      }`}
    >
      {state.lang === 'en' ? 'RU' : 'EN'}
    </button>
  );
}
