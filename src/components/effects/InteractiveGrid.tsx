import { useEffect, useRef } from "react";
import { useMousePosition } from "../../hooks/useMousePosition";

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useMousePosition();

  useEffect(() => {
    const cvs = canvasRef.current!;
    if (!cvs) return;

    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    const SPACING = 80;
    const RADIUS = 150;

    let animationId: number;

    function handleResize() {
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    function draw() {
      if (!ctx) return;

      ctx.clearRect(0, 0, cvs.width, cvs.height);

      const cols = Math.ceil(cvs.width / SPACING) + 1;
      const rows = Math.ceil(cvs.height / SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let alpha = 0.08;
          let size = 1;

          if (dist < RADIUS) {
            const intensity = 1 - dist / RADIUS;
            alpha = 0.08 + intensity * 0.3;
            size = 1 + intensity * 2;
          }

          ctx.fillStyle = `rgba(0, 217, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < RADIUS && i < cols - 1 && j < rows - 1) {
            const intensity = 1 - dist / RADIUS;
            ctx.strokeStyle = `rgba(0, 217, 255, ${intensity * 0.15})`;
            ctx.lineWidth = 0.5;

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + SPACING, y);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + SPACING);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouse.x, mouse.y]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[var(--z-grid)]"
      aria-hidden
    />
  );
}
