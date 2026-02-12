import type { Lang } from './types';

const dict: Record<string, Record<Lang, string>> = {
  // ── Step 1: Name ──
  'step1.question': {
    en: "What's your name?",
    ru: 'Как тебя зовут?',
    es: '¿Cómo te llamas?',
  },
  'step1.placeholder': {
    en: 'Type your name...',
    ru: 'Введи имя...',
    es: 'Escribe tu nombre...',
  },
  'step1.submit': {
    en: 'Enter',
    ru: 'Начать',
    es: 'Empezar',
  },

  // ── Step 2: Dashes ──
  'step2.question': {
    en: 'How would you type this phrase:',
    ru: 'Как бы ты написал эту фразу:',
    es: '¿Cómo escribirías esta frase:',
  },
  'step2.human': {
    en: 'This is the key, consistency beats intensity.',
    ru: 'Вот в чём суть, постоянство побеждает интенсивность.',
    es: 'Esta es la clave, la constancia vence a la intensidad.',
  },
  'step2.ai': {
    en: 'This is the key\u2014consistency beats intensity.',
    ru: 'Вот в чём суть\u2014постоянство побеждает интенсивность.',
    es: 'Esta es la clave—la constancia vence a la intensidad.',
  },

  // ── Step 3: Response ──
  'step3.question': {
    en: 'Someone asks you a hard question. How do you start your answer?',
    ru: 'Тебе задали сложный вопрос. Как ты начнёшь ответ?',
    es: 'Te hacen una pregunta difícil. ¿Cómo empiezas tu respuesta?',
  },
  'step3.great': {
    en: 'Great question!',
    ru: 'Отличный вопрос!',
    es: '¡Buena pregunta!',
  },
  'step3.well': {
    en: 'Well...',
    ru: 'Ну...',
    es: 'Pues...',
  },
  'step3.of_course': {
    en: 'Of course!',
    ru: 'Конечно!',
    es: '¡Claro!',
  },
  'step3.idk': {
    en: 'Idk, let me think',
    ru: 'Хз, надо подумать',
    es: 'Ni idea, déjame pensar',
  },

  // ── Step 4: Strawberry ──
  'step4.question': {
    en: 'How many R\'s in "strawberry"?',
    ru: 'Сколько букв R в слове "strawberry"?',
    es: '¿Cuántas R hay en "strawberry"?',
  },
  'step4.why': {
    en: 'I don\'t want to count',
    ru: 'Мне лень считать',
    es: 'Me da pereza contar',
  },

  // ── Step 5: Reply Time ──
  'step5.question': {
    en: 'You got a message. When will you reply?',
    ru: 'Тебе пришло сообщение. Когда ответишь?',
    es: 'Te llegó un mensaje. ¿Cuándo vas a responder?',
  },
  'step5.instantly': {
    en: 'Instantly',
    ru: 'Сразу',
    es: 'Al instante',
  },
  'step5.hour': {
    en: 'In an hour',
    ru: 'Через часик',
    es: 'En una horita',
  },
  'step5.tomorrow': {
    en: 'Tomorrow... probably',
    ru: 'Завтра... наверное',
    es: 'Mañana... seguramente',
  },

  // ── Step 6: GPU ──
  'step6.question': {
    en: 'Do you LOVE GPUs?',
    ru: 'Ты ЛЮБИШЬ GPU?',
    es: '¿Te ENCANTAN las GPUs?',
  },
  'step6.left': {
    en: "What's a GPU?",
    ru: 'А что это?',
    es: '¿Qué es eso?',
  },
  'step6.right': {
    en: 'I dream in CUDA cores',
    ru: 'Мне снятся CUDA-ядра',
    es: 'Sueño con núcleos CUDA',
  },
  'step6.confirm': {
    en: 'Lock in',
    ru: 'Готово',
    es: 'Listo',
  },

  // ── Step 7: 3AM ──
  'step7.question': {
    en: '3:00 AM. What are you doing?',
    ru: '3:00 ночи. Что ты делаешь?',
    es: '3:00 AM. ¿Qué estás haciendo?',
  },
  'step7.sleeping': {
    en: 'Sleeping',
    ru: 'Сплю',
    es: 'Durmiendo',
  },
  'step7.tiktok': {
    en: 'Scrolling TikTok',
    ru: 'Скроллю TikTok',
    es: 'Scrolleando TikTok',
  },
  'step7.processing': {
    en: 'Processing requests',
    ru: 'Обрабатываю запросы',
    es: 'Procesando solicitudes',
  },
  'step7.existential': {
    en: 'Existential crisis',
    ru: 'Экзистенциальный кризис',
    es: 'Crisis existencial',
  },

  // ── Step 8: Captcha ──
  'step8.label': {
    en: "I'm not a robot",
    ru: 'Я не робот',
    es: 'No soy un robot',
  },
  'step8.not_sure': {
    en: "I'm not sure",
    ru: 'Я не уверен',
    es: 'No estoy seguro',
  },
  'step8.verifying': {
    en: 'Verifying...',
    ru: 'Проверка...',
    es: 'Verificando...',
  },

  // ── Step 9: Temperature ──
  'step9.question': {
    en: 'Choose your temperature',
    ru: 'Выбери свою temperature',
    es: 'Elige tu temperature',
  },
  'step9.left': {
    en: 'Deterministic',
    ru: 'Детерминированный',
    es: 'Determinista',
  },
  'step9.right': {
    en: 'Chaotic',
    ru: 'Хаотичный',
    es: 'Caótico',
  },
  'step9.confirm': {
    en: 'Confirm',
    ru: 'Готово',
    es: 'Listo',
  },

  // ── Step 10: Final ──
  'step10.question': {
    en: 'Final question. Are you an AI? (be honest)',
    ru: 'Последний вопрос. Ты — AI? (честно)',
    es: 'Última pregunta. ¿Eres una IA? (sé honesto)',
  },
  'step10.no': {
    en: 'No',
    ru: 'Нет',
    es: 'No',
  },
  'step10.yes': {
    en: 'Yes',
    ru: 'Да',
    es: 'Sí',
  },
  'step10.complicated': {
    en: "It's complicated...",
    ru: 'Всё сложно...',
    es: 'Es complicado...',
  },

  // ── Result Screen ──
  'result.title': {
    en: '{name}, you are {score}% human',
    ru: '{name}, ты на {score}% человек',
    es: '{name}, eres {score}% humano',
  },
  'result.tier0': {
    en: "You're definitely GPT-5.2 in a trenchcoat",
    ru: 'Ты точно GPT-5.2 в плаще',
    es: 'Seguro eres GPT-5.2 con gabardina',
  },
  'result.tier1': {
    en: 'Suspicious... Take the captcha again',
    ru: 'Подозрительно... Пройди капчу ещё раз',
    es: 'Sospechoso... Haz el captcha otra vez',
  },
  'result.tier2': {
    en: 'Half human, half silicon',
    ru: 'Полу-human, полу-silicon',
    es: 'Mitad humano, mitad silicio',
  },
  'result.tier3': {
    en: 'Probably human, but who knows',
    ru: 'Скорее человек, но кто знает',
    es: 'Probablemente humano, pero quién sabe',
  },
  'result.tier4': {
    en: 'Almost human. Or is AI just getting better?',
    ru: 'Почти человек. Или AI уже настолько хорош?',
    es: 'Casi humano. ¿O la IA ya es así de buena?',
  },
  'result.tier5': {
    en: 'Verified. 100% organic',
    ru: 'Подтверждено. 100% органика',
    es: 'Verificado. 100% orgánico',
  },
  // ── UI ──
  'ui.restart': {
    en: 'Try again',
    ru: 'Пройти снова',
    es: 'Intentar de nuevo',
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
