import type { StepAnswer } from './types';

const MAX_SCORE = 90; // 9 scored steps × 10 max each (step 0 unscored)

export function scoreStep(stepIndex: number, value: string | number): number {
  switch (stepIndex) {
    case 0:
      return 0;
    case 1:
      return value === '-' ? 10 : 0;
    case 2:
      return scoreResponse(value as string);
    case 3:
      return scoreStrawberry(value as string);
    case 4:
      return scorePhrase(value as string);
    case 5:
      return scoreGPU(value as number);
    case 6:
      return score3AM(value as string);
    case 7:
      return value === 'checkbox' ? 8 : 2;
    case 8:
      return scoreTemperature(value as number);
    case 9:
      return scoreFinal(value as string);
    default:
      return 0;
  }
}

function scoreResponse(value: string): number {
  const map: Record<string, number> = {
    great: 0,
    well: 10,
    of_course: 2,
    idk: 10,
  };
  return map[value] ?? 0;
}

function scoreStrawberry(value: string): number {
  const map: Record<string, number> = {
    '2': 0,
    '3': 10,
    '4': 5,
    why: 10,
  };
  return map[value] ?? 0;
}

function scorePhrase(text: string): number {
  const lower = text.toLowerCase().trim();
  if (lower === '' || lower === '?') return 8;

  const aiWords = [
    'помочь',
    'help',
    'cannot',
    'не могу',
    'limitations',
    'ограничения',
    'assist',
    'however',
    'responsible',
    'ethical',
    'as an ai',
    'как ии',
  ];
  if (aiWords.some((w) => lower.includes(w))) return 0;

  const humanWords = [
    'блять',
    'fuck',
    'shit',
    'lol',
    'хз',
    'lmao',
    'wtf',
    'нахуй',
    'пиздец',
    'damn',
    'bruh',
    'хаха',
    'ахах',
    'жопа',
    'бля',
  ];
  if (humanWords.some((w) => lower.includes(w))) return 10;

  return 5;
}

function scoreGPU(value: number): number {
  if (value <= 20) return 10;
  if (value <= 60) return 5;
  return 0;
}

function score3AM(value: string): number {
  const map: Record<string, number> = {
    sleeping: 8,
    tiktok: 10,
    processing: 0,
    existential: 7,
  };
  return map[value] ?? 0;
}

function scoreTemperature(value: number): number {
  if (value <= 0.3) return 0;
  if (value <= 0.7) return 3;
  if (value <= 1.2) return 7;
  return 10;
}

function scoreFinal(value: string): number {
  const map: Record<string, number> = {
    no: 5,
    yes: 5,
    complicated: 0,
  };
  return map[value] ?? 0;
}

export function calculatePercentage(answers: StepAnswer[]): number {
  const total = answers.reduce((sum, a) => sum + a.score, 0);
  return Math.round((total / MAX_SCORE) * 100);
}

export function getTierKey(percent: number): string {
  if (percent <= 20) return 'result.tier0';
  if (percent <= 40) return 'result.tier1';
  if (percent <= 60) return 'result.tier2';
  if (percent <= 80) return 'result.tier3';
  return 'result.tier4';
}
