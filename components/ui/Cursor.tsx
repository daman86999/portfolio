"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animRing = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx.current}px`;
        ringRef.current.style.top = `${ry.current}px`;
      }
      rafRef.current = requestAnimationFrame(animRing);
    };

    document.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animRing);

    const interactables = document.querySelectorAll("a,button,.skill-pill,.exp-card,.proj-card");
    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%,-50%) scale(1.8)";
        ringRef.current.style.borderColor = "rgba(232,121,249,0.6)";
      }
    };
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = "translate(-50%,-50%) scale(1)";
        ringRef.current.style.borderColor = "rgba(168,85,247,0.5)";
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
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] w-9 h-9 rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          border: "1.5px solid rgba(168,85,247,0.5)",
          transition: "transform 0.15s ease, border-color 0.15s ease",
        }}
      />
    </>
  );
}
