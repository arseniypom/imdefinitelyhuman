'use client';

import posthog from 'posthog-js';
import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';
import { scoreStep } from '@/lib/scoring';

const OPTIONS = [
  { key: 'no', labelKey: 'step10.no' },
  { key: 'yes', labelKey: 'step10.yes' },
  { key: 'complicated', labelKey: 'step10.complicated' },
] as const;

export function StepFinal() {
  const { state, dispatch } = useQuiz();
  const isTerminal = state.theme === 'terminal';

  const handleAnswer = (value: string) => {
    const score = scoreStep(9, value);
    posthog.capture('step_completed', { step: 9, value });
    dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 9, value, score } });
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-10">
      <div className="text-center">
        <div className={`mb-3 text-xs text-[--muted] ${
          isTerminal ? 'tracking-[0.3em] uppercase' : 'tracking-[0.15em] light-serif'
        }`}>
          {isTerminal ? '// final_check' : 'last one'}
        </div>
        <h2 className="text-2xl sm:text-4xl">
          {t('step10.question', state.lang)}
        </h2>
      </div>

      <div className="flex w-full max-w-xs flex-col gap-3">
        {OPTIONS.map((opt, i) => (
          <button
            key={opt.key}
            onClick={() => handleAnswer(opt.key)}
            className={`quiz-btn w-full text-lg animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-${i + 1}`}
          >
            {t(opt.labelKey, state.lang)}
          </button>
        ))}
      </div>
    </div>
  );
}
