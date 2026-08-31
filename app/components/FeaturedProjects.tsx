"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/app/lib/data";
import ProjectCard from "./ProjectCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const featured = projects.slice(0, 4);

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !trackRef.current) return;
      const track = trackRef.current;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const distance = () => track.scrollWidth - window.innerWidth + 48;

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-28 md:py-36 md:overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-[12px] uppercase tracking-[0.15em] text-muted mb-4">
              Selected work
            </p>
            <h2 className="max-w-2xl text-4xl md:text-5xl leading-[1.05] tracking-tight font-medium">
              Systems I&apos;ve shipped from{" "}
              <span className="font-display italic text-muted">idea</span> to
              production.
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:inline-flex text-[14px] text-muted hover:text-foreground transition-colors"
          >
            See all work →
          </Link>
        </div>
      </div>

      <div className="md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] md:pr-6 md:[mask-image:linear-gradient(to_right,black_0,black_calc(100%-6rem),transparent_100%)]">
        <div
          ref={trackRef}
          className="flex flex-col md:flex-row gap-5 md:gap-6 md:flex-nowrap md:will-change-transform"
        >
          {featured.map((p, i) => (
            <div
              key={p.slug}
              className="md:w-[min(520px,78vw)] md:shrink-0 mx-6 md:mx-0"
            >
              <ProjectCard project={p} index={i} size="lg" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 mt-10 md:hidden">
        <Link
          href="/work"
          className="inline-flex text-[14px] text-muted hover:text-foreground transition-colors"
        >
          See all work →
        </Link>
      </div>
    </section>
  );
}
