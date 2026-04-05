import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <label className="flex flex-col gap-2 text-sm text-muted" htmlFor={inputId}>
      <span className="font-medium uppercase tracking-[0.18em] text-ink/72">{label}</span>
      <input
        id={inputId}
        className={`rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-base text-ink outline-none transition focus:border-accent focus:bg-white/10 ${className ?? ""}`}
        {...props}
      />
      {error ? <span className="text-sm text-[#f3a37d]">{error}</span> : null}
    </label>
  );
}
