import { CTA } from "@/components/sections/CTA";
import { ClientShowcase } from "@/components/sections/ClientShowcase";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { Marquee } from "@/components/sections/Marquee";
import { Navbar } from "@/components/sections/Navbar";
import { Philosophy } from "@/components/sections/Philosophy";
import { Portfolio } from "@/components/sections/Portfolio";
import { Proof } from "@/components/sections/Proof";
import { Values } from "@/components/sections/Values";
import { siteMetadata } from "@/data/content";
import { usePageMetadata } from "@/hooks/usePageMetadata";

export default function App() {
  usePageMetadata(siteMetadata, "light");

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Proof />
        <Philosophy />
        <Portfolio />
        <ClientShowcase />
        <Leadership />
        <Values />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
