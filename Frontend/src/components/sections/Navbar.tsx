import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { navigation, themeOptions } from "@/data/content";
import type { ThemeMode } from "@/types/content";
import { useStickyHeader } from "@/hooks/useStickyHeader";

type NavbarProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const isScrolled = useStickyHeader(20);
  const [isOpen, setIsOpen] = useState(false);
  const nextTheme = themeOptions.find((option) => option.mode !== theme)?.label ?? "Toggle";

  return (
    <header className="sticky top-0 z-50 bg-canvas/95 backdrop-blur-sm">
      <div className={`border-b px-6 py-5 transition-colors sm:px-10 lg:px-14 ${isScrolled ? "border-line" : "border-transparent"}`}>
        <div className="flex items-center justify-between gap-6">
          <a href="#hero" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
            BRWNBOY Federation LLP
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="text-[11px] uppercase tracking-[0.14em] text-muted transition hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 border border-line px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-black/[0.04]"
              aria-label={`Switch to ${nextTheme.toLowerCase()} theme`}
            >
              {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
              <span className="hidden sm:inline">{nextTheme}</span>
            </button>
            <a
              href="mailto:hello@federationllp.com"
              className="hidden border border-line px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-black/[0.04] md:inline-flex"
            >
              Engage Us
            </a>
            <button
              type="button"
              aria-label="Toggle navigation"
              className="inline-flex text-ink md:hidden"
              onClick={() => setIsOpen((current) => !current)}
            >
              <span className="text-[11px] uppercase tracking-[0.16em]">Menu</span>
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4 md:hidden">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[11px] uppercase tracking-[0.14em] text-muted"
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
