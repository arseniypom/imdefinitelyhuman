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
      <h2 className="whitespace-pre-line text-center text-xl leading-relaxed sm:text-2xl">
        {t('step2.question', state.lang)}
      </h2>

      <div className="flex gap-5">
        <button
          onClick={() => handleAnswer('-')}
          className="quiz-btn text-2xl px-10 py-5 animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-1"
        >
          -
        </button>
        <button
          onClick={() => handleAnswer('—')}
          className="quiz-btn text-2xl px-10 py-5 animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-2"
        >
          —
        </button>
      </div>
    </div>
  );
}
