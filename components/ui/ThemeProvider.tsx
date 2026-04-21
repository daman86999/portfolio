"use client";

import type { ThemeColors } from "@/types/portfolio";

interface ThemeProviderProps {
  colors: ThemeColors;
  children: React.ReactNode;
}

export default function ThemeProvider({ colors, children }: ThemeProviderProps) {
  const cssVars: Record<string, string> = {
    "--color-bg": colors.bg,
    "--color-bg2": colors.bg2,
    "--color-purple": colors.purple,
    "--color-purple-light": colors.purpleLight,
    "--color-accent": colors.accent,
    "--color-text": colors.text,
    "--color-muted": colors.muted,
    "--color-card": colors.card,
    "--color-border": colors.border,
  };

  return (
    <div style={cssVars as React.CSSProperties} className="min-h-screen">
      {children}
    </div>
  );
}
