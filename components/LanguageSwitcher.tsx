'use client';

import { useQuiz } from '@/lib/quiz-context';

export function LanguageSwitcher() {
  const { state, dispatch } = useQuiz();

  const toggle = () =>
    dispatch({ type: 'SET_LANG', lang: state.lang === 'en' ? 'ru' : 'en' });

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 border border-[--terminal-border] px-3 py-1.5 font-mono text-xs
                 tracking-[0.25em] text-[--foreground] uppercase transition-all duration-200
                 hover:border-[--foreground] hover:shadow-[0_0_12px_var(--terminal-glow)]
                 active:scale-95"
    >
      {state.lang === 'en' ? 'RU' : 'EN'}
    </button>
  );
}
