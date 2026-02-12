'use client';

import { useQuiz } from '@/lib/quiz-context';

export function ThemeToggle() {
  const { state, dispatch } = useQuiz();
  const isTerminal = state.theme === 'terminal';

  const toggle = () =>
    dispatch({ type: 'SET_THEME', theme: isTerminal ? 'light' : 'terminal' });

  return (
    <button
      onClick={toggle}
      aria-label={isTerminal ? 'Switch to light theme' : 'Switch to terminal theme'}
      className={`flex items-center gap-2 text-xs text-[--foreground] transition-all duration-300 active:scale-95 ${
        isTerminal
          ? 'border border-[--border] px-3 py-1.5 hover:border-[--foreground] hover:shadow-[0_0_12px_var(--glow)]'
          : 'px-3.5 py-1.5 rounded-full bg-[--surface] font-medium shadow-[0_1px_6px_rgba(44,40,37,0.10)] hover:shadow-[0_4px_16px_rgba(44,40,37,0.14)] hover:bg-[--foreground] hover:text-[--surface]'
      }`}
    >
      <span className="inline-block w-4 text-center text-sm leading-none">{isTerminal ? '\u2600' : '>_'}</span>
      <span className={isTerminal ? 'tracking-[0.25em]' : 'tracking-wide'}>Theme</span>
    </button>
  );
}
