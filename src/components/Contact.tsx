"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink px-6 py-24 text-paper md:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="font-body text-sm text-gold">Say hello</p>
        <h2 className="mt-2 max-w-md font-display text-3xl leading-tight sm:text-4xl">
          Looking for a teacher, a writer, or someone to fix the printer.
          I answer to all three.
        </h2>

        <div className="mt-12 grid gap-8 border-t border-paper/15 pt-10 sm:grid-cols-3">
          <div>
            <p className="font-body text-xs text-paper/50">Email</p>
            <a
              href="mailto:samikhanjadoon81@gmail.com"
              className="mt-1 block break-words font-body text-sm text-paper hover:text-gold"
            >
              samikhanjadoon81@gmail.com
            </a>
          </div>
          <div>
            <p className="font-body text-xs text-paper/50">Phone</p>
            <a
              href="tel:+923165765935"
              className="mt-1 block font-body text-sm text-paper hover:text-gold"
            >
              +92 316 5765935
            </a>
          </div>
          <div>
            <p className="font-body text-xs text-paper/50">Location</p>
            <p className="mt-1 font-body text-sm text-paper">
              Nawanshehr, Abbottabad, Pakistan
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {["English", "Urdu", "Hindko"].map((lang) => (
            <span
              key={lang}
              className="border border-paper/20 px-3 py-1 font-body text-xs text-paper/70"
            >
              {lang}
            </span>
          ))}
        </div>

        <p className="mt-16 font-body text-xs text-paper/40">
          References available on request. © {new Date().getFullYear()}{" "}
          Samiullah Khan.
        </p>
      </div>
    </section>
  );
}
