# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"imdefinitelyhuman" is a 10-question quiz web app that scores how "human" you are (vs AI) as a percentage. Live at https://imdefinitelyhuman.com.

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
npm start        # Serve production build
```

No test framework is configured.

## Tech Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript 5**
- **Tailwind CSS 4** via `@tailwindcss/postcss`
- **shadcn/ui** (new-york style, RSC enabled) — components in `components/ui/`
- **PostHog** for analytics (env vars in `.env.local`)
- **canvas-confetti** for 100% score celebration
- Path alias: `@/*` → project root

## Architecture

### Routing

Two routes via App Router:
- `/` → `app/page.tsx` → `LandingPage` component
- `/quiz` → `app/quiz/page.tsx` → `QuizShell` component

### State Management

`lib/quiz-context.tsx` — React Context + `useReducer`. Single `QuizState` object holds current step, all answers, language, theme, and transition state. Actions: `SET_LANG`, `SET_THEME`, `ANSWER_STEP`, `NEXT_STEP`, `RESTART`, `RESTORE`, `SET_TRANSITIONING`.

State is persisted to localStorage (`lib/storage.ts`) under keys prefixed `imdefhuman_`.

### Quiz Flow

1. **Steps 0–9**: Each step is a separate component in `components/steps/` (StepName, StepDashes, StepResponse, etc.)
2. **Step 0** (name) is unscored. Steps 1–9 each yield 0–10 points. Max = 90.
3. **QuizShell** renders the current step based on `state.currentStep` and shows `ResultScreen` when step ≥ 10.
4. **Scoring**: `lib/scoring.ts` — `scoreStep(index, value)` returns points per step. Final percentage = `round((total / 90) × 100)`.

See `QUIZ_STEPS.md` for the complete scoring reference and result tier messages.

### Internationalization

`lib/i18n.ts` — flat dictionary with `{ key: { en, ru, es } }` entries. Helper `t(key, lang)` for lookups. Three languages: English, Russian, Spanish.

### Theming

Two themes: **light** (warm analog) and **terminal** (retro green scanlines/glow). CSS variables defined in `app/globals.css`. A flash-prevention script in `app/layout.tsx` reads localStorage before React hydration.

### Analytics

PostHog tracks `step_completed` (step index + value) and `quiz_completed` (percentage + completion count). Initialized in `instrumentation-client.ts`.

### Animations

`StepTransition` component wraps step content for enter/exit animations. Custom keyframes (fadeSlideUp, glitch, flicker, revealPop, bounceSlideUp, warmReveal) defined in `globals.css`. Stagger delays via CSS utility classes.
