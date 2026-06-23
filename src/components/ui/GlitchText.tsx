import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

export default function GlitchText({
  text,
  className = "",
  as: Tag = "h1",
}: GlitchTextProps) {
  return (
    <div className="relative inline-block">
      {/* Main text */}
      <Tag className={`relative z-10 ${className}`}>{text}</Tag>

      {/* Glitch layers */}
      <motion.span
        className="pointer-events-none absolute inset-0 z-0 text-glitch-red opacity-70"
        aria-hidden
        animate={{
          x: [0, 2, -2, 1, -1, 0],
          opacity: [0, 0.7, 0, 0.5, 0, 0],
        }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4 }}
      >
        <Tag className={className}>{text}</Tag>
      </motion.span>

      <motion.span
        className="pointer-events-none absolute inset-0 z-0 text-accent-cyan opacity-70"
        aria-hidden
        animate={{
          x: [0, -2, 3, -1, 2, 0],
          opacity: [0, 0, 0.6, 0, 0.4, 0],
        }}
        transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 4 }}
      >
        <Tag className={className}>{text}</Tag>
      </motion.span>
    </div>
  );
}
