"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getAge } from "@/app/lib/data";
import SplitReveal from "./SplitReveal";
import Magnetic from "./Magnetic";
import HeroBackground from "./HeroBackground";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Hero() {
  const age = getAge();
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !innerRef.current) return;
      const tween = gsap.to(innerRef.current, {
        y: -120,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative pt-40 pb-32 md:pt-52 md:pb-40 overflow-hidden"
    >
      <HeroBackground />
      <div ref={innerRef} className="relative z-10 mx-auto max-w-6xl px-6">
        <SplitReveal
          as="h1"
          splitBy="lines"
          delay={0.1}
          duration={1}
          stagger={0.09}
          className="max-w-4xl text-5xl md:text-7xl leading-[1.02] tracking-tight font-medium"
        >
          Full-stack developer,{" "}
          <span className="font-display italic text-muted">system-design</span>{" "}
          at heart.
        </SplitReveal>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted"
        >
          I&apos;m Naing — a {age}-year-old developer from Yangon. Backend-focused
          full stack at Supacart, where I{" "}
          <span className="font-display italic text-foreground">lead</span>{" "}
          the SupaGym and Mingalar Trip products end-to-end: web, mobile, API,
          deployments, and CI/CD.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <Magnetic>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-5 py-3 text-[14px] font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch
              <span aria-hidden>→</span>
            </Link>
          </Magnetic>
          <Magnetic>
            <a
              href="/naing-aung-zaw-cv.pdf"
              download="naing-aung-zaw-cv.pdf"
              className="inline-flex items-center gap-2 border border-border bg-card rounded-full px-5 py-3 text-[14px] font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Download CV
              <span aria-hidden>↓</span>
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
