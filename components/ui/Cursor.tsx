"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);
  const trail = useRef<{ x: number; y: number }[]>([]);
  const rafRef = useRef<number>(0);
  const TRAIL_LENGTH = 8;

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      trail.current.unshift({ x: e.clientX, y: e.clientY });
      if (trail.current.length > TRAIL_LENGTH) trail.current.pop();
    };

    const anim = () => {
      // ring follows with lag
      rx.current += (mx.current - rx.current) * 0.1;
      ry.current += (my.current - ry.current) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx.current}px`;
        ringRef.current.style.top = `${ry.current}px`;
      }
      // trail dots
      trailsRef.current.forEach((el, i) => {
        const pt = trail.current[i];
        if (pt && el) {
          el.style.left = `${pt.x}px`;
          el.style.top = `${pt.y}px`;
          el.style.opacity = `${(1 - i / TRAIL_LENGTH) * 0.35}`;
          const size = Math.max(2, 8 - i);
          el.style.width = `${size}px`;
          el.style.height = `${size}px`;
        }
      });
      rafRef.current = requestAnimationFrame(anim);
    };

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(anim);

    const interactables = document.querySelectorAll("a,button,.skill-pill,.exp-card,.proj-card");
    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%,-50%) scale(1.9)";
        ringRef.current.style.borderColor = "rgba(232,121,249,0.7)";
        ringRef.current.style.boxShadow = "0 0 16px rgba(232,121,249,0.35)";
      }
    };
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%,-50%) scale(1)";
        ringRef.current.style.borderColor = "rgba(168,85,247,0.55)";
        ringRef.current.style.boxShadow = "0 0 8px rgba(168,85,247,0.2)";
      }
    };
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
        style={{
          backgroundColor: "var(--color-accent)",
          boxShadow: "0 0 8px var(--color-accent)",
        }}
      />

      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] w-9 h-9 rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          border: "1.5px solid rgba(168,85,247,0.55)",
          boxShadow: "0 0 8px rgba(168,85,247,0.2)",
          transition: "transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",
        }}
      />

      {/* Trail dots */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { if (el) trailsRef.current[i] = el; }}
          className="fixed pointer-events-none z-[9997] rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"
          style={{
            width: 8, height: 8,
            background: "var(--color-accent)",
            filter: "blur(2px)",
            opacity: 0,
          }}
        />
      ))}
    </>
  );
}
