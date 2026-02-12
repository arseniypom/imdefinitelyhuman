export type Lang = 'ru' | 'en';

export interface StepAnswer {
  stepIndex: number;
  value: string | number;
  score: number;
}

export interface QuizState {
  lang: Lang;
  currentStep: number; // 0-9 = questions, 10 = result
  name: string;
  answers: StepAnswer[];
  isTransitioning: boolean;
}

export type QuizAction =
  | { type: 'SET_LANG'; lang: Lang }
  | { type: 'SET_NAME'; name: string }
  | { type: 'ANSWER_STEP'; answer: StepAnswer }
  | { type: 'NEXT_STEP' }
  | { type: 'SET_TRANSITIONING'; value: boolean }
  | { type: 'RESTART' }
  | { type: 'RESTORE'; state: QuizState };
