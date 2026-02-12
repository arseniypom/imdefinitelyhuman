'use client';

import { useQuiz } from '@/lib/quiz-context';
import { StepTransition } from './StepTransition';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { ResultScreen } from './ResultScreen';
import { StepName } from './steps/StepName';
import { StepDashes } from './steps/StepDashes';
import { StepResponse } from './steps/StepResponse';
import { StepStrawberry } from './steps/StepStrawberry';
import { StepPhrase } from './steps/StepPhrase';
import { StepGPU } from './steps/StepGPU';
import { Step3AM } from './steps/Step3AM';
import { StepCaptcha } from './steps/StepCaptcha';
import { StepTemperature } from './steps/StepTemperature';
import { StepFinal } from './steps/StepFinal';
import type { ComponentType } from 'react';

const STEPS: ComponentType[] = [
  StepName,
  StepDashes,
  StepResponse,
  StepStrawberry,
  StepPhrase,
  StepGPU,
  Step3AM,
  StepCaptcha,
  StepTemperature,
  StepFinal,
];

export function QuizShell() {
  const { state } = useQuiz();
  const isResult = state.currentStep >= 10;
  const StepComponent = isResult ? null : STEPS[state.currentStep];
  const isTerminal = state.theme === 'terminal';

  return (
    <div
      className={`relative min-h-dvh w-full overflow-hidden bg-[--background] ${
        isTerminal
          ? 'scanline-overlay font-mono animate-flicker'
          : 'paper-texture'
      }`}
    >
      <ThemeToggle />
      <LanguageSwitcher />

      {/* Step counter */}
      {!isResult && (
        isTerminal ? (
          <div className="fixed top-4 left-4 z-50 text-xs text-[--muted] tracking-widest font-mono">
            {String(state.currentStep + 1).padStart(2, '0')}/10
          </div>
        ) : (
          <div className="fixed top-4 left-4 z-50 flex items-center gap-1.5">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ease-out ${
                  i < state.currentStep
                    ? 'w-1.5 bg-[--accent] opacity-40'
                    : i === state.currentStep
                      ? 'w-5 bg-[--accent]'
                      : 'w-1.5 bg-[--border]'
                }`}
              />
            ))}
          </div>
        )
      )}

      <StepTransition stepKey={state.currentStep}>
        {isResult ? (
          <ResultScreen />
        ) : StepComponent ? (
          <StepComponent />
        ) : null}
      </StepTransition>
    </div>
  );
}
