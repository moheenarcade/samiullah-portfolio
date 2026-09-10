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
            "repeating-linear-gradient(to bottom, transparent, transparent 43px, #fbf8f1 44px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-10 hidden w-px bg-gold/40 md:block md:left-16"
      />

      <div className="relative mx-auto grid max-w-6xl items-end gap-14 px-6 pb-24 pt-20 md:grid-cols-[1.3fr_0.7fr] md:px-10 md:pb-32 md:pt-28">
        <div>
          <div className="flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-paper/60">
            <span className="h-2 w-2 rounded-full bg-sage" />
            Available for meaningful work
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-[15vw] leading-[0.88] tracking-tight sm:text-7xl md:text-8xl">
            Words that <em className="text-gold">work.</em>
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

        <p className="mt-8 max-w-xl text-balance font-body text-base leading-relaxed text-paper/75 sm:text-lg">
          A linguistics graduate who teaches English grammar and literature
          by day, and builds websites&rsquo; content, search visibility, and
          office documents by the rest of the day. Comfortable equally with
          a classroom, a keyboard, and a client brief.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full border border-gold bg-gold px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-transparent hover:text-gold"
          >
            Get in touch
          </a>
          <a
            href="#lexicon"
            className="rounded-full border border-paper/30 px-6 py-3 font-body text-sm font-medium text-paper transition-colors hover:border-paper"
          >
            See what I do
          </a>
        </div>
        </div>

        <div className="relative md:pb-2">
          <div className="absolute -right-4 -top-8 h-24 w-24 rounded-full border border-sage/50" />
          <div className="relative rounded-3xl border border-paper/15 bg-paper/10 p-6 backdrop-blur-sm">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              The short version
            </p>
            <p className="mt-5 font-display text-2xl leading-tight text-paper">
              Teacher. Writer. Digital problem-solver.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-paper/15 pt-5">
              <div>
                <p className="font-display text-2xl text-paper">3.25</p>
                <p className="mt-1 text-xs text-paper/55">CGPA / 4.00</p>
              </div>
              <div>
                <p className="font-display text-2xl text-paper">6+</p>
                <p className="mt-1 text-xs text-paper/55">years learning</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-right text-xs text-paper/45">Abbottabad, Pakistan</p>
        </div>
      </div>
    </section>
  );
}
