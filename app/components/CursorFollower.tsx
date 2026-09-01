"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

    let shown = false;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (!shown) {
        shown = true;
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
      }
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const setHover = (hovering: boolean) => {
      gsap.to(ring, {
        scale: hovering ? 2.4 : 1,
        borderColor: hovering ? "rgba(10,10,10,0.6)" : "rgba(10,10,10,0.3)",
        duration: 0.35,
        ease: "power3.out",
      });
      gsap.to(dot, {
        scale: hovering ? 0 : 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const onOver = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const target = (e.target as HTMLElement).closest?.(
        "a, button, [data-cursor-hover]"
      );
      setHover(!!target);
    };

    const onLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.25 });
      shown = false;
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="fixed left-0 top-0 w-9 h-9 rounded-full border border-foreground/30 pointer-events-none opacity-0 z-[100]"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="fixed left-0 top-0 w-1.5 h-1.5 rounded-full bg-foreground pointer-events-none opacity-0 z-[100]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
