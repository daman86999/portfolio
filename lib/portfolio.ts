import type { PortfolioData } from "@/types/portfolio";
import rawData from "@/data/portfolio.json";

export function getPortfolioData(): PortfolioData {
  return rawData as PortfolioData;
}

export function getCSSVariables(data: PortfolioData): Record<string, string> {
  const { colors } = data.theme;
  return {
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
}
