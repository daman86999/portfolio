"use client";

import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));

    // counter animation
    const counters = document.querySelectorAll<HTMLElement>("[data-target]");
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCounter(e.target as HTMLElement);
            cio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => cio.observe(c));

    return () => {
      io.disconnect();
      cio.disconnect();
    };
  }, []);

  return null;
}

function animateCounter(el: HTMLElement) {
  const target = Number(el.dataset.target);
  const suffix = el.dataset.suffix ?? "";
  const dur = 1800;
  const start = performance.now();
  const step = (now: number) => {
    const p = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
