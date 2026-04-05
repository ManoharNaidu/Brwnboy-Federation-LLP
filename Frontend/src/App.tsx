import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Navbar } from "@/components/sections/Navbar";
import { Philosophy } from "@/components/sections/Philosophy";
import { Portfolio } from "@/components/sections/Portfolio";
import { Values } from "@/components/sections/Values";
import { siteMetadata } from "@/data/content";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import { useThemeMode } from "@/hooks/useThemeMode";

export default function App() {
  const { theme, toggleTheme } = useThemeMode();
  usePageMetadata(siteMetadata, theme);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <Portfolio />
        <Values />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
