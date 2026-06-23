import { useEffect, useRef } from "react";

/**
 * Monitors FPS in development mode.
 * Logs a warning if frames drop below 30fps for sustained periods.
 */
export function usePerformanceMonitor(): void {
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    if (import.meta.env.PROD) return;

    let rafId: number;

    function tick() {
      frameCount.current++;
      const now = performance.now();
      const elapsed = now - lastTime.current;

      if (elapsed >= 1000) {
        const fps = Math.round(
          (frameCount.current * 1000) / elapsed,
        );

        if (fps < 30) {
          console.warn(
            `[Performance] Low FPS detected: ${fps}. ` +
              "Consider reducing animation complexity.",
          );
        }

        frameCount.current = 0;
        lastTime.current = now;
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);
}
