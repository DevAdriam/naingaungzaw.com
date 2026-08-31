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
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border border-border rounded-full py-2.5 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
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
          className="inline-flex items-center gap-1.5 text-[13px] font-medium bg-foreground text-background rounded-full px-4 py-2 hover:opacity-90 transition-opacity"
        >
          Get in touch
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
