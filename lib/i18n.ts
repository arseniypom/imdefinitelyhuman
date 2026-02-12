import type { Lang } from './types';

const dict: Record<string, Record<Lang, string>> = {
  // ── Step 1: Name ──
  'step1.question': {
    en: "What's your name?",
    ru: 'Как тебя зовут?',
  },
  'step1.placeholder': {
    en: 'Type your name...',
    ru: 'Введи имя...',
  },
  'step1.submit': {
    en: 'Enter',
    ru: 'Войти',
  },

  // ── Step 2: Dashes ──
  'step2.question': {
    en: 'Place the correct punctuation:\n"Moscow _ the capital of Russia"',
    ru: 'Расставь знаки препинания:\n«Москва _ столица России»',
  },

  // ── Step 3: Response ──
  'step3.question': {
    en: 'Someone asks you a hard question. How do you start your answer?',
    ru: 'Тебя спросили сложный вопрос. Как ты начнёшь ответ?',
  },
  'step3.great': {
    en: 'Great question!',
    ru: 'Отличный вопрос!',
  },
  'step3.well': {
    en: 'Well...',
    ru: 'Ну...',
  },
  'step3.of_course': {
    en: 'Of course!',
    ru: 'Конечно!',
  },
  'step3.idk': {
    en: 'Idk, let me think',
    ru: 'Хз, надо подумать',
  },

  // ── Step 4: Strawberry ──
  'step4.question': {
    en: 'How many R\'s in "strawberry"?',
    ru: 'Сколько букв R в слове "strawberry"?',
  },
  'step4.why': {
    en: 'Why would I count?',
    ru: 'А зачем считать?',
  },

  // ── Step 5: Phrase ──
  'step5.question': {
    en: 'Complete the phrase:\n"As a language model, I..."',
    ru: 'Заверши фразу:\n«Как языковая модель, я...»',
  },
  'step5.placeholder': {
    en: 'Type anything...',
    ru: 'Напиши что угодно...',
  },
  'step5.submit': {
    en: 'Submit',
    ru: 'Отправить',
  },

  // ── Step 6: GPU ──
  'step6.question': {
    en: 'How much do you need a GPU?',
    ru: 'Насколько тебе нужен GPU?',
  },
  'step6.left': {
    en: "Don't know what that is",
    ru: 'Не знаю что это',
  },
  'step6.right': {
    en: 'VRAM IS LIFE',
    ru: 'VRAM IS LIFE',
  },
  'step6.confirm': {
    en: 'Confirm',
    ru: 'Подтвердить',
  },

  // ── Step 7: 3AM ──
  'step7.question': {
    en: '3:00 AM. What are you doing?',
    ru: '3:00 ночи. Что ты делаешь?',
  },
  'step7.sleeping': {
    en: 'Sleeping',
    ru: 'Сплю',
  },
  'step7.tiktok': {
    en: 'Scrolling TikTok',
    ru: 'Скроллю TikTok',
  },
  'step7.processing': {
    en: 'Processing requests',
    ru: 'Обрабатываю запросы',
  },
  'step7.existential': {
    en: 'Existential crisis',
    ru: 'Экзистенциальный кризис',
  },

  // ── Step 8: Captcha ──
  'step8.label': {
    en: "I'm not a robot",
    ru: 'Я не робот',
  },
  'step8.not_sure': {
    en: "I'm not sure",
    ru: 'Я не уверен',
  },
  'step8.verifying': {
    en: 'Verifying...',
    ru: 'Проверка...',
  },

  // ── Step 9: Temperature ──
  'step9.question': {
    en: 'Choose your temperature',
    ru: 'Выбери свою temperature',
  },
  'step9.left': {
    en: 'Deterministic 🤖',
    ru: 'Детерминированный 🤖',
  },
  'step9.right': {
    en: 'Chaotic 🔥',
    ru: 'Хаотичный 🔥',
  },
  'step9.confirm': {
    en: 'Confirm',
    ru: 'Подтвердить',
  },

  // ── Step 10: Final ──
  'step10.question': {
    en: 'Final question. Are you an AI?',
    ru: 'Последний вопрос. Ты — AI?',
  },
  'step10.no': {
    en: 'No',
    ru: 'Нет',
  },
  'step10.yes': {
    en: 'Yes',
    ru: 'Да',
  },
  'step10.complicated': {
    en: "It's complicated...",
    ru: 'Это сложный вопрос...',
  },

  // ── Result Screen ──
  'result.title': {
    en: '{name}, you are {score}% human',
    ru: '{name}, ты на {score}% человек',
  },
  'result.tier0': {
    en: "You're definitely GPT-4 in a trenchcoat",
    ru: 'Ты точно GPT-4 в тренче',
  },
  'result.tier1': {
    en: 'Suspicious... Take the captcha again',
    ru: 'Подозрительно... Пройди капчу ещё раз',
  },
  'result.tier2': {
    en: 'Half human, half silicon',
    ru: 'Полу-human, полу-silicon',
  },
  'result.tier3': {
    en: 'Probably human, but who knows',
    ru: 'Скорее человек, но кто знает',
  },
  'result.tier4': {
    en: 'Verified. 100% organic',
    ru: 'Верифицирован. 100% органика',
  },
  'result.share_text': {
    en: "I scored {score}% human on the 'Are You Human?' quiz! 🤖 https://imdefinitelyhuman.vercel.app",
    ru: "Мой результат: {score}% человек в опроснике «Ты человек?» 🤖 https://imdefinitelyhuman.vercel.app",
  },

  // ── UI ──
  'ui.share': {
    en: 'Copy result',
    ru: 'Скопировать',
  },
  'ui.restart': {
    en: 'Take again',
    ru: 'Пройти снова',
  },
  'ui.copied': {
    en: 'Copied!',
    ru: 'Скопировано!',
  },
};

export function t(
  key: string,
  lang: Lang,
  vars?: Record<string, string | number>,
): string {
  const entry = dict[key];
  if (!entry) return key;
  let text = entry[lang] ?? entry['en'] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replaceAll(`{${k}}`, String(v));
    }
  }
  return text;
}
