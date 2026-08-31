"use client";

import { useRef, useEffect, type ReactNode } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#";

type Props = {
  children: string;
  duration?: number;
  className?: string;
  as?: "span" | "div";
};

export default function ScrambleText({
  children,
  duration = 380,
  className,
  as: Tag = "span",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const finalText = children;
    let raf = 0;
    let start = 0;
    let running = false;

    const step = (t: number) => {
      if (!start) start = t;
      const elapsed = t - start;
      const progress = Math.min(elapsed / duration, 1);
      const cutoff = Math.floor(finalText.length * progress);
      let out = "";
      for (let i = 0; i < finalText.length; i++) {
        if (i < cutoff) out += finalText[i];
        else if (finalText[i] === " ") out += " ";
        else out += CHARS[(Math.random() * CHARS.length) | 0];
      }
      el.textContent = out;
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      } else {
        running = false;
      }
    };

    const onEnter = () => {
      if (running) cancelAnimationFrame(raf);
      running = true;
      start = 0;
      raf = requestAnimationFrame(step);
    };
    const onLeave = () => {
      if (running) cancelAnimationFrame(raf);
      running = false;
      el.textContent = finalText;
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [children, duration]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
