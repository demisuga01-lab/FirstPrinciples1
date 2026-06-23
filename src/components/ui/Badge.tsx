import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "skill";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const baseStyles =
    "inline-block font-heading text-[10px] tracking-mono px-2 py-1 uppercase";

  const variants = {
    default: "border border-border text-text-secondary",
    skill:
      "border border-accent-lime/30 text-accent-lime hover:bg-accent-lime/10 transition-colors",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]}`}>{children}</span>
  );
}
