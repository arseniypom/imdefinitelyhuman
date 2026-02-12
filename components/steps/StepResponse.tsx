'use client';

import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';
import { scoreStep } from '@/lib/scoring';

const OPTIONS = [
  { key: 'great', labelKey: 'step3.great' },
  { key: 'well', labelKey: 'step3.well' },
  { key: 'of_course', labelKey: 'step3.of_course' },
  { key: 'idk', labelKey: 'step3.idk' },
] as const;

export function StepResponse() {
  const { state, dispatch } = useQuiz();

  const handleAnswer = (value: string) => {
    const score = scoreStep(2, value);
    dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 2, value, score } });
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-10">
      <h2 className="text-center text-xl leading-relaxed sm:text-2xl">
        {t('step3.question', state.lang)}
      </h2>

      <div className="grid w-full max-w-sm grid-cols-2 gap-3">
        {OPTIONS.map((opt, i) => (
          <button
            key={opt.key}
            onClick={() => handleAnswer(opt.key)}
            className={`quiz-btn w-full animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-${i + 1}`}
          >
            {t(opt.labelKey, state.lang)}
          </button>
        ))}
      </div>
    </div>
  );
}
