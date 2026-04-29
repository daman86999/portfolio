"use client";

import Link from "next/link";
import { RESUME_DOWNLOAD_PATH } from "@/lib/resume-download-path";
import type { Hero as HeroType } from "@/types/portfolio";
import { GithubIcon, LinkedinIcon, DownloadIcon } from "@/components/ui/Icons";

interface HeroProps {
  hero: HeroType;
}

function getSecondaryIcon(icon: string) {
  switch (icon) {
    case "github": return <GithubIcon size={15} />;
    case "linkedin": return <LinkedinIcon size={15} />;
    default: return null;
  }
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-[5%] pt-32 pb-16 overflow-hidden"
    >
      {/* ── Background Orbs ─────────────────────────────── */}
      {/* Primary large purple orb – top right */}
      <div
        className="pointer-events-none absolute rounded-full animate-float"
        style={{
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(124,58,237,0.28) 0%, rgba(124,58,237,0.05) 70%)",
          filter: "blur(70px)",
          top: -150, right: -120,
        }}
      />
      {/* Pink accent orb – bottom left */}
      <div
        className="pointer-events-none absolute rounded-full animate-float-2"
        style={{
          width: 420, height: 420,
          background: "radial-gradient(circle, rgba(232,121,249,0.18) 0%, rgba(232,121,249,0.02) 70%)",
          filter: "blur(80px)",
          bottom: -40, left: -80,
        }}
      />
      {/* Cyan orb – mid left */}
      <div
        className="pointer-events-none absolute rounded-full animate-float-4"
        style={{
          width: 260, height: 260,
          background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0.01) 70%)",
          filter: "blur(60px)",
          top: "30%", left: "10%",
        }}
      />
      {/* Purple mid orb */}
      <div
        className="pointer-events-none absolute rounded-full animate-float-3"
        style={{
          width: 220, height: 220,
          background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)",
          filter: "blur(50px)",
          top: "45%", left: "42%",
        }}
      />
      {/* Extra accent orb – upper left */}
      <div
        className="pointer-events-none absolute rounded-full animate-float-5"
        style={{
          width: 180, height: 180,
          background: "radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)",
          filter: "blur(50px)",
          top: "15%", left: "20%",
        }}
      />



      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-2xl">

        {/* Badge */}
        {hero.openForoppurtunity ? (
          <div
            className="animate-fade-up-d1 inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full font-mono text-xs animate-neon-pulse"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.45)",
              color: "var(--color-purple-light)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
              style={{ background: "#22c55e" }}
            />
            Available for opportunities
          </div>
        ) : null}

        {/* Name – with glitch effect */}
        <h1
          className="animate-fade-up-d2 font-display font-black leading-[1.02] tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
        >
          {hero.name}
          <br />
          <span
            className="gradient-text-shimmer glitch-wrapper"
            data-text={hero.nameAccent}
          >
            {hero.nameAccent}
          </span>
          <span
            className="inline-block w-0.5 ml-1 animate-blink"
            style={{
              height: "0.85em",
              background: "var(--color-accent)",
              verticalAlign: "middle",
              boxShadow: "0 0 8px var(--color-accent)",
            }}
          />
        </h1>

        {/* Description */}
        <p
          className="animate-fade-up-d3 text-base leading-relaxed max-w-lg mb-10"
          style={{ color: "var(--color-muted)" }}
        >
          {hero.description}
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-d4 flex flex-wrap gap-3">
          {/* Primary */}
          <Link
            href={hero.cta.primary.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, var(--color-purple), var(--color-accent))",
              boxShadow: "0 0 30px rgba(124,58,237,0.3), 0 0 60px rgba(124,58,237,0.1)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 50px rgba(124,58,237,0.55), 0 0 80px rgba(232,121,249,0.2)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 30px rgba(124,58,237,0.3), 0 0 60px rgba(124,58,237,0.1)")
            }
          >
            {hero.cta.primary.label}
          </Link>

          {/* Resume download */}
          <a
            href={RESUME_DOWNLOAD_PATH}
            download={hero.resumeDownload.filename}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-purple-light)";
              (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.08)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(124,58,237,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <DownloadIcon size={15} />
            {hero.resumeDownload.label}
          </a>

          {/* Secondary links */}
          {hero.cta.secondary.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                color: "var(--color-text)",
                border: "1px solid var(--color-border)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-purple-light)";
                (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.08)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(124,58,237,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {getSecondaryIcon(s.icon)}
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Avatar – desktop only ────────────────────────── */}
      <div className="hidden lg:flex items-center absolute right-[5%] top-1/2 -translate-y-1/2 animate-fade-in-late">
        <div className="relative">

          {/* Outer glow halo */}
          <div
            className="absolute inset-0 rounded-full animate-float-2 pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
              filter: "blur(30px)",
              transform: "scale(1.4)",
            }}
          />

          <div className="relative w-[340px] h-[340px] flex items-center justify-center">
            {/* Outer spinning ring – slow */}
            <div
              className="absolute inset-0 rounded-full animate-rotate-ring"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 50%, var(--color-purple-light) 75%, var(--color-accent) 100%, transparent)",
                padding: "2px",
              }}
            />
            {/* Inner spinning ring – fast reverse */}
            <div
              className="absolute rounded-full animate-rotate-ring-rev"
              style={{
                inset: "12px",
                background:
                  "conic-gradient(from 90deg, transparent 60%, rgba(34,211,238,0.6) 80%, transparent)",
                padding: "1.5px",
              }}
            />



            {/* Inner circle */}
            <div
              className="relative z-10 w-[308px] h-[308px] rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--color-bg2), #1a1040)",
                border: "1px solid rgba(124,58,237,0.25)",
                boxShadow: "inset 0 0 40px rgba(124,58,237,0.1), 0 0 40px rgba(124,58,237,0.15)",
              }}
            >
              {/* Subtle inner grid lines */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(124,58,237,0.12) 28px, rgba(124,58,237,0.12) 29px), repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(124,58,237,0.12) 28px, rgba(124,58,237,0.12) 29px)",
                }}
              />
              <span
                className="font-display font-black gradient-text-shimmer select-none"
                style={{ fontSize: "7rem" }}
              >
                {hero.avatarLetter}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom glow divider ─── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(232,121,249,0.4), rgba(124,58,237,0.5), transparent)",
        }}
      />
    </section>
  );
}
