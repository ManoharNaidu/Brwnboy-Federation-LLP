import { motion } from "framer-motion";
import { portfolioIntro, portfolioItems } from "@/data/content";
import { fadeInUp } from "@/hooks/useSectionReveal";

export function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <motion.p {...fadeInUp} className="eyebrow text-muted">
            {portfolioIntro.eyebrow}
          </motion.p>
          <motion.div {...fadeInUp} transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }} className="mt-5">
            {portfolioIntro.title.map((line) => (
              <div key={line} className="section-title">
                {line}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.a
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          href={portfolioIntro.cta.href}
          className="border-b border-ink pb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink"
        >
          {portfolioIntro.cta.label} →
        </motion.a>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <motion.article
            key={item.code}
            {...fadeInUp}
            transition={{ duration: 0.7, delay: index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -4, boxShadow: "0 18px 40px rgba(18,16,14,0.06)" }}
            className="theme-surface border"
          >
            <div className="grid h-44 place-items-center border-b border-[var(--color-card-line)]" style={{ backgroundColor: item.tone }}>
              <span className="font-display text-[7rem] leading-none text-black/10">{item.initial}</span>
            </div>
            <div className="px-5 py-4">
              <p className="eyebrow text-muted">{item.category}</p>
              <h3 className="mt-2 text-[16px] font-semibold text-ink">{item.name}</h3>
              <p className="mt-4 text-[12px] leading-6 text-muted">{item.description}</p>
              <div className="mt-8 flex items-center justify-between border-t border-[var(--color-card-line)] pt-3 text-[11px] uppercase tracking-[0.18em] text-ink">
                <span>Explore →</span>
                <span>{item.code}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
