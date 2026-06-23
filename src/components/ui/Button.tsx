import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 font-heading text-sm tracking-mono px-6 py-3 transition-all duration-300 relative overflow-hidden";

  const variants = {
    primary:
      "border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-brutal-black",
    secondary:
      "border border-border text-text-primary hover:border-accent-cyan hover:text-accent-cyan",
    ghost: "text-text-secondary hover:text-accent-cyan",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 bg-accent-cyan/10"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
