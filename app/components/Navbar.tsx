"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatar from "./Avatar";
import ScrambleText from "./ScrambleText";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled || open
            ? "bg-white/80 backdrop-blur-xl border border-border rounded-full py-2.5 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            : ""
        }`}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <Avatar size={28} priority />
          <span className="text-[15px] font-medium tracking-tight">
            Naing Aung Zaw
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[14px] transition-colors ${
                  active ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                <ScrambleText>{l.label}</ScrambleText>
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium bg-foreground text-background rounded-full px-4 py-2 hover:opacity-90 transition-opacity"
        >
          Get in touch
          <span aria-hidden>→</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-white/80 backdrop-blur-md hover:bg-white transition-colors"
        >
          <span className="relative block w-4 h-3">
            <span
              className={`absolute left-0 right-0 h-px bg-foreground transition-all duration-300 ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 right-0 top-1/2 h-px bg-foreground transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 right-0 h-px bg-foreground transition-all duration-300 ${
                open ? "top-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`md:hidden origin-top transition-all duration-300 overflow-hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 mt-3">
          <nav className="rounded-2xl border border-border bg-white/95 backdrop-blur-xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_40px_-20px_rgba(0,0,0,0.14)] p-3 flex flex-col">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-medium tracking-tight transition-colors ${
                    active
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-card"
                  }`}
                >
                  {l.label}
                  <span aria-hidden className="text-muted">
                    →
                  </span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-foreground text-background px-4 py-3 text-[14px] font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch
              <span aria-hidden>→</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
