import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ctaContent } from "@/data/content";
import { fadeInUp } from "@/hooks/useSectionReveal";

export function CTA() {
  return (
    <section className="bg-panel px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-[920px] text-center">
        <motion.p {...fadeInUp} className="theme-panel-muted eyebrow">
          {ctaContent.eyebrow}
        </motion.p>
        <motion.div {...fadeInUp} transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }} className="mt-5">
          {ctaContent.title.map((line) => (
            <div key={line} className="theme-panel-text font-display text-[3.1rem] leading-[0.9] sm:text-[4.3rem]">
              {line}
            </div>
          ))}
        </motion.div>
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
          className="theme-panel-muted mx-auto mt-8 max-w-[760px] text-[12px] leading-6"
        >
          {ctaContent.description}
        </motion.p>
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href={ctaContent.primaryCta.href} className="min-w-[220px] !bg-[var(--color-canvas)] !text-[var(--color-ink)] hover:opacity-90">
            {ctaContent.primaryCta.label} →
          </Button>
          <Button href={ctaContent.secondaryCta.href} variant="ghost" className="min-w-[220px] !border-[var(--color-panel-line)] !text-[var(--color-panel-ink)] hover:opacity-90">
            {ctaContent.secondaryCta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
