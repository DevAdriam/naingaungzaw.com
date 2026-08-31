"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getAge } from "@/app/lib/data";
import SplitReveal from "./SplitReveal";
import CountUp from "./CountUp";

const stats = [
  { label: "Productions", value: 8, suffix: "" },
  { label: "Products I lead", value: 2, suffix: "" },
  { label: "Years shipping", value: 2, suffix: "+" },
];

export default function AboutTeaser() {
  const age = getAge();
  return (
    <section id="about" className="py-28 md:py-36 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-200 to-stone-100 mb-8 max-w-sm"
          >
            <Image
              src="/profile.jpg"
              alt="Naing Aung Zaw"
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              className="object-cover"
            />
          </motion.div>
          <p className="text-[12px] uppercase tracking-[0.15em] text-muted mb-4">
            About
          </p>
          <SplitReveal
            as="h2"
            splitBy="lines"
            className="text-4xl md:text-5xl leading-[1.05] tracking-tight font-medium"
          >
            {age}, based in Yangon,{" "}
            <span className="font-display italic text-muted">
              backend-focused full stack
            </span>{" "}
            at Supacart.
          </SplitReveal>
        </div>

        <div className="md:col-span-7 md:pt-3">
          <div className="space-y-5 text-[16px] leading-relaxed text-muted max-w-xl">
            <p>
              I started backend at Xsphere in 2023, shipping ERP, POS, and CRM
              systems on NestJS and Postgres. From there I moved to Visible One
              in Hong Kong as a Full Stack Developer on the Product team —
              mostly frontend in practice, delivering PJM and Calendar modules,
              plus CRM and HR features. I pulled a reusable component layer
              out of the codebase that made the team ship ~10× faster.
            </p>
            <p>
              Now I&apos;m at Supacart Myanmar Software Solutions as a
              Backend-Focused Full Stack Developer. On the products I&apos;m
              assigned to — SupaGym (multi-tenant SaaS gym platform, ~20
              clients) and Mingalar Trip (multi-tenant hotel booking
              platform) — I{" "}
              <span className="font-display italic text-foreground">
                lead
              </span>{" "}
              the build: web, mobile, API, deployments, and CI/CD.
            </p>
            <p>
              I like problems that live between architecture and delivery,
              and I care about clean, honest systems more than clever ones.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
            {stats.map((s) => (
              <div key={s.label}>
                <CountUp
                  end={s.value}
                  suffix={s.suffix}
                  className="block text-3xl md:text-4xl font-display italic"
                />
                <div className="text-[12px] uppercase tracking-wider text-muted mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/about"
              className="inline-flex text-[14px] text-muted hover:text-foreground transition-colors"
            >
              More about me →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
