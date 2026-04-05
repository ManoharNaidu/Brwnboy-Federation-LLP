import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/data/content";
import { fadeInUp } from "@/hooks/useSectionReveal";

export function Hero() {
  return (
    <section id="hero" className="border-b border-line">
      <div className="grid min-h-[820px] lg:grid-cols-2">
        <div className="border-b border-line px-6 py-14 sm:px-10 lg:border-b-0 lg:border-r lg:px-14 lg:py-24">
          <motion.p {...fadeInUp} className="eyebrow text-muted">
            {heroContent.eyebrow}
          </motion.p>

          <motion.div {...fadeInUp} transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }} className="mt-8">
            {heroContent.titleLines.map((line) => (
              <div key={line} className="display-line">
                {line}
              </div>
            ))}
          </motion.div>

          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
            className="mt-10 max-w-[620px] text-[14px] leading-7 text-muted"
          >
            {heroContent.description}
          </motion.p>

          <motion.ul
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-8 space-y-3 text-[13px] leading-6 text-ink"
          >
            {heroContent.subpoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href={heroContent.primaryCta.href} className="min-w-[220px] !bg-accent !text-[var(--accent-text)] hover:!bg-[var(--accent-hover)]">
              {heroContent.primaryCta.label}
            </Button>
            <Button href={heroContent.secondaryCta.href} variant="ghost" className="min-w-[220px]">
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <div className="bg-panel px-6 py-14 sm:px-10 lg:px-14 lg:py-24">
          <div className="space-y-16">
            {heroContent.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                {...fadeInUp}
                transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
                className="flex gap-6"
              >
                <div className="theme-panel-line mt-2 h-[78px] w-px" />
                <div>
                  <div className="theme-panel-text font-display text-[5.25rem] leading-none">{metric.value}</div>
                  <div className="theme-panel-muted eyebrow mt-1">{metric.label}</div>
                </div>
              </motion.div>
            ))}

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
              className="border-t pt-6 theme-panel-line"
            >
              <p className="theme-panel-muted max-w-[560px] text-[13px] italic leading-6">
                “{heroContent.quote}”
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
