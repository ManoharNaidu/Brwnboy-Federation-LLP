import { motion } from "framer-motion";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "dark" | "ghost";
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

function getClasses(variant: "dark" | "ghost", className?: string) {
  const shared =
    "inline-flex items-center justify-center rounded-none border px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors";
  const variants = {
    dark: "border-transparent bg-panel text-canvas hover:bg-panelSoft",
    ghost: "border-line bg-transparent text-ink hover:bg-black/[0.04]",
  };

  return `${shared} ${variants[variant]} ${className ?? ""}`.trim();
}

export function Button(props: ButtonProps | LinkProps) {
  if ("href" in props) {
    const { children, variant = "dark", className, href, ...rest } = props;
    return (
      <motion.div whileHover={{ y: -1 }} className="inline-flex">
        <a href={href} className={getClasses(variant, className)} {...rest}>
          {children}
        </a>
      </motion.div>
    );
  }

  const { children, variant = "dark", className, ...rest } = props;

  return (
    <motion.div whileHover={{ y: -1 }} className="inline-flex">
      <button className={getClasses(variant, className)} {...rest}>
        {children}
      </button>
    </motion.div>
  );
}
