"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  skillGroups,
  experience,
  education,
  strengths,
  getAge,
} from "@/app/lib/data";
import SplitReveal from "./SplitReveal";

export default function AboutPage() {
  const age = getAge();
  return (
    <section className="pt-40 pb-28 md:pt-52 md:pb-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-[12px] uppercase tracking-[0.15em] text-muted mb-4">
            About
          </p>
          <SplitReveal
            as="h1"
            splitBy="lines"
            delay={0.1}
            duration={1}
            stagger={0.09}
            className="text-5xl md:text-6xl leading-[1.05] tracking-tight font-medium"
          >
            Backend-focused{" "}
            <span className="font-display italic text-muted">
              full stack developer
            </span>{" "}
            in Yangon.
          </SplitReveal>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-200 to-stone-100"
              >
                <Image
                  src="/profile.jpg"
                  alt="Naing Aung Zaw"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] uppercase tracking-wider text-white/90 mix-blend-difference">
                  <span>Yangon, MM</span>
                  <span>2025</span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="md:col-span-7">
            <p className="text-[12px] uppercase tracking-[0.15em] text-muted mb-4">
              Story
            </p>
            <div className="space-y-5 text-[16px] leading-relaxed text-muted">
              <p>
                I&apos;m a {age}-year-old software developer from Yangon. I
                started backend at Xsphere in 2023, shipping ERP, POS,
                membership, and taxi finance systems on NestJS and Postgres.
              </p>
              <p>
                From there I joined{" "}
                <strong className="text-foreground font-medium">
                  Visible One
                </strong>{" "}
                in Hong Kong as a Full Stack Developer on the Product team — in
                practice, I worked mostly the frontend side. I owned the PJM
                and Calendar modules, contributed CRM and HR features, and
                shipped two production releases. When I first joined I read
                through the codebase and pulled a reusable component layer out
                of it — the team ended up shipping subsequent modules roughly
                10× faster. I resigned on September 2, 2025.
              </p>
              <p>
                Today I&apos;m a{" "}
                <strong className="text-foreground font-medium">
                  Backend-Focused Full Stack Developer
                </strong>{" "}
                at{" "}
                <strong className="text-foreground font-medium">
                  Supacart Myanmar Software Solutions
                </strong>
                . I joined on the backend and delivered the Gym Membership
                System (still running in production). On the products I&apos;m
                assigned to, I take the{" "}
                <span className="font-display italic text-foreground">
                  Lead Developer
                </span>{" "}
                role end-to-end:
              </p>
              <ul className="pl-5 space-y-2 list-disc marker:text-foreground/40">
                <li>
                  <strong className="text-foreground font-medium">SupaGym</strong>{" "}
                  — a multi-tenant SaaS gym platform, currently live with ~20
                  gym clients.
                </li>
                <li>
                  <strong className="text-foreground font-medium">
                    Mingalar Trip
                  </strong>{" "}
                  — a multi-tenant hotel booking platform for Myanmar.
                </li>
              </ul>
              <p>
                On both, I write web, mobile, API, deployments, and the CI/CD
                pipeline. I care about clean, maintainable code and system
                design that stays simple as it scales.
              </p>
            </div>

            <div className="mt-16">
              <p className="text-[12px] uppercase tracking-[0.15em] text-muted mb-4">
                Experience
              </p>
              <div className="border-t border-border">
                {experience.map((e) => (
                  <div
                    key={e.company}
                    className="py-6 border-b border-border grid grid-cols-12 gap-4"
                  >
                    <div className="col-span-12 md:col-span-4 text-[13px] text-muted">
                      {e.period}
                      <div className="text-[12px] mt-1">{e.location}</div>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                      <div className="text-[17px] font-medium tracking-tight">
                        {e.role}{" "}
                        <span className="text-muted font-normal">
                          · {e.company}
                        </span>
                      </div>
                      <p className="text-[15px] text-muted leading-relaxed mt-2">
                        {e.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-[12px] uppercase tracking-[0.15em] text-muted mb-4">
              Strengths
            </p>
            <SplitReveal
              as="h2"
              splitBy="lines"
              className="text-3xl md:text-4xl leading-[1.05] tracking-tight font-medium"
            >
              How I{" "}
              <span className="font-display italic text-muted">show up</span> on
              a team.
            </SplitReveal>
          </div>
          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {strengths.map((s) => (
                <div key={s.title}>
                  <div className="text-[15px] font-medium tracking-tight mb-2">
                    {s.title}
                  </div>
                  <p className="text-[14px] text-muted leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-[12px] uppercase tracking-[0.15em] text-muted mb-4">
              Skills
            </p>
            <SplitReveal
              as="h2"
              splitBy="lines"
              className="text-3xl md:text-4xl leading-[1.05] tracking-tight font-medium"
            >
              What I reach for{" "}
              <span className="font-display italic text-muted">
                when building
              </span>
              .
            </SplitReveal>
          </div>
          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {skillGroups.map((g) => (
                <div key={g.title}>
                  <div className="text-[12px] uppercase tracking-wider text-muted mb-3">
                    {g.title}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="text-[12px] border border-border rounded-full px-2.5 py-1 bg-card"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-[12px] uppercase tracking-[0.15em] text-muted mb-4">
              Education
            </p>
            <SplitReveal
              as="h2"
              splitBy="lines"
              className="text-3xl md:text-4xl leading-[1.05] tracking-tight font-medium"
            >
              Where I&apos;ve{" "}
              <span className="font-display italic text-muted">learned</span>.
            </SplitReveal>
          </div>
          <div className="md:col-span-7">
            <div className="border-t border-border">
              {education.map((e) => (
                <div
                  key={e.school}
                  className="py-4 border-b border-border grid grid-cols-12 gap-4"
                >
                  <div className="col-span-12 md:col-span-5 text-[15px] font-medium tracking-tight">
                    {e.school}
                  </div>
                  <div className="col-span-12 md:col-span-7 text-[14px] text-muted">
                    {e.focus}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
