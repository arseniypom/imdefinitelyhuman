'use client';

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

  const handleAnswer = (value: string) => {
    const score = scoreStep(9, value);
    dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 9, value, score } });
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-10">
      <div className="text-center">
        <div className="mb-3 text-xs tracking-[0.3em] text-[--terminal-dim] uppercase">
          {'// final_check'}
        </div>
        <h2 className="text-xl leading-relaxed sm:text-2xl">
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
