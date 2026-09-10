"use client";

import { motion } from "framer-motion";

type Item = {
  period: string;
  title: string;
  place: string;
  detail: string;
  kind: "Work" | "Education";
};

const ITEMS: Item[] = [
  {
    period: "2026 — Present",
    title: "English Teacher",
    place: "Faran Public School, Abbottabad",
    detail:
      "Teaching grammar, literature, and communication, with a focus on lesson planning and classroom management.",
    kind: "Work",
  },
  {
    period: "2024 — Present",
    title: "SEO & Backlinking",
    place: "IT Park, Abbottabad",
    detail:
      "Hands-on SEO, backlink building, content writing, and internet research for client sites.",
    kind: "Work",
  },
  {
    period: "2022 — 2026",
    title: "BS English Linguistics",
    place: "Abbottabad University of Science & Technology",
    detail: "CGPA 3.25 / 4.00.",
    kind: "Education",
  },
  {
    period: "2021 — 2022",
    title: "Diploma, Information Technology",
    place: "Career Development Institute",
    detail: "Foundations of IT support and computer systems.",
    kind: "Education",
  },
  {
    period: "2020 — 2022",
    title: "F.Sc / A Level, Computer Science",
    place: "Govt. Postgraduate College No. 1, Abbottabad",
    detail: "",
    kind: "Education",
  },
  {
    period: "2022",
    title: "Diploma, Site Safety Supervisor (OSHA / IOSH)",
    place: "Govt. Technical & Vocational Centre, Abbottabad",
    detail: "",
    kind: "Education",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-paper-dim px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage">Chronologically</p>
        <h2 className="mt-2 font-display text-3xl leading-tight text-ink sm:text-4xl">
          Where the last six years went.
        </h2>

        <div className="relative mt-14 max-w-4xl pl-8 sm:pl-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-0 top-1 h-full w-px bg-gold-deep/50"
          />

          <ul className="space-y-12">
            {ITEMS.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-gold-deep bg-paper-dim sm:-left-10" />
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-body text-sm text-charcoal/50">{item.period}</p>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      item.kind === "Work"
                        ? "bg-sage/15 text-sage"
                        : "bg-gold/20 text-gold-deep"
                    }`}
                  >
                    {item.kind}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-0.5 font-body text-sm text-charcoal/70">
                  {item.place}
                </p>
                {item.detail && (
                  <p className="mt-1.5 max-w-md font-body text-sm leading-relaxed text-charcoal/70">
                    {item.detail}
                  </p>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
