'use client';

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useRef,
  type ReactNode,
  type Dispatch,
} from 'react';
import type { QuizState, QuizAction } from './types';
import { saveState, loadState, clearState } from './storage';

const TOTAL_STEPS = 10;

const initialState: QuizState = {
  lang: 'en',
  currentStep: 0,
  name: '',
  answers: [],
  isTransitioning: false,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SET_LANG':
      return { ...state, lang: action.lang };
    case 'SET_NAME':
      return { ...state, name: action.name };
    case 'ANSWER_STEP':
      return {
        ...state,
        answers: [
          ...state.answers.filter((a) => a.stepIndex !== action.answer.stepIndex),
          action.answer,
        ],
      };
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, TOTAL_STEPS),
      };
    case 'SET_TRANSITIONING':
      return { ...state, isTransitioning: action.value };
    case 'RESTART':
      clearState();
      return { ...initialState, lang: state.lang };
    case 'RESTORE':
      return action.state;
    default:
      return state;
  }
}

const QuizContext = createContext<{
  state: QuizState;
  dispatch: Dispatch<QuizAction>;
} | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const hydrated = useRef(false);

  // Restore from localStorage on mount
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      dispatch({ type: 'RESTORE', state: saved });
    }
    hydrated.current = true;
  }, []);

  // Persist to localStorage on state change (after hydration)
  useEffect(() => {
    if (hydrated.current && !state.isTransitioning) {
      saveState(state);
    }
  }, [state]);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error('useQuiz must be used within QuizProvider');
  return ctx;
}
