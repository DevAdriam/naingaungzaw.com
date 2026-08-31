"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const skills = [
  "TypeScript",
  "NestJS",
  "Spring Boot",
  "Golang",
  "PostgreSQL",
  "React",
  "Kafka",
  "RabbitMQ",
  "Prisma",
  "Docker",
  "AWS",
  "Redis",
  "gRPC",
  "Microservices",
];

export default function Marquee() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackARef = useRef<HTMLDivElement>(null);
  const trackBRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const a = trackARef.current;
      const b = trackBRef.current;
      if (!a || !b) return;

      const loopA = gsap.to(a, {
        xPercent: -100,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
      const loopB = gsap.to(b, {
        xPercent: -100,
        duration: 40,
        ease: "none",
        repeat: -1,
      });

      const baseSpeed = 1;
      let targetScale = baseSpeed;

      const st = ScrollTrigger.create({
        trigger: document.documentElement,
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const v = self.getVelocity();
          const dir = v >= 0 ? 1 : -1;
          const boost = Math.min(Math.abs(v) / 600, 4);
          targetScale = dir * (baseSpeed + boost);
        },
      });

      const tick = () => {
        const currentA = loopA.timeScale();
        const nextA = currentA + (targetScale - currentA) * 0.08;
        loopA.timeScale(nextA);
        loopB.timeScale(nextA);
        // decay boost back toward base when idle
        if (Math.abs(targetScale) > baseSpeed) {
          const sign = targetScale >= 0 ? 1 : -1;
          const magnitude = Math.max(baseSpeed, Math.abs(targetScale) - 0.04);
          targetScale = sign * magnitude;
        }
      };
      gsap.ticker.add(tick);

      return () => {
        loopA.kill();
        loopB.kill();
        st.kill();
        gsap.ticker.remove(tick);
      };
    },
    { scope: wrapRef }
  );

  return (
    <section className="border-y border-border bg-card py-10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-6">
        <p className="text-[12px] uppercase tracking-[0.15em] text-muted">
          Tools I work with day to day
        </p>
      </div>
      <div ref={wrapRef} className="marquee">
        <div ref={trackARef} className="marquee-track">
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-display italic text-foreground/80 whitespace-nowrap"
            >
              {s}
            </span>
          ))}
        </div>
        <div ref={trackBRef} className="marquee-track" aria-hidden>
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-display italic text-foreground/80 whitespace-nowrap"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
