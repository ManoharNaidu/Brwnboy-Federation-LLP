import { motion } from "framer-motion";
import { proofIntro, proofItems } from "@/data/content";
import { fadeInUp } from "@/hooks/useSectionReveal";

export function Proof() {
  return (
    <section className="border-b border-line bg-surfaceAlt px-6 py-16 sm:px-10 lg:px-14 lg:py-18">
      <motion.p {...fadeInUp} className="eyebrow text-muted">
        {proofIntro.eyebrow}
      </motion.p>
      <motion.div {...fadeInUp} transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }} className="mt-5">
        {proofIntro.title.map((line) => (
          <div key={line} className="section-title">
            {line}
          </div>
        ))}
      </motion.div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {proofItems.map((item, index) => (
          <motion.article
            key={item.label}
            {...fadeInUp}
            transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
            className="theme-surface rounded-xl border px-6 py-6"
          >
            <div className="font-display text-5xl leading-none text-accent">{item.value}</div>
            <h3 className="mt-3 text-[15px] font-semibold text-ink">{item.label}</h3>
            <p className="mt-3 text-[12px] leading-6 text-muted">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
