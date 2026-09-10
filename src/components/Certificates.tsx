"use client";

import { motion } from "framer-motion";

const CERTS = [
  {
    title: "Foundations of Digital Marketing & E-commerce",
    issuer: "Google Career Certificates, Coursera",
    date: "Sep 2026",
  },
  {
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google Career Certificates, Coursera",
    date: "Sep 2026",
  },
  {
    title: "Designing Facebook & Instagram Stories with Canva",
    issuer: "Coursera Project Certificate",
    date: "Sep 2026",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="bg-paper px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage">On paper</p>
        <h2 className="mt-2 max-w-lg font-display text-3xl leading-tight text-ink sm:text-4xl">
          A few certificates worth mentioning.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, rotate: i % 2 === 0 ? -2 : 2, y: 10 }}
              whileInView={{ opacity: 1, rotate: 0, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-paper-line bg-paper-dim p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-gold/60"
            >
              <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 font-body text-xs font-semibold text-gold-deep">✓</span>
              <p className="font-display text-lg leading-snug text-ink">
                {cert.title}
              </p>
              <p className="mt-3 font-body text-sm text-charcoal/70">
                {cert.issuer}
              </p>
              <p className="mt-1 font-body text-sm text-charcoal/50">
                {cert.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
