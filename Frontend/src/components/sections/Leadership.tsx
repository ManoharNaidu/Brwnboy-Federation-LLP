import { motion } from "framer-motion";
import { leadershipIntro, leadershipItems } from "@/data/content";
import { fadeInUp } from "@/hooks/useSectionReveal";

export function Leadership() {
  return (
    <section id="leadership" className="border-y border-line bg-surfaceAlt px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
      <motion.p {...fadeInUp} className="eyebrow text-muted">
        {leadershipIntro.eyebrow}
      </motion.p>
      <motion.div {...fadeInUp} transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }} className="mt-5">
        {leadershipIntro.title.map((line) => (
          <div key={line} className="section-title">
            {line}
          </div>
        ))}
      </motion.div>
      <motion.p
        {...fadeInUp}
        transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
        className="mt-6 max-w-[760px] text-[13px] leading-7 text-muted"
      >
        {leadershipIntro.description}
      </motion.p>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {leadershipItems.map((item, index) => (
          <motion.article
            key={item.name}
            {...fadeInUp}
            transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
            className="theme-surface rounded-xl border px-6 py-6"
          >
            <p className="eyebrow text-accent">{item.role}</p>
            <h3 className="mt-3 text-[20px] font-semibold text-ink">{item.name}</h3>
            <p className="mt-2 text-[13px] font-medium text-ink">{item.focus}</p>
            <p className="mt-4 text-[12px] leading-6 text-muted">{item.bio}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
