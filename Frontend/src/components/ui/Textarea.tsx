import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export function Textarea({ label, error, className, id, ...props }: TextareaProps) {
  const inputId = id ?? props.name;

  return (
    <label className="flex flex-col gap-2 text-sm text-muted" htmlFor={inputId}>
      <span className="font-medium uppercase tracking-[0.18em] text-ink/72">{label}</span>
      <textarea
        id={inputId}
        className={`min-h-32 rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-3 text-base text-ink outline-none transition focus:border-accent focus:bg-white/10 ${className ?? ""}`}
        {...props}
      />
      {error ? <span className="text-sm text-[#f3a37d]">{error}</span> : null}
    </label>
  );
}
