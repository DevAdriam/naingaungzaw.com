"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type Props = {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function CountUp({
  end,
  suffix = "",
  duration = 1.6,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const obj = { val: 0 };
      const tween = gsap.to(obj, {
        val: end,
        duration,
        ease: "power3.out",
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = Math.round(obj.val) + suffix;
          }
        },
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: ref, dependencies: [end, suffix, duration] }
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
