'use client';

import { useState } from 'react';
import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';

export function StepName() {
  const { state, dispatch } = useQuiz();
  const [value, setValue] = useState(state.name);
  const isTerminal = state.theme === 'terminal';

  const submit = () => {
    const name = value.trim();
    if (!name) return;
    dispatch({ type: 'SET_NAME', name });
    dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 0, value: name, score: 0 } });
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-10">
      <div className="text-center">
        <div className={`mb-3 text-xs text-[--muted] ${
          isTerminal ? 'tracking-[0.3em] uppercase' : 'tracking-[0.15em] light-serif'
        }`}>
          {isTerminal ? '// initialization' : 'begin'}
        </div>
        <h2 className="text-2xl sm:text-4xl">
          {t('step1.question', state.lang)}
        </h2>
      </div>

      <div className="w-full">
        <div className="flex items-baseline gap-2">
          {isTerminal && (
            <span className="text-[--muted] text-sm select-none">&gt;</span>
          )}
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            placeholder={t('step1.placeholder', state.lang)}
            className="quiz-input"
            autoFocus
            maxLength={40}
          />
        </div>
      </div>

      <button
        onClick={submit}
        disabled={!value.trim()}
        className="quiz-btn disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:border-[--border] disabled:hover:shadow-none"
      >
        {t('step1.submit', state.lang)}
        <span className="ml-2 text-[--muted]">↵</span>
      </button>
    </div>
  );
}
