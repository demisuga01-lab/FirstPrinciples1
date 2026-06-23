import { useEffect, useRef } from "react";
import { useMousePosition } from "../../hooks/useMousePosition";

interface GridProps {
  opacity?: number;
  color?: string;
}

export default function Grid({
  opacity = 0.05,
  color = "#00d9ff",
}: GridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useMousePosition();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const SPACING = 60;

    function draw() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = color;
      ctx.globalAlpha = opacity;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += SPACING) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += SPACING) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Mouse-reactive highlight
      if (mouse.x > 0 && mouse.y > 0) {
        ctx.strokeStyle = "#00d9ff";
        ctx.globalAlpha = 0.15;

        const gridX = Math.floor(mouse.x / SPACING) * SPACING;
        const gridY = Math.floor(mouse.y / SPACING) * SPACING;

        ctx.strokeRect(
          gridX - SPACING,
          gridY - SPACING,
          SPACING * 3,
          SPACING * 3,
        );
      }
    }

    const rafId = requestAnimationFrame(function loop() {
      draw();
      requestAnimationFrame(loop);
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [opacity, color, mouse.x, mouse.y]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[var(--z-grid)]"
      aria-hidden
    />
  );
}
