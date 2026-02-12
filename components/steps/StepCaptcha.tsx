'use client';

import { useState } from 'react';
import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';

export function StepCaptcha() {
  const { state, dispatch } = useQuiz();
  const [checked, setChecked] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const handleCheck = () => {
    if (checked || verifying) return;
    setVerifying(true);

    // Simulate verification delay
    setTimeout(() => {
      setChecked(true);
      setVerifying(false);
    }, 600);

    // Auto-advance after "verification"
    setTimeout(() => {
      dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 7, value: 'checkbox', score: 8 } });
      dispatch({ type: 'NEXT_STEP' });
    }, 1200);
  };

  const handleNotSure = () => {
    dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 7, value: 'not_sure', score: 2 } });
    dispatch({ type: 'NEXT_STEP' });
  };

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-8 animate-fadeSlideUp">
      {/* Fake reCAPTCHA container */}
      <div className="captcha-box w-72 p-5">
        <button
          onClick={handleCheck}
          disabled={checked || verifying}
          className="flex w-full items-center gap-4 cursor-pointer disabled:cursor-default"
        >
          {/* Checkbox */}
          <div
            className={`flex h-7 w-7 shrink-0 items-center justify-center border-2 transition-all duration-300 ${
              checked
                ? 'border-[--foreground] bg-[--foreground]/10'
                : verifying
                  ? 'border-[--terminal-dim] animate-pulse'
                  : 'border-[--terminal-border] hover:border-[--foreground]'
            }`}
          >
            {checked && (
              <span className="captcha-check text-[--foreground] text-lg leading-none">
                ✓
              </span>
            )}
            {verifying && (
              <span className="text-[--terminal-dim] text-xs animate-spin">◐</span>
            )}
          </div>

          {/* Label */}
          <span className="font-mono text-sm text-[--foreground]">
            {verifying
              ? t('step8.verifying', state.lang)
              : t('step8.label', state.lang)}
          </span>
        </button>
      </div>

      {/* Fake branding */}
      <div className="flex items-center gap-2 text-[10px] text-[--terminal-dim] font-mono tracking-wider">
        <span className="opacity-40">◧</span>
        reCAPTCHA_v0.1
        <span className="opacity-30">{'// human_verification_protocol'}</span>
      </div>

      {/* Alternative */}
      <button
        onClick={handleNotSure}
        className="quiz-btn text-sm opacity-60 hover:opacity-100 transition-opacity"
      >
        {t('step8.not_sure', state.lang)}
      </button>
    </div>
  );
}
