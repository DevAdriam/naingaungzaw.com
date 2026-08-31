"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects, type Project } from "@/app/lib/data";
import SplitReveal from "./SplitReveal";
import ProjectCard from "./ProjectCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const groups: Array<{ company: Project["company"]; label: string; note: string }> = [
  {
    company: "Supacart",
    label: "Supacart Myanmar Software Solutions",
    note: "2025 — Present · Backend-Focused Full Stack · Project Lead",
  },
  {
    company: "Visible One",
    label: "Visible One (Hong Kong)",
    note: "Sep 2024 — Sep 2025 · Full Stack (frontend-focused), Product Team",
  },
  {
    company: "Xsphere",
    label: "Xsphere",
    note: "Aug 2023 — Feb 2025 · jr. Backend Developer",
  },
  {
    company: "Personal",
    label: "Personal projects",
    note: "Learning in public",
  },
];

export default function WorkGrid() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      const cards = rootRef.current.querySelectorAll<HTMLElement>("[data-work-card]");

      const batchCleanup = ScrollTrigger.batch(cards, {
        start: "top 88%",
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.09,
              ease: "power3.out",
              overwrite: true,
            }
          ),
      });

      return () => {
        batchCleanup.forEach((st) => st.kill());
      };
    },
    { scope: rootRef }
  );

  return (
    <section className="pt-40 pb-28 md:pt-52 md:pb-36">
      <div ref={rootRef} className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[12px] uppercase tracking-[0.15em] text-muted mb-4">
            Work
          </p>
          <SplitReveal
            as="h1"
            splitBy="lines"
            delay={0.1}
            duration={1}
            stagger={0.09}
            className="max-w-3xl text-5xl md:text-6xl leading-[1.05] tracking-tight font-medium"
          >
            Every system I&apos;ve{" "}
            <span className="font-display italic text-muted">shipped</span> so far.
          </SplitReveal>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            Grouped by where the work lived — the agency, my last full-time
            role, and personal projects I keep coming back to.
          </p>
        </motion.div>

        <div className="mt-20 space-y-24">
          {groups.map((g) => {
            const items = projects.filter((p) => p.company === g.company);
            if (items.length === 0) return null;
            return (
              <div key={g.company}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-4 mb-8 pb-4 border-b border-border">
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                    {g.label}
                  </h2>
                  <span className="text-[12px] uppercase tracking-wider text-muted md:text-right">
                    {g.note}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {items.map((p, i) => (
                    <div key={p.slug} data-work-card>
                      <ProjectCard project={p} index={i}>
                        {p.highlights.length > 0 && (
                          <ul className="mt-5 pt-4 border-t border-border text-[13px] text-muted leading-relaxed space-y-1.5">
                            {p.highlights.map((h) => (
                              <li key={h} className="pl-4 relative">
                                <span
                                  aria-hidden
                                  className="absolute left-0 top-2 w-1 h-1 rounded-full bg-foreground/40"
                                />
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}
                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[13px] mt-4 hover:text-foreground text-muted transition-colors"
                          >
                            View repo →
                          </a>
                        )}
                      </ProjectCard>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
