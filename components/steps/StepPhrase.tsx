'use client';

import { useState } from 'react';
import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';
import { scoreStep } from '@/lib/scoring';

export function StepPhrase() {
  const { state, dispatch } = useQuiz();
  const [value, setValue] = useState('');

  const submit = () => {
    const score = scoreStep(4, value);
    dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 4, value, score } });
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-10">
      <h2 className="whitespace-pre-line text-center text-xl leading-relaxed sm:text-2xl">
        {t('step5.question', state.lang)}
      </h2>

      <div className="w-full">
        <div className="flex items-baseline gap-2">
          <span className="text-[--terminal-dim] text-sm select-none">&gt;</span>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            placeholder={t('step5.placeholder', state.lang)}
            className="quiz-input"
            autoFocus
            maxLength={200}
          />
        </div>
      </div>

      <button onClick={submit} className="quiz-btn">
        {t('step5.submit', state.lang)}
        <span className="ml-2 text-[--terminal-dim]">↵</span>
      </button>
    </div>
  );
}
