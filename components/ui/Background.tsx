"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

interface DataStream {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  alpha: number;
  length: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── resize ──────────────────────────────────────────────
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── mouse ───────────────────────────────────────────────
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    // ── particles ───────────────────────────────────────────
    const PARTICLE_COUNT = 80;
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    // ── data streams ────────────────────────────────────────
    const CHARS = "01アイウエオカキクケコサシスセソタチツテト∑∆Ω∞≈≠±";
    const STREAM_COUNT = 18;
    const streams: DataStream[] = Array.from({ length: STREAM_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: Math.random() * 1.2 + 0.4,
      chars: Array.from({ length: Math.floor(Math.random() * 8 + 4) }, () =>
        CHARS[Math.floor(Math.random() * CHARS.length)]
      ),
      alpha: Math.random() * 0.12 + 0.04,
      length: Math.floor(Math.random() * 8 + 4),
    }));

    // ── draw loop ───────────────────────────────────────────
    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // --- perspective grid ---
      const horizon = H * 0.55;
      const vanishX = W / 2;
      const gridLines = 18;
      const gridCols = 16;

      ctx.save();
      // Horizontal lines converging to horizon
      for (let i = 0; i <= gridLines; i++) {
        const t = i / gridLines;
        const y = horizon + (H - horizon) * (t * t);
        const spread = (W * 0.8) * (1 - Math.pow(1 - t, 1.4));
        const alpha = 0.04 + t * 0.10;
        ctx.beginPath();
        ctx.moveTo(vanishX - spread / 2, y);
        ctx.lineTo(vanishX + spread / 2, y);
        ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
      // Vertical lines radiating from vanishing point
      for (let j = 0; j <= gridCols; j++) {
        const t = j / gridCols; // 0..1
        const xBottom = W * 0.1 + (W * 0.8) * t;
        const alpha = 0.04 + Math.abs(t - 0.5) * 0.06;
        ctx.beginPath();
        ctx.moveTo(vanishX, horizon);
        ctx.lineTo(xBottom, H);
        ctx.strokeStyle = `rgba(168,85,247,${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      ctx.restore();

      // --- data streams ---
      ctx.save();
      ctx.font = "10px 'JetBrains Mono', monospace";
      for (const s of streams) {
        s.y += s.speed;
        if (s.y > H + 80) {
          s.y = -80;
          s.x = Math.random() * W;
          s.chars = s.chars.map(() => CHARS[Math.floor(Math.random() * CHARS.length)]);
        }
        for (let ci = 0; ci < s.chars.length; ci++) {
          const fade = 1 - ci / s.chars.length;
          const glowAlpha = s.alpha * fade;
          ctx.fillStyle = `rgba(168,85,247,${glowAlpha})`;
          // randomly swap chars for flicker
          if (Math.random() < 0.01) {
            s.chars[ci] = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          ctx.fillText(s.chars[ci], s.x, s.y - ci * 14);
        }
      }
      ctx.restore();

      // --- particles ---
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      }

      // connections
      const MAX_DIST = 140;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.alpha})`;
        ctx.fill();
      }

      // --- mouse glow ---
      const mx = mouse.current.x;
      const my = mouse.current.y;
      if (mx > 0) {
        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 220);
        grd.addColorStop(0, "rgba(124,58,237,0.07)");
        grd.addColorStop(0.5, "rgba(232,121,249,0.03)");
        grd.addColorStop(1, "rgba(124,58,237,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(mx, my, 220, 0, Math.PI * 2);
        ctx.fill();

        // connect nearby particles to cursor
        for (const p of particles) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(232,121,249,${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
