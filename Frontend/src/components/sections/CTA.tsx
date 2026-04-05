import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { audienceCtas, ctaContent } from "@/data/content";
import { fadeInUp } from "@/hooks/useSectionReveal";

export function CTA() {
  return (
    <section id="cta" className="bg-panel px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-center">
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
            <Button href={ctaContent.primaryCta.href} className="min-w-[240px] !bg-[var(--surface-1)] !text-[var(--text-primary)] hover:opacity-90">
              {ctaContent.primaryCta.label}
            </Button>
            <Button href={ctaContent.secondaryCta.href} variant="ghost" className="min-w-[240px] !border-[var(--color-panel-line)] !text-[var(--color-panel-ink)] hover:opacity-90">
              {ctaContent.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {audienceCtas.map((item, index) => (
            <motion.a
              key={item.label}
              {...fadeInUp}
              transition={{ duration: 0.7, delay: 0.28 + index * 0.06, ease: "easeOut" }}
              href={item.href}
              className="rounded-xl border px-5 py-5 border-[var(--color-panel-line)] text-left"
            >
              <p className="theme-panel-text text-[14px] font-semibold">{item.label}</p>
              <p className="theme-panel-muted mt-3 text-[12px] leading-6">{item.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
