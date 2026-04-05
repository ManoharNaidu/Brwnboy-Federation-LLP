import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, boxShadow: "0 28px 60px rgba(9, 17, 29, 0.14)" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-card backdrop-blur-sm ${className ?? ""}`}
    >
      {children}
    </motion.article>
  );
}
