'use client';

import { useState, useEffect, type ReactNode } from 'react';

interface Props {
  stepKey: number;
  children: ReactNode;
}

export function StepTransition({ stepKey, children }: Props) {
  const [prevStepKey, setPrevStepKey] = useState(stepKey);
  const [visible, setVisible] = useState(true);
  const [staleChildren, setStaleChildren] = useState(children);

  // Detect step change during render (React-recommended pattern)
  const isChanging = stepKey !== prevStepKey;
  if (isChanging && visible) {
    // Begin exit: hide immediately, will trigger effect to swap later
    setVisible(false);
  }

  // After fade-out completes, swap content and fade in
  const handleTransitionEnd = () => {
    if (!visible && isChanging) {
      setPrevStepKey(stepKey);
      setStaleChildren(children);
      setVisible(true);
    }
  };

  // Fallback timer in case onTransitionEnd doesn't fire
  useEffect(() => {
    if (!visible && isChanging) {
      const timer = setTimeout(() => {
        setPrevStepKey(stepKey);
        setStaleChildren(children);
        setVisible(true);
      }, 350);
      return () => clearTimeout(timer);
    }
  });

  // Keep children fresh when step hasn't changed (e.g. language toggle)
  const displayChildren = isChanging ? staleChildren : children;

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      className={`flex min-h-dvh w-full items-center justify-center px-5 transition-all duration-300 ease-in-out ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-3 opacity-0'
      }`}
    >
      {displayChildren}
    </div>
  );
}
