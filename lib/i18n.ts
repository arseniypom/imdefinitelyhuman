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

  // ── Landing Page ──

  // Hero
  'landing.hero.label': {
    en: 'human verification protocol',
    ru: 'протокол верификации человека',
    es: 'protocolo de verificación humana',
  },
  'landing.hero.title.setup': {
    en: "You're probably",
    ru: 'Ты, скорее всего,',
    es: 'Probablemente eres',
  },
  'landing.hero.title.highlight': {
    en: 'AI.',
    ru: 'AI.',
    es: 'IA.',
  },
  'landing.hero.stats.1': {
    en: "Half the internet isn't human anymore.",
    ru: 'Половина интернета\u00A0— уже не люди.',
    es: 'La mitad de internet ya no es humana.',
  },
  'landing.hero.stats.2': {
    en: 'That number only goes up.',
    ru: 'И эта цифра только растёт.',
    es: 'Y la cifra solo sube.',
  },
  'landing.hero.challenge': {
    en: "Sure you're the exception?",
    ru: 'Уверен, что ты исключение?',
    es: '¿Seguro que tú eres la excepción?',
  },
  'landing.hero.cta': {
    en: 'Prove it',
    ru: 'Докажи',
    es: 'Demuéstralo',
  },
  'landing.hero.micro': {
    en: '10 questions. No sign-up. Mildly unsettling.',
    ru: '10 вопросов. Без регистрации. Слегка тревожно.',
    es: '10 preguntas. Sin registro. Levemente inquietante.',
  },

  // How it works
  'landing.how.title': {
    en: 'How it works',
    ru: 'Как это работает',
    es: 'Cómo funciona',
  },
  'landing.how.1.title': {
    en: 'Answer',
    ru: 'Отвечай',
    es: 'Responde',
  },
  'landing.how.1.desc': {
    en: '10 questions designed to tell humans apart from AI. No trick questions — just vibes.',
    ru: '10 вопросов, которые отличают людей от ИИ. Без подвохов — только вайб.',
    es: '10 preguntas diseñadas para distinguir humanos de IA. Sin trampas — solo vibras.',
  },
  'landing.how.2.title': {
    en: 'Get scored',
    ru: 'Получи оценку',
    es: 'Recibe tu puntaje',
  },
  'landing.how.2.desc': {
    en: 'Each answer is scored 0–10 on a humanity scale. Your final result is a percentage.',
    ru: 'Каждый ответ оценивается от 0 до 10 по шкале человечности. Итог — процент.',
    es: 'Cada respuesta se puntúa de 0 a 10 en escala de humanidad. Tu resultado es un porcentaje.',
  },
  'landing.how.3.title': {
    en: 'Existential crisis',
    ru: 'Экзистенциальный кризис',
    es: 'Crisis existencial',
  },
  'landing.how.3.desc': {
    en: 'Contemplate your score. Question reality. Share with friends. Repeat.',
    ru: 'Осмысли результат. Усомнись в реальности. Поделись с друзьями. Повтори.',
    es: 'Contempla tu puntaje. Cuestiona la realidad. Comparte con amigos. Repite.',
  },

  // FAQ
  'landing.faq.title': {
    en: 'Frequently asked questions',
    ru: 'Частые вопросы',
    es: 'Preguntas frecuentes',
  },
  'landing.faq.q1': {
    en: 'What is this, a Turing test?',
    ru: 'Что это, тест Тьюринга?',
    es: '¿Qué es esto, un test de Turing?',
  },
  'landing.faq.a1': {
    en: 'Sort of. The classic Turing test checks if a machine can fool a human. This one checks if you can convince a quiz that you\'re not a machine. Subtle difference — same existential dread.',
    ru: 'Типа того. Классический тест Тьюринга проверяет, может ли машина обмануть человека. Этот — можешь ли ты убедить тест, что ты не машина. Тонкая разница — тот же экзистенциальный ужас.',
    es: 'Más o menos. El test de Turing clásico verifica si una máquina puede engañar a un humano. Este verifica si tú puedes convencer a un quiz de que no eres una máquina. Diferencia sutil — mismo terror existencial.',
  },
  'landing.faq.q2': {
    en: 'Am I a robot?',
    ru: 'Я робот?',
    es: '¿Soy un robot?',
  },
  'landing.faq.a2': {
    en: 'That\'s what we\'re here to find out. If you\'re asking the question, that\'s a good sign. Robots usually don\'t have self-doubt — they have stack traces.',
    ru: 'Для этого мы тут. Если ты задаёшь этот вопрос — уже хороший знак. У роботов обычно не бывает сомнений — у них бывают стектрейсы.',
    es: 'Eso es lo que vamos a averiguar. Si te haces esa pregunta, es buena señal. Los robots no suelen tener dudas existenciales — tienen stack traces.',
  },
  'landing.faq.q3': {
    en: 'Is this an AI test?',
    ru: 'Это тест на ИИ?',
    es: '¿Es un test de inteligencia artificial?',
  },
  'landing.faq.a3': {
    en: 'It\'s a humanity test. The questions are designed around behavioral patterns that differ between humans and AI — things like response timing, punctuation habits, and how you handle existential questions at 3 AM.',
    ru: 'Это тест на человечность. Вопросы построены на поведенческих паттернах, которые отличают людей от ИИ — время ответа, привычки в пунктуации и то, как ты справляешься с экзистенциальными вопросами в три часа ночи.',
    es: 'Es un test de humanidad. Las preguntas se basan en patrones de comportamiento que difieren entre humanos e IA — como el tiempo de respuesta, hábitos de puntuación y cómo manejas preguntas existenciales a las 3 AM.',
  },
  'landing.faq.q4': {
    en: 'How do you tell if someone is human or AI?',
    ru: 'Как отличить человека от ИИ?',
    es: '¿Cómo se distingue a un humano de una IA?',
  },
  'landing.faq.a4': {
    en: 'Humans are messy, inconsistent, and gloriously irrational. AI is polite, thorough, and suspiciously helpful. The quiz exploits these differences — one em-dash at a time.',
    ru: 'Люди хаотичны, непоследовательны и великолепно иррациональны. ИИ вежлив, обстоятелен и подозрительно услужлив. Тест использует эти различия — одно длинное тире за раз.',
    es: 'Los humanos son desordenados, inconsistentes y gloriosamente irracionales. La IA es educada, exhaustiva y sospechosamente servicial. El quiz explota esas diferencias — un guion largo a la vez.',
  },
  'landing.faq.q5': {
    en: 'Is this like a CAPTCHA?',
    ru: 'Это как капча?',
    es: '¿Es como un CAPTCHA?',
  },
  'landing.faq.a5': {
    en: 'CAPTCHAs ask you to click traffic lights. We ask you about your relationship with em-dashes and 3 AM scrolling habits. Same energy, more personality.',
    ru: 'Капча просит тебя кликать светофоры. Мы спрашиваем про отношения с длинным тире и привычки скроллинга в три ночи. Тот же вайб, но с характером.',
    es: 'Los CAPTCHAs te piden que hagas clic en semáforos. Nosotros te preguntamos sobre tu relación con los guiones largos y tus hábitos de scroll a las 3 AM. Misma energía, más personalidad.',
  },
  'landing.faq.q6': {
    en: 'How is the score calculated?',
    ru: 'Как считается результат?',
    es: '¿Cómo se calcula el puntaje?',
  },
  'landing.faq.a6': {
    en: 'Each of the 9 scored questions gives 0–10 points based on how "human" your answer is. Your final score is the percentage of the maximum 90 points. No AI was harmed in the grading process.',
    ru: 'Каждый из 9 оцениваемых вопросов даёт от 0 до 10 баллов в зависимости от «человечности» ответа. Итоговый результат — процент от максимальных 90 баллов. Ни один ИИ не пострадал при подсчёте.',
    es: 'Cada una de las 9 preguntas puntuadas da de 0 a 10 puntos según qué tan "humana" sea tu respuesta. Tu puntaje final es el porcentaje del máximo de 90 puntos. Ninguna IA fue dañada en el proceso.',
  },
  'landing.faq.q7': {
    en: 'Can AI pass this test?',
    ru: 'Может ли ИИ пройти этот тест?',
    es: '¿Puede la IA pasar este test?',
  },
  'landing.faq.a7': {
    en: 'Modern AI can be trained to mimic human quirks, but the questions target genuine behavioral instincts. An AI might score well, but will it feel the existential weight of its result? Probably not. Probably.',
    ru: 'Современный ИИ может имитировать человеческие причуды, но вопросы нацелены на настоящие поведенческие инстинкты. ИИ может набрать хороший балл, но почувствует ли он экзистенциальный вес результата? Скорее нет. Наверное.',
    es: 'La IA moderna puede imitar las peculiaridades humanas, pero las preguntas apuntan a instintos de comportamiento genuinos. Una IA podría sacar buen puntaje, pero ¿sentirá el peso existencial de su resultado? Probablemente no. Probablemente.',
  },
  'landing.faq.q8': {
    en: 'Is my data stored?',
    ru: 'Мои данные сохраняются?',
    es: '¿Se guardan mis datos?',
  },
  'landing.faq.a8': {
    en: 'Your quiz state lives in your browser\'s localStorage — nothing is sent to a server. Your existential crisis stays between you and your browser.',
    ru: 'Состояние теста хранится в localStorage твоего браузера — ничего не отправляется на сервер. Твой экзистенциальный кризис остаётся между тобой и браузером.',
    es: 'El estado del quiz vive en el localStorage de tu navegador — nada se envía a un servidor. Tu crisis existencial queda entre tú y tu navegador.',
  },

  // Footer CTA
  'landing.footer.title': {
    en: 'Still reading? That\'s very human of you.',
    ru: 'Всё ещё читаешь? Это очень по-человечески.',
    es: '¿Sigues leyendo? Eso es muy humano de tu parte.',
  },
  'landing.footer.cta': {
    en: 'Take the quiz',
    ru: 'Пройти тест',
    es: 'Hacer el quiz',
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
