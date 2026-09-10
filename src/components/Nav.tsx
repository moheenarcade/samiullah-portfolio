"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "What I do" },
  { href: "#lexicon", label: "Skills" },
  { href: "#timeline", label: "Path" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur border-paper-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className={`font-display text-lg italic transition-colors duration-300 ${
            scrolled ? "text-ink" : "text-paper"
          }`}
        >
          S. Khan
        </a>

        <nav className="hidden gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-sm transition-colors duration-300 ${
                scrolled ? "text-ink-soft" : "text-paper/85"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-deep transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 transition-transform duration-300 ${
              scrolled ? "bg-ink" : "bg-paper"
            } ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 transition-opacity duration-300 ${
              scrolled ? "bg-ink" : "bg-paper"
            } ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-px w-6 transition-transform duration-300 ${
              scrolled ? "bg-ink" : "bg-paper"
            } ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-paper-line bg-paper px-6 pb-5 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-paper-line py-3 text-sm text-ink-soft last:border-none"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
