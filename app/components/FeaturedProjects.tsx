"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/app/lib/data";

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

      <div className="md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] md:pr-6">
        <div
          ref={trackRef}
          className="flex flex-col md:flex-row gap-5 md:gap-8 md:flex-nowrap md:will-change-transform"
        >
          {featured.map((p) => (
            <article
              key={p.slug}
              className="group relative rounded-2xl border border-border bg-card p-6 md:w-[min(560px,80vw)] md:shrink-0 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow mx-6 md:mx-0"
            >
              <div
                className={`aspect-[16/10] w-full rounded-xl bg-gradient-to-br ${p.accent} mb-6 overflow-hidden relative`}
              >
                {p.cover ? (
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center px-8">
                    <span className="font-display text-4xl md:text-5xl italic text-foreground/50 text-center">
                      {p.title.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>
                )}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[12px] text-white/90 mix-blend-difference z-10">
                  <span>{p.company}</span>
                  <span>{p.year}</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                <span
                  aria-hidden
                  className="text-foreground/40 group-hover:translate-x-1 group-hover:text-foreground transition-all"
                >
                  →
                </span>
              </div>
              <p className="text-[15px] text-muted leading-relaxed mb-5">
                {p.blurb}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] uppercase tracking-wider text-muted border border-border rounded-full px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
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
