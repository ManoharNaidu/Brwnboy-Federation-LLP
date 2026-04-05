import { marqueeItems } from "@/data/content";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="overflow-hidden border-b border-black/10 bg-panel py-4 text-canvas">
      <div className="whitespace-nowrap text-[10px] uppercase tracking-[0.22em] text-white/72">
        <div className="inline-flex min-w-full animate-[marquee_28s_linear_infinite] gap-6 px-6 sm:px-10 lg:px-14">
          {items.map((item, index) => (
            <span key={`${item}-${index}`}>{item} ◆</span>
          ))}
        </div>
      </div>
    </section>
  );
}
