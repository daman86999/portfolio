"use client";

import Link from "next/link";
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
      {/* Orbs */}
      <div
        className="pointer-events-none absolute rounded-full animate-float"
        style={{
          width: 500, height: 500,
          background: "rgba(124,58,237,0.22)",
          filter: "blur(80px)",
          top: -100, right: -100,
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full animate-float-2"
        style={{
          width: 350, height: 350,
          background: "rgba(232,121,249,0.1)",
          filter: "blur(80px)",
          bottom: 0, left: -50,
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full animate-float-3"
        style={{
          width: 200, height: 200,
          background: "rgba(99,102,241,0.18)",
          filter: "blur(60px)",
          top: "40%", left: "40%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        {/* Badge */}
        <div className="animate-fade-up-d1 inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full font-mono text-xs"
          style={{
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(124,58,237,0.4)",
            color: "var(--color-purple-light)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
            style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }}
          />
          {hero.badge}
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up-d2 font-display font-black leading-[1.02] tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
        >
          {hero.name}
          <br />
          <span className="gradient-text">{hero.nameAccent}</span>
          <span
            className="inline-block w-0.5 ml-1 animate-blink"
            style={{
              height: "0.85em",
              background: "var(--color-accent)",
              verticalAlign: "middle",
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
              boxShadow: "0 0 30px rgba(124,58,237,0.3)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 50px rgba(124,58,237,0.5)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 30px rgba(124,58,237,0.3)")
            }
          >
            {hero.cta.primary.label}
          </Link>

          {/* Resume download */}
          <a
            href={hero.resumeDownload.href}
            download={hero.resumeDownload.filename}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-purple-light)";
              (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
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
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-purple-light)";
                (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {getSecondaryIcon(s.icon)}
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Avatar — desktop only */}
      <div className="hidden lg:flex items-center absolute right-[5%] top-1/2 -translate-y-1/2 animate-fade-in-late">
        <div className="relative">
          {/* Spinning ring */}
          <div className="relative w-[320px] h-[320px] flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full animate-spin-conic"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 60%, var(--color-purple-light) 80%, var(--color-accent) 100%, transparent)",
              }}
            />
            {/* Inner circle */}
            <div
              className="relative z-10 w-[308px] h-[308px] rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--color-bg2), #1a1040)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <span
                className="font-display font-black gradient-text select-none"
                style={{ fontSize: "7rem" }}
              >
                {hero.avatarLetter}
              </span>
            </div>
          </div>

          {/* Floating tags */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-4 flex flex-col gap-2">
            {hero.floatingTags.map((tag, i) => (
              <div
                key={tag}
                className={`animate-slide-left-d${i + 1} px-3 py-1.5 rounded-md font-mono text-xs whitespace-nowrap`}
                style={{
                  background: "rgba(13,11,30,0.9)",
                  border: "1px solid var(--color-border)",
                  borderLeft: "3px solid var(--color-purple-light)",
                  color: "var(--color-muted)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
