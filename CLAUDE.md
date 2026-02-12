# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

This is a single-page Next.js 16 (App Router) quiz app that scores users on how "human" they are vs AI. It supports two languages (EN/RU) and two visual themes (light/terminal).

### State Flow

`QuizProvider` (React Context + `useReducer`) in `lib/quiz-context.tsx` owns all global state. Every component accesses it via the `useQuiz()` hook. State auto-persists to `localStorage` via `lib/storage.ts` (key: `imdefhuman_quiz`). Theme is stored separately (key: `imdefhuman_theme`).

### Quiz Pipeline

`QuizShell` → conditionally renders one of 10 step components (`components/steps/Step*.tsx`) or `ResultScreen` based on `state.currentStep`. Each step calls `dispatch({ type: 'ANSWER_STEP', ... })` to record its answer, then the shell auto-advances. `StepTransition` wraps each step with fade/slide animations.

### Scoring

`lib/scoring.ts` — each step (1–9) yields 0–10 "human points". Step 0 (name) is unscored. Max total = 90. Final percentage = `(total / 90) × 100`. Result tiers in `lib/i18n.ts`.

### i18n

Custom dictionary in `lib/i18n.ts`. Use `t(key, lang, vars?)` for translations. Language type: `'ru' | 'en'`.

### Theming

Two themes defined via CSS custom properties in `app/globals.css`:
- **light** — warm analog (paper texture, serif headings, bouncy animations)
- **terminal** — green CRT (scanlines, monospace, glitch animations)

Theme set on `document.documentElement.dataset.theme`. A blocking `<script>` in `layout.tsx` prevents flash of wrong theme.

## Key Conventions

- All components are client components (`'use client'`)
- Path alias: `@/*` maps to project root
- Tailwind CSS v4 (configured in CSS via `@theme inline`, no `tailwind.config.js`)
- Step components are named `Step{Name}.tsx` and live in `components/steps/`
- Shared button/input styles: `.quiz-btn`, `.quiz-input` classes in `globals.css`
- Stagger animations use `.stagger-1` through `.stagger-4` classes
