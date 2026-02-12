'use client';

import { useState, useEffect, useRef } from 'react';
import { useQuiz } from '@/lib/quiz-context';
import { t } from '@/lib/i18n';
import { calculatePercentage, getTierKey } from '@/lib/scoring';

export function ResultScreen() {
  const { state, dispatch } = useQuiz();
  const finalPercent = calculatePercentage(state.answers);
  const [displayNum, setDisplayNum] = useState(0);
  const [copied, setCopied] = useState(false);
  const [countDone, setCountDone] = useState(false);
  const animRef = useRef<number>(0);
  const isTerminal = state.theme === 'terminal';

  // Count-up animation
  useEffect(() => {
    const duration = 2200;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayNum(Math.round(eased * finalPercent));

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

  const handleShare = async () => {
    const text = t('result.share_text', state.lang, {
      name: state.name,
      score: finalPercent,
    });
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: prompt-based copy
      window.prompt('Copy this text:', text);
    }
  };

  const handleRestart = () => dispatch({ type: 'RESTART' });

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-8 text-center">
      {/* Decorative header */}
      <div className={`text-xs text-[--muted] animate-fadeSlideUp ${
        isTerminal ? 'tracking-[0.3em] uppercase' : 'tracking-[0.15em] light-serif'
      }`}>
        {isTerminal ? '// analysis_complete' : 'your result'}
      </div>

      {/* Big percentage */}
      <div
        className={`text-[5rem] sm:text-[7rem] tabular-nums leading-none ${
          isTerminal ? 'font-bold' : 'result-number'
        } ${
          countDone
            ? isTerminal
              ? 'animate-glitch'
              : 'animate-revealPop text-[--accent]'
            : ''
        }`}
      >
        {displayNum}%
      </div>

      {/* Personalized message */}
      <p className="text-lg sm:text-xl leading-relaxed animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-2">
        {t('result.title', state.lang, {
          name: state.name || '???',
          score: finalPercent,
        })}
      </p>

      {/* Tier message */}
      <p className={`text-sm text-[--muted] animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-3 ${
        isTerminal ? 'italic' : 'light-serif'
      }`}>
        &quot;{t(tierKey, state.lang)}&quot;
      </p>

      {/* Divider */}
      {isTerminal ? (
        <div className="w-32 h-px bg-[--border] my-2" />
      ) : (
        <div className="flex items-center gap-3 my-2">
          <div className="w-8 h-px bg-[--border]" />
          <div className="w-2 h-2 rounded-full border border-[--accent] opacity-40" />
          <div className="w-8 h-px bg-[--border]" />
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-4 animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-4">
        <button onClick={handleShare} className="quiz-btn">
          {copied ? t('ui.copied', state.lang) : t('ui.share', state.lang)}
        </button>
        <button onClick={handleRestart} className="quiz-btn">
          {t('ui.restart', state.lang)}
        </button>
      </div>

      {/* Footer decoration */}
      {isTerminal ? (
        <pre className="text-[10px] text-[--muted] opacity-30 leading-tight mt-4 select-none">
{`  ╔══════════════════════╗
  ║  HUMAN VERIFICATION  ║
  ║     PROTOCOL v0.1    ║
  ╚══════════════════════╝`}
        </pre>
      ) : (
        <div className="flex items-center gap-3 mt-4 select-none opacity-35">
          <div className="w-1 h-1 rounded-full bg-[--accent]" />
          <span className="text-[11px] text-[--muted] tracking-[0.2em] light-serif">
            human verification protocol
          </span>
          <div className="w-1 h-1 rounded-full bg-[--accent]" />
        </div>
      )}
    </div>
  );
}
