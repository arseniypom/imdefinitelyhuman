'use client';

import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';
import { scoreStep } from '@/lib/scoring';

const OPTIONS = [
  { key: 'sleeping', labelKey: 'step7.sleeping' },
  { key: 'tiktok', labelKey: 'step7.tiktok' },
  { key: 'processing', labelKey: 'step7.processing' },
  { key: 'existential', labelKey: 'step7.existential' },
] as const;

export function Step3AM() {
  const { state, dispatch } = useQuiz();

  const handleAnswer = (value: string) => {
    const score = scoreStep(6, value);
    dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 6, value, score } });
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-10">
      <h2 className="text-center text-2xl sm:text-4xl">
        {t('step7.question', state.lang)}
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
