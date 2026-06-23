"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";

export default function CursorTracker() {
  const mouse = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);

  const springX = useSpring(0, { stiffness: 150, damping: 15 });
  const springY = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    springX.set(mouse.x);
    springY.set(mouse.y);
  }, [mouse.x, mouse.y, springX, springY]);

  useEffect(() => {
    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);

    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);
    setIsVisible(true);

    return () => {
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Hide on touch devices
  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) setIsVisible(false);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[var(--z-cursor)] h-6 w-6 -translate-x-1/2 -translate-y-1/2"
      style={{ left: springX, top: springY }}
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="h-full w-full rounded-full border border-accent-cyan" />
    </motion.div>
  );
}
