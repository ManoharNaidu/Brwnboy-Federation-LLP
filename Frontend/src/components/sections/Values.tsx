import { motion } from "framer-motion";
import { valueItems, valuesIntro } from "@/data/content";
import { fadeInUp } from "@/hooks/useSectionReveal";

export function Values() {
  return (
    <section id="values" className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_654px] lg:items-start">
        <div>
          <motion.p {...fadeInUp} className="eyebrow text-muted">
            {valuesIntro.eyebrow}
          </motion.p>
          <motion.div {...fadeInUp} transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }} className="mt-5">
            {valuesIntro.title.map((line) => (
              <div key={line} className="section-title">
                {line}
              </div>
            ))}
          </motion.div>

          <div className="mt-12 border-y border-line">
            {valueItems.map((item, index) => (
              <motion.article
                key={item.numeral}
                {...fadeInUp}
                transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
                className="grid gap-5 border-b border-line py-5 last:border-b-0 md:grid-cols-[40px_1fr]"
              >
                <div className="font-display text-[1.1rem] leading-none text-ink">{item.numeral}</div>
                <div>
                  <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-[12px] leading-6 text-muted">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.aside
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
          className="bg-panel px-8 py-10 lg:min-h-[724px] lg:px-14 lg:py-14"
        >
          <div className="theme-panel-line h-14 w-px" />
          <p className="theme-panel-text mt-8 max-w-[550px] font-display text-[2.55rem] italic leading-[0.95] sm:text-[3rem]">
            “{valuesIntro.quote}”
          </p>
          <p className="theme-panel-muted mt-44 text-[11px] uppercase tracking-[0.18em]">
            — {valuesIntro.quoteAttribution}
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
