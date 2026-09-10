import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Lexicon from "@/components/Lexicon";
import Timeline from "@/components/Timeline";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Lexicon />
        <Timeline />
        <Certificates />
        <Contact />
      </main>
      <a
        href="https://wa.me/923165765935"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Samiullah on WhatsApp"
        title="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-body text-sm font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-transform duration-200 hover:-translate-y-1 hover:bg-[#1ebe5d] focus-visible:outline-white sm:bottom-8 sm:right-8"
      >
        <MessageCircle size={20} strokeWidth={2.25} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
