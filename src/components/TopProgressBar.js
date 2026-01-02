"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function TopProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Start progress when route changes
    setIsVisible(true);
    setProgress(0);

    // Animate to 90%
    const timer1 = setTimeout(() => setProgress(30), 50);
    const timer2 = setTimeout(() => setProgress(60), 150);
    const timer3 = setTimeout(() => setProgress(90), 300);

    // Complete and hide
    const timer4 = setTimeout(() => {
      setProgress(100);
    }, 400);

    const timer5 = setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
    }, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [pathname, searchParams]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-rose-400 via-pink-500 to-rose-400 transition-all duration-200 ease-out shadow-[0_0_10px_rgba(244,63,94,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
