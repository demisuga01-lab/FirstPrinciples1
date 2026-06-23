import { motion } from "framer-motion";

interface MorphingShapeProps {
  className?: string;
}

const PATHS = [
  "M0 0 L100 0 L100 100 L0 100 Z",
  "M50 0 L100 50 L50 100 L0 50 Z",
  "M0 0 Q50 -50 100 0 Q150 50 100 100 Q50 150 0 100 Q-50 50 0 0 Z",
  "M50 0 C70 0 100 30 100 50 C100 70 70 100 50 100 C30 100 0 70 0 50 C0 30 30 0 50 0 Z",
];

export default function MorphingShape({ className = "" }: MorphingShapeProps) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <svg width="200" height="200" viewBox="0 0 100 100">
        <motion.path
          d={PATHS[0]}
          fill="none"
          stroke="#00d9ff"
          strokeWidth="1"
          animate={{ d: PATHS }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}
