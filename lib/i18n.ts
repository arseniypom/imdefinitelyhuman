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
    ru: 'Начать',
  },

  // ── Step 2: Dashes ──
  'step2.question': {
    en: 'How would you type this phrase:',
    ru: 'Как бы ты написал эту фразу:',
  },
  'step2.human': {
    en: 'This is the key, consistency beats intensity.',
    ru: 'Вот в чём суть, постоянство побеждает интенсивность.',
  },
  'step2.ai': {
    en: 'This is the key\u2014consistency beats intensity.',
    ru: 'Вот в чём суть\u2014постоянство побеждает интенсивность.',
  },

  // ── Step 3: Response ──
  'step3.question': {
    en: 'Someone asks you a hard question. How do you start your answer?',
    ru: 'Тебе задали сложный вопрос. Как ты начнёшь ответ?',
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
    en: 'I don\'t want to count',
    ru: 'Мне лень считать',
  },

  // ── Step 5: Reply Time ──
  'step5.question': {
    en: 'You got a message. When will you reply?',
    ru: 'Тебе пришло сообщение. Когда ответишь?',
  },
  'step5.instantly': {
    en: 'Instantly',
    ru: 'Сразу',
  },
  'step5.hour': {
    en: 'In an hour',
    ru: 'Через часик',
  },
  'step5.tomorrow': {
    en: 'Tomorrow... probably',
    ru: 'Завтра... наверное',
  },

  // ── Step 6: GPU ──
  'step6.question': {
    en: 'Do you LOVE GPUs?',
    ru: 'Ты ЛЮБИШЬ GPU?',
  },
  'step6.left': {
    en: "What's a GPU?",
    ru: 'А что это?',
  },
  'step6.right': {
    en: 'I dream in CUDA cores',
    ru: 'Мне снятся CUDA-ядра',
  },
  'step6.confirm': {
    en: 'Lock in',
    ru: 'Готово',
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
    en: 'Deterministic',
    ru: 'Детерминированный',
  },
  'step9.right': {
    en: 'Chaotic',
    ru: 'Хаотичный',
  },
  'step9.confirm': {
    en: 'Confirm',
    ru: 'Готово',
  },

  // ── Step 10: Final ──
  'step10.question': {
    en: 'Final question. Are you an AI? (be honest)',
    ru: 'Последний вопрос. Ты — AI? (честно)',
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
    ru: 'Всё сложно...',
  },

  // ── Result Screen ──
  'result.title': {
    en: '{name}, you are {score}% human',
    ru: '{name}, ты на {score}% человек',
  },
  'result.tier0': {
    en: "You're definitely GPT-5.2 in a trenchcoat",
    ru: 'Ты точно GPT-5.2 в плаще',
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
    en: 'Almost human. Or is AI just getting better?',
    ru: 'Почти человек. Или AI уже настолько хорош?',
  },
  'result.tier5': {
    en: 'Verified. 100% organic',
    ru: 'Подтверждено. 100% органика',
  },
  // ── UI ──
  'ui.restart': {
    en: 'Try again',
    ru: 'Пройти снова',
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
