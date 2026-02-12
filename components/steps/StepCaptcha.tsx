'use client';

import { useState } from 'react';
import posthog from 'posthog-js';
import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';
import { scoreStep } from '@/lib/scoring';

export function StepCaptcha() {
  const { state, dispatch } = useQuiz();
  const [checked, setChecked] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const isTerminal = state.theme === 'terminal';

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
      posthog.capture('step_completed', { step: 7, value: 'checkbox' });
      dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 7, value: 'checkbox', score: scoreStep(7, 'checkbox') } });
      dispatch({ type: 'NEXT_STEP' });
    }, 1200);
  };

  const handleNotSure = () => {
    posthog.capture('step_completed', { step: 7, value: 'not_sure' });
    dispatch({ type: 'ANSWER_STEP', answer: { stepIndex: 7, value: 'not_sure', score: scoreStep(7, 'not_sure') } });
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
              !isTerminal ? 'rounded-lg' : ''
            } ${
              checked
                ? 'border-[--foreground] bg-[--foreground]/10'
                : verifying
                  ? 'border-[--muted] animate-pulse'
                  : 'border-[--border] hover:border-[--foreground]'
            }`}
          >
            {checked && (
              <span className="captcha-check text-[--foreground] text-lg leading-none">
                ✓
              </span>
            )}
            {verifying && (
              <span className="text-[--muted] text-xs animate-spin">◐</span>
            )}
          </div>

          {/* Label */}
          <span className="text-sm text-[--foreground]">
            {verifying
              ? t('step8.verifying', state.lang)
              : t('step8.label', state.lang)}
          </span>
        </button>
      </div>

      {/* Branding */}
      <div className="flex items-center gap-2 text-[10px] text-[--muted] tracking-wider">
        {isTerminal ? (
          <>
            <span className="opacity-40">◧</span>
            reCAPTCHA_v0.1
            <span className="opacity-30">{'// human_verification_protocol'}</span>
          </>
        ) : (
          <span className="tracking-[0.15em] light-serif">reCAPTCHA · Privacy · Terms</span>
        )}
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
