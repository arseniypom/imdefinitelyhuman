'use client';

import { useQuiz } from '@/lib/quiz-context';
import { StepTransition } from './StepTransition';
import { LanguageSwitcher } from './LanguageSwitcher';
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

  return (
    <div className="scanline-overlay relative min-h-dvh w-full overflow-hidden bg-black font-mono animate-flicker">
      <LanguageSwitcher />

      {/* Step counter */}
      {!isResult && (
        <div className="fixed top-4 left-4 z-50 font-mono text-xs text-[--terminal-dim] tracking-widest">
          {String(state.currentStep + 1).padStart(2, '0')}/10
        </div>
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
