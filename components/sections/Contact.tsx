"use client";

import type { Contact as ContactType, ResumeDownload } from "@/types/portfolio";
import { IconByName, DownloadIcon } from "@/components/ui/Icons";

interface ContactProps {
  contact: ContactType;
  resume: ResumeDownload;
}

export default function Contact({ contact, resume }: ContactProps) {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-[5%] py-28 text-center overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <p
          className="reveal font-mono text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--color-purple-light)" }}
        >
          {"// get in touch"}
        </p>

        <h2
          className="reveal font-display font-black tracking-tight leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
        >
          {contact.heading}
          <br />
          <span className="gradient-text">{contact.headingAccent}</span>
        </h2>

        <p
          className="reveal text-base mb-10"
          style={{ color: "var(--color-muted)" }}
        >
          {contact.subtext}
        </p>

        {/* Links */}
        <div className="reveal flex flex-wrap gap-3 justify-center mb-6">
          {contact.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl transition-all duration-200"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-purple-light)";
                el.style.background = "rgba(124,58,237,0.1)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-border)";
                el.style.background = "var(--color-card)";
                el.style.transform = "translateY(0)";
              }}
            >
              <IconByName name={link.icon} size={15} />
              {link.label}
            </a>
          ))}
        </div>

        {/* Resume CTA */}
        <div className="reveal">
          <a
            href={resume.href}
            download={resume.filename}
            className="inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-full text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, var(--color-purple), var(--color-accent))",
              boxShadow: "0 0 30px rgba(124,58,237,0.25)",
            }}
          >
            <DownloadIcon size={15} />
            {resume.label}
          </a>
        </div>
      </div>
    </section>
  );
}
