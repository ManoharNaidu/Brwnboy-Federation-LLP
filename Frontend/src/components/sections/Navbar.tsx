import { useState } from "react";
import { navigation } from "@/data/content";
import { useStickyHeader } from "@/hooks/useStickyHeader";

export function Navbar() {
  const isScrolled = useStickyHeader(20);
  const [isOpen, setIsOpen] = useState(false);

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
            <a
              href="mailto:hello@federationllp.com?subject=Group%20Enquiry"
              className="hidden rounded-md border border-line px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-accentSoft md:inline-flex"
            >
              Contact Group
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
