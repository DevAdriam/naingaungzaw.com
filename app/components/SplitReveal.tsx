"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
}

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  splitBy?: "lines" | "words" | "chars";
  stagger?: number;
  duration?: number;
  delay?: number;
  start?: string;
  once?: boolean;
};

export default function SplitReveal({
  as: Tag = "div",
  children,
  className,
  splitBy = "lines",
  stagger = 0.08,
  duration = 0.9,
  delay = 0,
  start = "top 85%",
  once = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const type =
        splitBy === "chars" ? "chars,words" : splitBy === "words" ? "words" : "lines";
      const split = SplitText.create(ref.current, {
        type,
        mask: splitBy,
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
        autoSplit: true,
      });

      const targets =
        splitBy === "chars"
          ? split.chars
          : splitBy === "words"
            ? split.words
            : split.lines;

      const tween = gsap.from(targets, {
        yPercent: 110,
        opacity: 0,
        duration,
        stagger,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        split.revert();
      };
    },
    { scope: ref, dependencies: [splitBy, stagger, duration, delay, start, once] }
  );

  const RefTag = Tag as ElementType;
  return (
    <RefTag ref={ref} className={className}>
      {children}
    </RefTag>
  );
}
