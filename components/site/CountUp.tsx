"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to `end` the first time it scrolls into view.
 * Respects prefers-reduced-motion (shows the final value immediately).
 */
export default function CountUp({
  end,
  duration = 1600,
  prefix = "",
  suffix = "",
  separator = false,
  decimals = 0,
  className,
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: boolean;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVal(end);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const t0 = performance.now();
            const step = (now: number) => {
              const t = Math.min(1, (now - t0) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setVal(end * eased);
              if (t < 1) requestAnimationFrame(step);
              else setVal(end);
            };
            requestAnimationFrame(step);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  const fmt = (n: number) => {
    let s = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
    if (separator) s = s.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return s;
  };

  return (
    <span ref={ref} className={className}>
      {prefix}
      {fmt(val)}
      {suffix}
    </span>
  );
}
