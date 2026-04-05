import { motion } from "framer-motion";
import { fadeInUp } from "@/hooks/useSectionReveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      {...fadeInUp}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-muted md:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
