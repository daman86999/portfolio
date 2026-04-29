"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RESUME_DOWNLOAD_PATH } from "@/lib/resume-download-path";
import type { Nav, ResumeDownload } from "@/types/portfolio";
import { DownloadIcon, MenuIcon, CloseIcon } from "@/components/ui/Icons";

interface NavbarProps {
  nav: Nav;
  resume: ResumeDownload;
}

export default function Navbar({ nav, resume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 animate-slide-down transition-all duration-300`}
      style={{
        backdropFilter: "blur(20px)",
        background: scrolled ? "rgba(7,6,15,0.88)" : "rgba(7,6,15,0.6)",
        borderBottom: scrolled
          ? "1px solid rgba(124,58,237,0.4)"
          : "1px solid var(--color-border)",
        boxShadow: scrolled
          ? "0 0 24px rgba(124,58,237,0.12), 0 1px 0 rgba(168,85,247,0.15)"
          : "none",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span
          className="font-display font-black text-xl gradient-text tracking-tight"
        >
          {nav.logo}
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs tracking-wide transition-colors duration-200"
                style={{ color: "var(--color-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={RESUME_DOWNLOAD_PATH}
            download={resume.filename}
            className="flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full transition-all duration-200"
            style={{
              color: "var(--color-muted)",
              border: "1px solid var(--color-border)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-purple-light)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-border)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)";
            }}
          >
            <DownloadIcon size={13} />
            Resume
          </a>
          <Link
            href={nav.cta.href}
            className="text-xs font-semibold px-5 py-2 rounded-full text-white transition-opacity duration-200 hover:opacity-85"
            style={{
              background: "linear-gradient(135deg, var(--color-purple), var(--color-accent))",
            }}
          >
            {nav.cta.label}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--color-text)" }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm py-2"
              style={{ color: "var(--color-muted)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={RESUME_DOWNLOAD_PATH}
            download={resume.filename}
            className="flex items-center gap-2 text-sm font-medium py-2"
            style={{ color: "var(--color-purple-light)" }}
          >
            <DownloadIcon size={14} />
            {resume.label}
          </a>
          <Link
            href={nav.cta.href}
            onClick={() => setMobileOpen(false)}
            className="text-sm font-semibold px-5 py-3 rounded-full text-white text-center"
            style={{
              background: "linear-gradient(135deg, var(--color-purple), var(--color-accent))",
            }}
          >
            {nav.cta.label}
          </Link>
        </div>
      )}
    </nav>
  );
}
