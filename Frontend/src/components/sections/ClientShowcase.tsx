import { motion } from "framer-motion";
import { clientColumns, clientShowcaseIntro } from "@/data/content";
import { fadeInUp } from "@/hooks/useSectionReveal";

function ClientColumnTrack({
  title,
  items,
  direction = "up",
}: {
  title: string;
  items: typeof clientColumns[number]["items"];
  direction?: "up" | "down";
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="theme-surface rounded-xl border p-4">
      <p className="eyebrow text-accent">{title}</p>
      <div className="relative mt-4 h-[360px] overflow-hidden">
        <motion.div
          animate={{ y: direction === "up" ? [0, -320] : [-320, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          className="space-y-4"
        >
          {duplicated.map((item, index) => (
            <article key={`${item.name}-${index}`} className="rounded-lg border border-line bg-canvas px-4 py-4">
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-accentSoft p-2 text-accent">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-ink">{item.name}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{item.category}</p>
                </div>
              </div>
              <p className="mt-3 text-[12px] leading-6 text-muted">{item.detail}</p>
            </article>
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[var(--surface-1)] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[var(--surface-1)] to-transparent" />
      </div>
    </div>
  );
}

export function ClientShowcase() {
  return (
    <section id="clients" className="border-y border-line bg-surfaceAlt px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
      <motion.p {...fadeInUp} className="eyebrow text-muted">
        {clientShowcaseIntro.eyebrow}
      </motion.p>
      <motion.div {...fadeInUp} transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }} className="mt-5">
        {clientShowcaseIntro.title.map((line) => (
          <div key={line} className="section-title">
            {line}
          </div>
        ))}
      </motion.div>
      <motion.p
        {...fadeInUp}
        transition={{ duration: 0.7, delay: 0.16, ease: "easeOut" }}
        className="mt-6 max-w-[780px] text-[13px] leading-7 text-muted"
      >
        {clientShowcaseIntro.description}
      </motion.p>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {clientColumns.map((column, index) => (
          <motion.div
            key={column.title}
            {...fadeInUp}
            transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
          >
            <ClientColumnTrack
              title={column.title}
              items={column.items}
              direction={index % 2 === 0 ? "up" : "down"}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
