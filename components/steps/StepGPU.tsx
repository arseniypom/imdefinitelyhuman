'use client';

import { useState } from 'react';
import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';
import { scoreStep } from '@/lib/scoring';

export function StepGPU() {
  const { state, dispatch } = useQuiz();
  const [value, setValue] = useState(50);

  const submit = () => {
    const score = scoreStep(5, value);
    dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 5, value, score } });
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-10">
      <h2 className="text-center text-xl leading-relaxed sm:text-2xl">
        {t('step6.question', state.lang)}
      </h2>

      <div className="w-full space-y-4">
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="flex justify-between text-xs text-[--muted]">
          <span>{t('step6.left', state.lang)}</span>
          <span>{t('step6.right', state.lang)}</span>
        </div>
        <div className="text-center text-3xl font-bold tabular-nums">
          {value}
        </div>
      </div>

      <button onClick={submit} className="quiz-btn">
        {t('step6.confirm', state.lang)}
      </button>
    </div>
  );
}
