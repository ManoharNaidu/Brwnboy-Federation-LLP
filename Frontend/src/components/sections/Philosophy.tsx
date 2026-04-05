import { motion } from "framer-motion";
import { philosophyIntro, philosophyItems } from "@/data/content";
import { fadeInUp } from "@/hooks/useSectionReveal";

export function Philosophy() {
  return (
    <section id="philosophy" className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
      <motion.p {...fadeInUp} className="eyebrow text-muted">
        {philosophyIntro.eyebrow}
      </motion.p>

      <motion.div {...fadeInUp} transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }} className="mt-5">
        {philosophyIntro.title.map((line) => (
          <div key={line} className="section-title">
            {line}
          </div>
        ))}
      </motion.div>

      <div className="mt-10 grid border-y border-line md:grid-cols-3 md:divide-x md:divide-line">
        {philosophyItems.map((item, index) => (
          <motion.article
            key={item.number}
            {...fadeInUp}
            transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
            className="border-b border-line px-6 py-6 last:border-b-0 md:border-b-0 md:px-8 md:py-8"
          >
            <div className="font-display text-6xl leading-none">{item.number}</div>
            <p className="eyebrow mt-3 text-muted">{item.label}</p>
            <h3 className="mt-3 text-[15px] font-semibold text-ink">{item.title}</h3>
            <p className="mt-10 text-[12px] leading-6 text-muted">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
