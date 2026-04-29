"use client";

import { RESUME_DOWNLOAD_PATH } from "@/lib/resume-download-path";
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
      {/* Radial glow – large */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          className="w-[700px] h-[700px] rounded-full animate-float-2"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.13) 0%, rgba(232,121,249,0.06) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>



      <div className="relative z-10 max-w-3xl mx-auto">

        {/* HUD label */}
        <p className="reveal font-mono text-xs tracking-widest uppercase mb-6 flex items-center justify-center gap-2"
          style={{ color: "var(--color-purple-light)" }}>
          <span className="inline-block w-8 h-px" style={{ background: "var(--color-purple-light)" }} />
          Get in touch
          <span className="inline-block w-8 h-px" style={{ background: "var(--color-purple-light)" }} />
        </p>

        <h2
          className="reveal font-display font-black tracking-tight leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}
        >
          {contact.heading}
          <br />
          <span className="gradient-text-shimmer">{contact.headingAccent}</span>
        </h2>

        <p
          className="reveal text-base mb-10"
          style={{ color: "var(--color-muted)" }}
        >
          {contact.subtext}
        </p>

        {/* Links */}
        <div className="reveal flex flex-wrap gap-3 justify-center mb-8">
          {contact.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-link inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl"
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
                backdropFilter: "blur(8px)",
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
            href={RESUME_DOWNLOAD_PATH}
            download={resume.filename}
            className="btn-primary-cta inline-flex items-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-full text-white animate-neon-pulse"
            style={{
              background: "linear-gradient(135deg, var(--color-purple), var(--color-accent))",
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
