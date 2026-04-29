"use client";

import type { MouseEvent } from "react";
import type { Skill, Certificate, Education } from "@/types/portfolio";

interface SkillsProps {
  skills: Skill[];
  certificates: Certificate[];
  education: Education[];
}

export default function Skills({ skills, certificates, education }: SkillsProps) {
  return (
    <section
      id="skills"
      className="relative px-6 md:px-[5%] py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,transparent,rgba(124,58,237,0.05),rgba(34,211,238,0.02),transparent)",
      }}
    >
      {/* Accent orb */}
      <div
        className="pointer-events-none absolute -right-32 top-1/3 w-[450px] h-[450px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden
      />
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="reveal mb-12 relative z-10">
          <p className="font-mono text-xs tracking-widest uppercase mb-3 flex items-center gap-2"
            style={{ color: "var(--color-purple-light)" }}>
            <span className="inline-block w-8 h-px" style={{ background: "var(--color-purple-light)" }} />
            Tech Stack
          </p>
          <h2
            className="font-display font-black tracking-tight"
            style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
          >
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="reveal grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-20 relative z-10">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="skill-pill rounded-xl py-4 px-2 text-center text-sm font-medium transition-all duration-250 cursor-default"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-purple-light)";
                el.style.background = "rgba(124,58,237,0.12)";
                el.style.color = "var(--color-purple-light)";
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 8px 24px rgba(124,58,237,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-border)";
                el.style.background = "var(--color-card)";
                el.style.color = "var(--color-text)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <span className="block text-2xl mb-2 leading-none">{skill.icon}</span>
              <span className="leading-tight">{skill.label}</span>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="mb-16 relative z-10">
          <div className="reveal mb-6">
            <p className="font-mono text-xs tracking-widest uppercase mb-3 flex items-center gap-2"
              style={{ color: "var(--color-purple-light)" }}>
              <span className="inline-block w-6 h-px" style={{ background: "var(--color-purple-light)" }} />
              Credentials
            </p>
            <h3 className="font-display font-bold text-2xl">Certificates</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certificates.map((cert, i) => {
              const cardClass = `reveal reveal-d${i + 1} rounded-xl p-5 transition-all duration-200 block text-inherit no-underline`;
              const cardStyle = {
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
              } as const;
              const hoverHandlers = {
                onMouseEnter: (e: MouseEvent<HTMLElement>) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(124,58,237,0.4)";
                  el.style.background = "rgba(124,58,237,0.06)";
                },
                onMouseLeave: (e: MouseEvent<HTMLElement>) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--color-border)";
                  el.style.background = "var(--color-card)";
                },
              };

              const inner = (
                <>
                  <div className="font-semibold text-sm mb-1 leading-snug">{cert.name}</div>
                  <div className="font-mono text-xs" style={{ color: "var(--color-purple-light)" }}>
                    {cert.issuer}
                  </div>
                </>
              );

              return cert.certificateLink ? (
                <a
                  key={cert.name}
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardClass} cursor-pointer`}
                  style={cardStyle}
                  {...hoverHandlers}
                >
                  {inner}
                </a>
              ) : (
                <div key={cert.name} className={cardClass} style={cardStyle} {...hoverHandlers}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <div className="relative z-10">
          <div className="reveal mb-6">
            <p className="font-mono text-xs tracking-widest uppercase mb-3 flex items-center gap-2"
              style={{ color: "var(--color-purple-light)" }}>
              <span className="inline-block w-6 h-px" style={{ background: "var(--color-purple-light)" }} />
              Academia
            </p>
            <h3 className="font-display font-bold text-2xl">Education</h3>
          </div>
          <div className="flex flex-col gap-4">
            {education.map((edu, i) => (
              <div
                key={edu.institution}
                className={`reveal reveal-d${i + 1} rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-all duration-200`}
                style={{
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(124,58,237,0.4)";
                  el.style.background = "rgba(124,58,237,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--color-border)";
                  el.style.background = "var(--color-card)";
                }}
              >
                <div>
                  <div className="font-semibold text-sm leading-snug mb-1">{edu.degree}</div>
                  <div className="font-mono text-xs" style={{ color: "var(--color-purple-light)" }}>
                    {edu.institution} · {edu.location}
                  </div>
                </div>
                <div className="font-mono text-xs whitespace-nowrap" style={{ color: "var(--color-muted)" }}>
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
