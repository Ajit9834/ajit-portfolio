import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { GlobalBackground } from "@/components/3d/GlobalBackground";

export default function HomePage() {
  return (
    <>
      {/* Single fixed WebGL canvas for the whole page — runs behind every section */}
      <GlobalBackground />

      <main className="relative min-h-screen bg-transparent text-[var(--foreground)]">
        <Navbar />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />

        <Footer />
      </main>
    </>
  );
}
