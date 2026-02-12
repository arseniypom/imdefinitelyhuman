import type { QuizState } from './types';

const STORAGE_KEY = 'imdefhuman_quiz';

export function saveState(state: QuizState): void {
  try {
    const { isTransitioning, ...persistable } = state;
    void isTransitioning;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persistable));
  } catch {
    // localStorage unavailable — silently fail
  }
}

export function loadState(): QuizState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed.currentStep !== 'number' || !Array.isArray(parsed.answers)) return null;
    return { ...parsed, isTransitioning: false };
  } catch {
    return null;
  }
}

export function clearState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // silently fail
  }
}
