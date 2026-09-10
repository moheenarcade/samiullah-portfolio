"use client";

import { motion } from "framer-motion";

type Entry = {
  term: string;
  tag: string;
  definition: string;
};

const LANGUAGE: Entry[] = [
  {
    term: "Grammar & Linguistics",
    tag: "/ˈɡræm.ər/",
    definition:
      "Explaining structure, phonetics, and usage in a way learners actually retain, not just memorize.",
  },
  {
    term: "Lesson Planning",
    tag: "/ˈles.ən/",
    definition:
      "Building lessons around clear objectives, paced for the room, not just the syllabus.",
  },
  {
    term: "Classroom Management",
    tag: "/klæs.rʊm/",
    definition:
      "Keeping a room of learners engaged, on task, and comfortable enough to ask questions.",
  },
  {
    term: "Student Assessment",
    tag: "/əˈses.mənt/",
    definition:
      "Writing fair tests and giving feedback that a student can actually act on.",
  },
  {
    term: "Academic Writing",
    tag: "/ˌæk.əˈdem.ɪk/",
    definition:
      "Essays, reports, and reference material, structured for a reader who needs the point quickly.",
  },
];

const DIGITAL: Entry[] = [
  {
    term: "IT Support",
    tag: "/aɪˈtiː/",
    definition:
      "Setting up and troubleshooting computer hardware and software, basic networking, and walking non-technical users through fixes over a call or in person.",
  },
  {
    term: "Microsoft Office",
    tag: "/ˈɒf.ɪs/",
    definition:
      "Word for documents, Excel for organizing data, Outlook for communication — day-to-day office work without the learning curve.",
  },
  {
    term: "PowerPoint & Slides",
    tag: "/ˈpaʊ.ər.pɔɪnt/",
    definition:
      "Slide decks that explain an idea clearly, from classroom lessons to a business pitch — built to be presented, not just read.",
  },
  {
    term: "Content Writing & Blogging",
    tag: "/ˈkɒn.tent/",
    definition:
      "Articles, blog posts, and web copy written for a real reader first, search engines second.",
  },
  {
    term: "SEO & Backlink Building",
    tag: "/ˌes.iːˈəʊ/",
    definition:
      "On-page SEO, outreach for backlinks, and structuring content so it's actually findable.",
  },
  {
    term: "Digital Marketing",
    tag: "/ˈmɑː.kɪ.tɪŋ/",
    definition:
      "Campaign fundamentals from Google's Digital Marketing & E-commerce certificate, applied to real small-business goals.",
  },
];

function Column({ heading, entries, accent }: { heading: string; entries: Entry[]; accent: string }) {
  return (
    <div className="rounded-3xl border border-paper-line bg-paper/70 p-6 md:p-8">
      <h3 className="font-display text-2xl italic text-ink">{heading}</h3>
      <div className="mt-6 divide-y divide-paper-line border-t border-paper-line">
        {entries.map((entry, i) => (
          <motion.div
            key={entry.term}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="py-5"
          >
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="font-body text-base font-medium text-charcoal">
                {entry.term}
              </span>
              <span
                className="font-body text-xs"
                style={{ color: accent }}
              >
                {entry.tag}
              </span>
            </div>
            <p className="mt-1.5 max-w-md font-body text-sm leading-relaxed text-charcoal/70">
              {entry.definition}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Lexicon() {
  return (
    <section id="lexicon" className="bg-paper px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-sage">A short lexicon</p>
        <h2 className="mt-2 max-w-xl font-display text-3xl leading-tight text-ink sm:text-4xl">
          Two vocabularies, one person.
        </h2>
        <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-charcoal/70 sm:text-base">
          Trained as a linguist, working as a generalist. Here&rsquo;s what
          that means in practice, defined the way I&rsquo;d define it for a
          student.
        </p>

        <div id="work" className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          <Column heading="Language & Teaching" entries={LANGUAGE} accent="#5b7a64" />
          <Column heading="Digital & Office" entries={DIGITAL} accent="#a06e21" />
        </div>
      </div>
    </section>
  );
}
