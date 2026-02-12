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
const THEME_KEY = 'imdefhuman_theme';

const initialState: QuizState = {
  lang: 'en',
  theme: 'terminal',
  currentStep: 0,
  name: '',
  answers: [],
  isTransitioning: false,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SET_LANG':
      return { ...state, lang: action.lang };
    case 'SET_THEME':
      return { ...state, theme: action.theme };
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
      return { ...initialState, lang: state.lang, theme: state.theme };
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
    // Restore theme from dedicated key (flash-prevention script already set data-theme)
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === 'light' || savedTheme === 'terminal') {
        dispatch({ type: 'SET_THEME', theme: savedTheme });
      }
    } catch { /* ignore */ }
    hydrated.current = true;
  }, []);

  // Sync theme to DOM + localStorage
  useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
    try {
      localStorage.setItem(THEME_KEY, state.theme);
    } catch { /* ignore */ }
  }, [state.theme]);

  // Persist quiz state to localStorage on state change (after hydration)
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
