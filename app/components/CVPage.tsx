"use client";

import {
  contact,
  education,
  experience,
  getAge,
  projects,
  skillGroups,
  strengths,
} from "@/app/lib/data";

const featuredProjects = projects.filter(
  (p) => p.company !== "Personal"
);
const personalProjects = projects.filter((p) => p.company === "Personal");

export default function CVPage() {
  const age = getAge();

  const onPrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <div className="bg-background text-foreground print:bg-white">
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-16 print:pt-0 print:pb-0 print:px-0 print:max-w-none">
        <div className="print:hidden mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[12px] uppercase tracking-[0.15em] text-muted mb-2">
              CV / Resume
            </p>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
              A one-page snapshot of what I&apos;ve shipped.
            </h1>
            <p className="mt-3 text-[15px] text-muted max-w-xl leading-relaxed">
              Use the button to save this page as a PDF. Everything here is
              generated from the same source that powers the rest of the site.
            </p>
          </div>
          <button
            type="button"
            onClick={onPrint}
            className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-5 py-3 text-[14px] font-medium hover:opacity-90 transition-opacity"
          >
            Print / Save as PDF
            <span aria-hidden>↓</span>
          </button>
        </div>

        <article
          id="cv-sheet"
          className="rounded-2xl border border-border bg-card p-8 md:p-12 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_60px_-24px_rgba(0,0,0,0.16)] print:rounded-none print:border-0 print:shadow-none print:p-0"
        >
          <header className="pb-6 border-b border-border">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
                  Naing Aung Zaw
                </h2>
                <p className="mt-1 text-[14px] text-muted">
                  Backend-Focused Full Stack Developer · {age} · Yangon, Myanmar
                </p>
              </div>
              <div className="text-[12px] text-muted leading-relaxed text-right">
                <div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
                <div>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
                <div>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    github.com/DevAdriam
                  </a>
                </div>
              </div>
            </div>
          </header>

          <section className="mt-6">
            <SectionLabel>Summary</SectionLabel>
            <p className="text-[14px] text-foreground/85 leading-relaxed">
              Backend-focused full stack developer with three years shipping
              production systems across ERP, POS, membership, taxi finance,
              multi-tenant SaaS, and hotel booking. Currently{" "}
              <strong className="font-medium">Lead Developer</strong> on
              SupaGym (multi-tenant SaaS, ~20 gym clients live) and Mingalar
              Trip (multi-tenant hotel booking) at Supacart — owning web, mobile,
              API, deployments, and CI/CD end-to-end. Strong in NestJS,
              Prisma/Postgres, React, Expo, and system design; comfortable in
              Spring Boot and Go where the workload calls for it.
            </p>
          </section>

          <section className="mt-6">
            <SectionLabel>Experience</SectionLabel>
            <div className="space-y-5">
              {experience.map((e) => (
                <div key={e.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="text-[14px] font-medium tracking-tight">
                      {e.role}{" "}
                      <span className="text-muted font-normal">
                        · {e.company}
                      </span>
                    </div>
                    <div className="text-[12px] text-muted">
                      {e.period} · {e.location}
                    </div>
                  </div>
                  <p className="mt-1.5 text-[13px] text-foreground/80 leading-relaxed">
                    {e.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <SectionLabel>Selected projects</SectionLabel>
            <div className="space-y-4">
              {featuredProjects.slice(0, 6).map((p) => (
                <div key={p.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="text-[13.5px] font-medium tracking-tight">
                      {p.title}
                    </div>
                    <div className="text-[12px] text-muted">
                      {p.company} · {p.year}
                    </div>
                  </div>
                  <p className="mt-1 text-[13px] text-foreground/80 leading-relaxed">
                    {p.blurb}
                  </p>
                  {p.highlights.length > 0 && (
                    <ul className="mt-1.5 pl-4 text-[12.5px] text-foreground/75 leading-relaxed space-y-0.5 list-disc marker:text-foreground/40">
                      {p.highlights.slice(0, 3).map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 grid md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <SectionLabel>Skills</SectionLabel>
              <div className="space-y-2.5">
                {skillGroups.map((g) => (
                  <div key={g.title} className="text-[12.5px]">
                    <span className="uppercase tracking-[0.12em] text-muted text-[11px]">
                      {g.title}
                    </span>
                    <div className="mt-0.5 text-foreground/85 leading-relaxed">
                      {g.items.join(" · ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel>Strengths</SectionLabel>
              <ul className="space-y-2 text-[12.5px]">
                {strengths.map((s) => (
                  <li key={s.title}>
                    <span className="font-medium">{s.title}.</span>{" "}
                    <span className="text-foreground/80 leading-relaxed">
                      {s.body}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <SectionLabel>Personal projects</SectionLabel>
                <ul className="space-y-1.5 text-[12.5px]">
                  {personalProjects.map((p) => (
                    <li key={p.slug}>
                      <span className="font-medium">{p.title}</span>
                      <span className="text-muted"> — {p.blurb}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <SectionLabel>Education & learning</SectionLabel>
            <ul className="text-[12.5px] space-y-1">
              {education.map((e) => (
                <li key={e.school} className="flex flex-wrap gap-x-2">
                  <span className="font-medium">{e.school}</span>
                  <span className="text-muted">— {e.focus}</span>
                </li>
              ))}
            </ul>
          </section>

          <footer className="mt-8 pt-4 border-t border-border text-[11px] text-muted flex flex-wrap justify-between gap-2">
            <span>References available on request.</span>
            <span>Updated {new Date().toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</span>
          </footer>
        </article>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] uppercase tracking-[0.18em] text-muted mb-2">
      {children}
    </div>
  );
}
