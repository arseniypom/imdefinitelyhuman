'use client';

import posthog from 'posthog-js';
import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';
import { scoreStep } from '@/lib/scoring';

const OPTIONS = [
  { key: '2', label: '2' },
  { key: '3', label: '3' },
  { key: '4', label: '4' },
  { key: 'why', labelKey: 'step4.why' },
] as const;

export function StepStrawberry() {
  const { state, dispatch } = useQuiz();

  const handleAnswer = (value: string) => {
    const score = scoreStep(3, value);
    posthog.capture('step_completed', { step: 3, value });
    dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 3, value, score } });
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-10">
      <h2 className="text-center text-2xl sm:text-4xl">
        {t('step4.question', state.lang)}
      </h2>

      <div className="grid w-full max-w-sm grid-cols-2 gap-3">
        {OPTIONS.map((opt, i) => (
          <button
            key={opt.key}
            onClick={() => handleAnswer(opt.key)}
            className={`quiz-btn w-full animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-${i + 1}`}
          >
            {'labelKey' in opt ? t(opt.labelKey, state.lang) : opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
