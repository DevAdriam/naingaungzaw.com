"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { contact } from "@/app/lib/data";
import Avatar from "./Avatar";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-[12px] uppercase tracking-[0.15em] text-muted mb-6">
            Let&apos;s build something
          </p>
          <h2 className="text-5xl md:text-7xl leading-[1.02] tracking-tight font-medium">
            Have an idea?{" "}
            <span className="font-display italic text-muted">Let&apos;s talk.</span>
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-5 py-3 text-[14px] font-medium hover:opacity-90 transition-opacity"
            >
              {contact.email}
              <span aria-hidden>→</span>
            </a>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 border border-border bg-background rounded-full px-5 py-3 text-[14px] font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Or start with my work
            </Link>
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[13px] text-muted">
          <div className="flex items-center gap-2">
            <Avatar size={28} />
            <span>© {new Date().getFullYear()} Naing Aung Zaw</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/work" className="hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
