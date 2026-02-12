'use client';

import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';
import { scoreStep } from '@/lib/scoring';

export function StepDashes() {
  const { state, dispatch } = useQuiz();

  const handleAnswer = (value: string) => {
    const score = scoreStep(1, value);
    dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 1, value, score } });
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-10">
      <h2 className="whitespace-pre-line text-center text-2xl sm:text-4xl">
        {t('step2.question', state.lang)}
      </h2>

      <div className="flex w-full flex-col gap-4">
        <button
          onClick={() => handleAnswer('human')}
          className="quiz-btn text-base sm:text-lg px-6 py-4 text-left animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-1"
        >
          {t('step2.human', state.lang)}
        </button>
        <button
          onClick={() => handleAnswer('ai')}
          className="quiz-btn text-base sm:text-lg px-6 py-4 text-left animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-2"
        >
          {t('step2.ai', state.lang)}
        </button>
      </div>
    </div>
  );
}
