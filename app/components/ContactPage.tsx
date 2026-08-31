"use client";

import { motion } from "framer-motion";
import { contact } from "@/app/lib/data";
import SplitReveal from "./SplitReveal";

const channels = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    note: "Best for project briefs and long-form questions.",
  },
  {
    label: "GitHub",
    value: "@DevAdriam",
    href: contact.github,
    note: "Code, personal projects, and things I&apos;m learning.",
  },
  {
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
    note: "For quick chats during Yangon working hours.",
  },
  {
    label: "Location",
    value: contact.location,
    href: null,
    note: "GMT +6:30, but I work async with EU and East Asia teams.",
  },
];

export default function ContactPage() {
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
            Contact
          </p>
          <SplitReveal
            as="h1"
            splitBy="lines"
            delay={0.1}
            duration={1}
            stagger={0.09}
            className="text-5xl md:text-6xl leading-[1.05] tracking-tight font-medium"
          >
            Let&apos;s talk{" "}
            <span className="font-display italic text-muted">shop</span>.
          </SplitReveal>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
            Whether you have a system you want built, an architecture question,
            or just want to say hi — I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <div className="border-t border-border">
              {channels.map((c) => (
                <div
                  key={c.label}
                  className="py-6 border-b border-border grid grid-cols-12 gap-4"
                >
                  <div className="col-span-12 md:col-span-3 text-[12px] uppercase tracking-wider text-muted pt-1">
                    {c.label}
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-xl md:text-2xl font-medium tracking-tight hover:underline"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-xl md:text-2xl font-medium tracking-tight">
                        {c.value}
                      </span>
                    )}
                    <p
                      className="text-[14px] text-muted mt-2"
                      dangerouslySetInnerHTML={{ __html: c.note }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="sticky top-32 rounded-2xl border border-border bg-card p-6">
              <div className="text-[12px] uppercase tracking-[0.15em] text-muted mb-3">
                Availability
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[15px] font-medium">
                  Open to interesting work
                </span>
              </div>
              <p className="text-[14px] text-muted leading-relaxed">
                Currently at Visible One as a mid full-stack developer. Open to
                thoughtful contract work and conversations about system-design
                heavy backend roles.
              </p>

              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-5 py-3 text-[14px] font-medium hover:opacity-90 transition-opacity"
                >
                  Send me an email
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="/cv"
                  className="inline-flex items-center gap-2 border border-border bg-background rounded-full px-5 py-3 text-[14px] font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  Download CV
                  <span aria-hidden>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
