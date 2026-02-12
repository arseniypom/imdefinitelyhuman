'use client';

import { useEffect, useRef, useState } from 'react';
import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';
import { calculatePercentage, getTierKey } from '@/lib/scoring';

// Semicircular arc from (15,100) over the top to (185,100)
// Using a <path> with explicit arc command — reliable linecaps, no dasharray quirks
const R = 85;
const STROKE = 8;
const ARC_D = `M 15 100 A ${R} ${R} 0 0 1 185 100`;
// viewBox sized to contain stroke + round linecaps with padding
const VB = '5 5 190 103';

export function ResultScreen() {
  const { state, dispatch } = useQuiz();
  const finalPercent = calculatePercentage(state.answers);
  const [displayNum, setDisplayNum] = useState(0);
  const [countDone, setCountDone] = useState(false);
  const [arcProgress, setArcProgress] = useState(0);
  const animRef = useRef<number>(0);
  const isTerminal = state.theme === 'terminal';

  useEffect(() => {
    const duration = 2400;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayNum(Math.round(eased * finalPercent));
      setArcProgress(eased * (finalPercent / 100));

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setCountDone(true);
      }
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [finalPercent]);

  const tierKey = getTierKey(finalPercent);
  const handleRestart = () => dispatch({ type: 'RESTART' });

  // pathLength="1" lets us use simple 0–1 math for dashoffset
  const fillOffset = 1 - arcProgress;

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6 text-center px-4">
      {/* Gauge */}
      <div className="relative w-[300px]">
        <svg viewBox={VB} className="w-full">
          {/* Track */}
          <path
            d={ARC_D}
            fill="none"
            stroke="var(--border)"
            strokeWidth={STROKE}
            strokeLinecap={isTerminal ? 'square' : 'round'}
          />
          {/* Fill — animated via dashoffset */}
          <path
            d={ARC_D}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={STROKE}
            strokeLinecap={isTerminal ? 'square' : 'round'}
            pathLength={1}
            strokeDasharray="1"
            strokeDashoffset={fillOffset}
            className={isTerminal ? 'drop-shadow-[0_0_8px_var(--glow-strong)]' : ''}
          />
        </svg>

        {/* Number overlay — sits at the flat base of the semicircle */}
        <div className="absolute inset-0 flex items-end justify-center" style={{ paddingBottom: '2px' }}>
          <span
            className={`text-[5rem] sm:text-[7rem] tabular-nums leading-none ${
              isTerminal ? 'font-bold' : 'result-number'
            } ${
              countDone
                ? isTerminal
                  ? 'animate-glitch'
                  : 'text-[--accent]'
                : ''
            }`}
          >
            {displayNum}
            <span className={`text-[2rem] sm:text-[2.5rem] ${isTerminal ? '' : 'result-number'}`}>%</span>
          </span>
        </div>
      </div>

      {/* Name + result line */}
      <h2 className="text-2xl sm:text-3xl animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-1">
        {t('result.title', state.lang, {
          name: state.name || '???',
          score: finalPercent,
        })}
      </h2>

      {/* Tier punchline — standalone italic, no pill */}
      <p className={`text-base text-[--muted] animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-2 ${
        isTerminal ? 'font-mono' : 'light-serif'
      }`}>
        &ldquo;{t(tierKey, state.lang)}&rdquo;
      </p>

      {/* Restart */}
      <button
        onClick={handleRestart}
        className="quiz-btn mt-2 animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-3"
      >
        {t('ui.restart', state.lang)}
      </button>

      {/* Footer */}
      {isTerminal ? (
        <pre className="text-[10px] text-[--muted] opacity-30 leading-tight mt-2 select-none">
{`  ╔══════════════════════╗
  ║  HUMAN VERIFICATION  ║
  ║     PROTOCOL v0.1    ║
  ╚══════════════════════╝`}
        </pre>
      ) : (
        <div className="flex items-center gap-3 mt-2 select-none opacity-30">
          <div className="w-6 h-px bg-[--muted]" />
          <span className="text-[10px] text-[--muted] tracking-[0.2em] light-serif">
            imdefinitelyhuman
          </span>
          <div className="w-6 h-px bg-[--muted]" />
        </div>
      )}
    </div>
  );
}
