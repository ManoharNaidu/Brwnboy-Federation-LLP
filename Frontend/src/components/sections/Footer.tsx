import { footerContent } from "@/data/content";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-line bg-canvas px-6 py-14 sm:px-10 lg:px-14">
      <div className="grid gap-10 lg:grid-cols-[300px_repeat(4,minmax(0,1fr))]">
        <div>
          <p className="text-[1.1rem] font-semibold uppercase tracking-[0.12em] text-ink">{footerContent.brand}</p>
          <p className="mt-4 max-w-[300px] text-[12px] leading-6 text-muted">{footerContent.description}</p>
        </div>

        {footerContent.columns.map((column) => (
          <div key={column.title}>
            <p className="eyebrow text-muted">{column.title}</p>
            <div className="mt-4 space-y-3 text-[13px] text-ink/88">
              {column.links.map((link) => (
                <a key={link.label} href={link.href} className="block transition hover:text-ink">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-4 border-t border-line pt-5 text-[11px] uppercase tracking-[0.14em] text-muted md:flex-row md:items-center md:justify-between">
        <p>{footerContent.legal}</p>
        <div className="flex flex-wrap gap-4 md:justify-end">
          {footerContent.policies.map((policy) => (
            <a key={policy.label} href={policy.href} className="transition hover:text-ink">
              {policy.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
