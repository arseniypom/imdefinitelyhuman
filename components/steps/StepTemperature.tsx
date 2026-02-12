'use client';

import { useState } from 'react';
import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';
import { scoreStep } from '@/lib/scoring';

export function StepTemperature() {
  const { state, dispatch } = useQuiz();
  const [value, setValue] = useState(0.7);

  const submit = () => {
    const score = scoreStep(8, value);
    dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 8, value, score } });
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-10">
      <h2 className="text-center text-2xl sm:text-4xl">
        {t('step9.question', state.lang)}
      </h2>

      <div className="w-full space-y-4">
        <input
          type="range"
          min={0}
          max={2}
          step={0.1}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="flex justify-between text-xs text-[--muted]">
          <span>{t('step9.left', state.lang)}</span>
          <span>{t('step9.right', state.lang)}</span>
        </div>
        <div className="text-center text-3xl font-bold tabular-nums">
          {value.toFixed(1)}
        </div>
      </div>

      <button onClick={submit} className="quiz-btn">
        {t('step9.confirm', state.lang)}
      </button>
    </div>
  );
}
