"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import type { Project } from "@/app/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

type Props = {
  project: Project;
  index?: number;
  size?: "md" | "lg";
  children?: ReactNode;
};

export default function ProjectCard({
  project: p,
  index,
  size = "md",
  children,
}: Props) {
  const cardRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      const img = imageRef.current;
      const tilt = tiltRef.current;
      if (!card || !img || !tilt) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const rotX = gsap.quickTo(tilt, "rotateX", { duration: 0.6, ease: "power3.out" });
      const rotY = gsap.quickTo(tilt, "rotateY", { duration: 0.6, ease: "power3.out" });
      const imgX = gsap.quickTo(img, "x", { duration: 0.8, ease: "power3.out" });
      const imgY = gsap.quickTo(img, "y", { duration: 0.8, ease: "power3.out" });

      gsap.set(tilt, { transformPerspective: 1200, transformStyle: "preserve-3d" });

      const onMove = (e: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        rotY(relX * 6);
        rotX(-relY * 4);
        imgX(relX * 14);
        imgY(relY * 14);
      };
      const onLeave = () => {
        rotX(0);
        rotY(0);
        imgX(0);
        imgY(0);
      };

      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerleave", onLeave);
      return () => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
      };
    },
    { scope: cardRef }
  );

  const label = index != null ? String(index + 1).padStart(2, "0") : null;

  return (
    <article
      ref={cardRef}
      className="group relative"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={tiltRef}
        className="relative rounded-2xl bg-card overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.03),0_10px_30px_-14px_rgba(0,0,0,0.12)] transition-shadow duration-500 group-hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_60px_-20px_rgba(0,0,0,0.24)] will-change-transform"
      >
        <div
          className={`relative overflow-hidden ${
            size === "lg" ? "aspect-[16/11]" : "aspect-[16/10]"
          } bg-gradient-to-br ${p.accent}`}
        >
          <div
            ref={imageRef}
            className="absolute inset-0 scale-[1.12] transition-transform duration-[900ms] ease-out group-hover:scale-[1.18] will-change-transform"
          >
            {p.cover ? (
              <Image
                src={p.cover}
                alt={p.title}
                fill
                sizes={size === "lg" ? "(max-width: 768px) 100vw, 520px" : "(max-width: 768px) 100vw, 45vw"}
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <span className="font-display text-4xl md:text-5xl italic text-foreground/50 text-center">
                  {p.title.split(" —")[0]}
                </span>
              </div>
            )}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20 opacity-70" />

          {label && (
            <div className="absolute top-5 right-5 z-10">
              <span className="font-display italic text-white text-3xl md:text-4xl leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                {label}
              </span>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-4 z-10">
            <div className="flex flex-col gap-1 text-white">
              <span className="text-[11px] uppercase tracking-[0.15em] text-white/70">
                {p.role} · {p.year}
              </span>
              <h3 className="text-xl md:text-[26px] font-medium tracking-tight leading-tight">
                {p.title.split(" —")[0]}
              </h3>
            </div>
            <span
              aria-hidden
              className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-white text-black text-[12px] font-medium px-3 py-1.5 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
            >
              View
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </div>
        </div>

        <div className="p-5">
          <p className="text-[14px] text-muted leading-relaxed line-clamp-3">
            {p.blurb}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {p.tags.slice(0, 5).map((t) => (
              <span
                key={t}
                className="text-[11px] uppercase tracking-[0.12em] text-muted relative before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:h-px before:bg-foreground/30 before:w-0 group-hover:before:w-full before:transition-[width] before:duration-500"
              >
                {t}
              </span>
            ))}
          </div>
          {children}
        </div>
      </div>
    </article>
  );
}
