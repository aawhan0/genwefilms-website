import React, { useRef, useEffect, CSSProperties } from "react";

export default function Waves({
  className = "",
  style = {},
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const container = containerRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = container.clientWidth;
    let height = container.clientHeight;

    canvas.width = width;
    canvas.height = height;

    const points: { x: number; y: number; vx: number; vy: number }[] = [];

    const density = 120;

    for (let i = 0; i < density; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
      });
    }

    let mouse = { x: width / 2, y: height / 2 };

    function draw(time: number) {
      ctx.clearRect(0, 0, width, height);

      ctx.globalCompositeOperation = "lighter";

      points.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const force = Math.max(0, 1 - dist / 250);

        p.vx += dx * 0.0005 * force;
        p.vy += dy * 0.0005 * force;

        p.vx *= 0.96;
        p.vy *= 0.96;

        p.x += p.vx + Math.sin(time * 0.0005 + p.y * 0.01) * 0.3;
        p.y += p.vy + Math.cos(time * 0.0005 + p.x * 0.01) * 0.3;

        // wrap
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          80
        );

        gradient.addColorStop(0, "rgba(255,255,255,0.08)");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 80, 0, Math.PI * 2);
        ctx.fill();
      });

      frameRef.current = requestAnimationFrame(draw);
    }

    function handleMouse(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function resize() {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("resize", resize);

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", resize);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={style}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}