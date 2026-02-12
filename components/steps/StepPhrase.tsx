'use client';

import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';
import { scoreStep } from '@/lib/scoring';

const OPTIONS = ['instantly', 'hour', 'tomorrow'] as const;

export function StepPhrase() {
  const { state, dispatch } = useQuiz();

  const handleAnswer = (value: string) => {
    const score = scoreStep(4, value);
    dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 4, value, score } });
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-10">
      <h2 className="text-center text-2xl sm:text-4xl">
        {t('step5.question', state.lang)}
      </h2>

      <div className="flex w-full max-w-xs flex-col gap-3">
        {OPTIONS.map((key, i) => (
          <button
            key={key}
            onClick={() => handleAnswer(key)}
            className={`quiz-btn w-full animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-${i + 1}`}
          >
            {t(`step5.${key}`, state.lang)}
          </button>
        ))}
      </div>
    </div>
  );
}
