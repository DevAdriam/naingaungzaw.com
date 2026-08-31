"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects, type Project } from "@/app/lib/data";
import SplitReveal from "./SplitReveal";

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
  return (
    <section className="pt-40 pb-28 md:pt-52 md:pb-36">
      <div className="mx-auto max-w-6xl px-6">
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
                <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-border">
                  <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                    {g.label}
                  </h2>
                  <span className="text-[12px] uppercase tracking-wider text-muted">
                    {g.note}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {items.map((p) => (
                    <article
                      key={p.slug}
                      className="group rounded-2xl border border-border bg-card p-6"
                    >
                      <div
                        className={`aspect-[16/9] w-full rounded-xl bg-gradient-to-br ${p.accent} mb-5 relative overflow-hidden`}
                      >
                        {p.cover ? (
                          <Image
                            src={p.cover}
                            alt={p.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 45vw"
                            className="object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center px-6">
                            <span className="font-display text-3xl md:text-4xl italic text-foreground/50 text-center leading-tight">
                              {p.title.split(" —")[0]}
                            </span>
                          </div>
                        )}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] text-white/90 mix-blend-difference z-10">
                          <span>{p.role}</span>
                          <span>{p.year}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-medium tracking-tight mb-2">
                        {p.title}
                      </h3>
                      <p className="text-[14px] text-muted leading-relaxed mb-4">
                        {p.blurb}
                      </p>

                      <ul className="text-[13px] text-muted leading-relaxed space-y-1.5 mb-5">
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

                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] uppercase tracking-wider text-muted border border-border rounded-full px-2 py-0.5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[13px] mt-5 hover:text-foreground text-muted transition-colors"
                        >
                          View repo →
                        </a>
                      )}
                    </article>
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
