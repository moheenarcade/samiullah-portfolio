import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Lexicon from "@/components/Lexicon";
import Timeline from "@/components/Timeline";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

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
    </>
  );
}
