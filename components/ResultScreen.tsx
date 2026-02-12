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
      <div className="text-xs tracking-[0.3em] text-[--terminal-dim] uppercase animate-fadeSlideUp">
        {'// analysis_complete'}
      </div>

      {/* Big percentage */}
      <div
        className={`text-[5rem] sm:text-[7rem] font-bold tabular-nums leading-none ${
          countDone ? 'animate-glitch' : ''
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
      <p className="text-sm text-[--terminal-dim] italic animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-3">
        &quot;{t(tierKey, state.lang)}&quot;
      </p>

      {/* Divider */}
      <div className="w-32 h-px bg-[--terminal-border] my-2" />

      {/* Action buttons */}
      <div className="flex gap-4 animate-fadeSlideUp opacity-0 [animation-fill-mode:forwards] stagger-4">
        <button onClick={handleShare} className="quiz-btn">
          {copied ? t('ui.copied', state.lang) : t('ui.share', state.lang)}
        </button>
        <button onClick={handleRestart} className="quiz-btn">
          {t('ui.restart', state.lang)}
        </button>
      </div>

      {/* ASCII decoration */}
      <pre className="text-[10px] text-[--terminal-dim] opacity-30 leading-tight mt-4 select-none">
{`  ╔══════════════════════╗
  ║  HUMAN VERIFICATION  ║
  ║     PROTOCOL v0.1    ║
  ╚══════════════════════╝`}
      </pre>
    </div>
  );
}
