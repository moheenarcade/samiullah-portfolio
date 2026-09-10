"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ROLES = [
  "English Teacher",
  "Content Writer",
  "SEO Specialist",
  "IT Support",
  "PowerPoint Designer",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-paper"
    >
      {/* faint ruled-notebook lines in the background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 43px, #f6f1e4 44px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-10 hidden w-px bg-gold/40 md:block md:left-16"
      />

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
        <p className="font-body text-sm tracking-wide text-paper/60">
          Nawanshehr, Abbottabad, Pakistan
        </p>

        <h1 className="mt-6 font-display text-[13vw] leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
          Samiullah Khan
        </h1>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-display text-2xl italic text-gold sm:text-3xl md:text-4xl">
          <span className="not-italic text-paper/70 font-body text-base sm:text-lg md:text-xl">
            Currently:
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={ROLES[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {ROLES[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        <p className="mt-8 max-w-lg text-balance font-body text-base leading-relaxed text-paper/80 sm:text-lg">
          A linguistics graduate who teaches English grammar and literature
          by day, and builds websites&rsquo; content, search visibility, and
          office documents by the rest of the day. Comfortable equally with
          a classroom, a keyboard, and a client brief.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-none border border-gold bg-gold px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-transparent hover:text-gold"
          >
            Get in touch
          </a>
          <a
            href="#lexicon"
            className="rounded-none border border-paper/30 px-6 py-3 font-body text-sm font-medium text-paper transition-colors hover:border-paper"
          >
            See what I do
          </a>
        </div>
      </div>
    </section>
  );
}
