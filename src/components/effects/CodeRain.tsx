import { useEffect, useRef } from "react";

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01";

interface Drop {
  x: number;
  y: number;
  speed: number;
  length: number;
  chars: string[];
}

function getRandomChar(): string {
  return CHARS[Math.floor(Math.random() * CHARS.length)] ?? "0";
}

export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cvs = canvasRef.current!;
    if (!cvs) return;

    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    const drops: Drop[] = [];
    const FONT_SIZE = 14;

    function handleResize() {
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    const columns = Math.floor(cvs.width / FONT_SIZE);

    for (let i = 0; i < columns; i++) {
      drops.push({
        x: i * FONT_SIZE,
        y: Math.random() * cvs.height,
        speed: Math.random() * 4 + 2,
        length: Math.floor(Math.random() * 15 + 5),
        chars: Array.from({ length: 20 }, getRandomChar),
      });
    }

    function animate() {
      if (!ctx) return;

      ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
      ctx.fillRect(0, 0, cvs.width, cvs.height);

      ctx.font = `${FONT_SIZE}px "Roboto Mono", monospace`;

      for (const drop of drops) {
        const alpha = Math.random() * 0.5 + 0.3;

        for (let i = 0; i < drop.length; i++) {
          const char =
            drop.chars[Math.floor(Math.random() * drop.chars.length)] ?? "0";
          const y = drop.y - i * FONT_SIZE;

          if (y < 0) continue;

          if (i === 0) {
            ctx.fillStyle = `rgba(0, 217, 255, ${alpha + 0.3})`;
          } else {
            ctx.fillStyle = `rgba(0, 217, 255, ${alpha * (1 - i / drop.length)})`;
          }

          ctx.fillText(char, drop.x, y);
        }

        drop.y += drop.speed;

        if (drop.y - drop.length * FONT_SIZE > cvs.height) {
          drop.y = 0;
          drop.speed = Math.random() * 4 + 2;
        }
      }

      requestAnimationFrame(animate);
    }

    const rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[var(--z-grid)] opacity-30"
      aria-hidden
    />
  );
}
