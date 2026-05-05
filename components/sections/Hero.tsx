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



      {/* ── Content & HUD Wrapper ───────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

        {/* ── Left Content ─────────────────────────────────── */}
        <div className="flex-1 w-full max-w-2xl lg:max-w-none pr-0 lg:pr-8">

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
            className="animate-fade-up-d2 font-display font-black leading-[1.02] tracking-tight mb-6 "
            style={{ fontSize: "clamp(2.2rem, 9vw, 5.5rem)" }}
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
              className="btn-primary-cta inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, var(--color-purple), var(--color-accent))",
              }}
            >
              {hero.cta.primary.label}
            </Link>

            {/* Resume download */}
            <a
              href={RESUME_DOWNLOAD_PATH}
              download={hero.resumeDownload.filename}
              className="btn-ghost-cta inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{
                color: "var(--color-text)",
                border: "1px solid var(--color-border)",
                backdropFilter: "blur(8px)",
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
                className="btn-ghost-cta inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {getSecondaryIcon(s.icon)}
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right Futuristic Holographic Terminal (Extra Large Screens) ── */}
        <div className="hidden xl:flex relative w-full max-w-[400px] xl:max-w-[500px] h-[400px] xl:h-[450px] flex-shrink-0 items-center justify-center animate-fade-in-late perspective-1000 z-0">

          {/* Background glows for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-cyan-400/5 rounded-full blur-[60px] pointer-events-none animate-pulse" />

          {/* Floating decorative elements behind the terminal */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border border-purple-500/20 rounded-xl rotate-12 animate-float pointer-events-none" />
          <div className="absolute -bottom-8 -left-4 w-32 h-32 border border-cyan-400/10 rounded-full -rotate-12 animate-float-2 pointer-events-none" />

          {/* Terminal Window */}
          <div
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(124,58,237,0.15)] flex flex-col pointer-events-auto transition-all duration-500 hover:shadow-[0_0_60px_rgba(124,58,237,0.3)] hover:border-purple-500/30"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.01]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="mx-auto font-mono text-[10px] text-muted tracking-widest uppercase opacity-70">
                system_core.ts
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm leading-loose overflow-hidden relative">

              {/* Scanline effect inside terminal */}
              <div className="absolute inset-0 w-full h-[2px] bg-cyan-400/10 blur-[1px] animate-scan-line pointer-events-none" />

              <div className="flex flex-col gap-1 text-purple-200/90">
                <div><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = {'{'}</div>

                <div className="pl-6 flex flex-col gap-1">
                  <div><span className="text-muted">name:</span> <span className="text-accent">{`"${hero.name}"`}</span>,</div>
                  <div><span className="text-muted">status:</span> <span className="text-green-400">{`"Online"`}</span>,</div>
                  <div><span className="text-muted">expertise:</span> {'['}</div>
                  <div className="pl-6 text-accent">
                    {`"Next.js", "React", "TypeScript"`}
                  </div>
                  <div>{']'},</div>

                  <div className="mt-2"><span className="text-muted">current_focus:</span> {'{'}</div>
                  <div className="pl-6 flex flex-col">
                    <div><span className="text-muted">mission:</span> <span className="text-cyan-300">{`"Building high-performance UIs"`}</span>,</div>
                    <div><span className="text-muted">domain:</span> <span className="text-cyan-300">{`"IoT & AI Platforms"`}</span></div>
                  </div>
                  <div>{'}'}</div>
                </div>

                <div>{'}'};</div>

                <div className="mt-4 text-muted flex items-center gap-2">
                  <span className="text-green-400">~</span> await system.initialize(developer);
                  <span className="inline-block w-2 h-4 bg-purple-400 animate-blink" />
                </div>
              </div>

            </div>
          </div>

          {/* Decorative Corner glowing brackets framing the terminal */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-purple-500/40 pointer-events-none" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400/40 pointer-events-none" />
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
