import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        bg: "var(--color-bg)",
        bg2: "var(--color-bg2)",
        purple: "var(--color-purple)",
        "purple-light": "var(--color-purple-light)",
        accent: "var(--color-accent)",
        "text-primary": "var(--color-text)",
        muted: "var(--color-muted)",
        card: "var(--color-card)",
        border: "var(--color-border)",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        float: "float 8s ease-in-out infinite alternate",
        blink: "blink 1s step-end infinite",
        marquee: "marquee 25s linear infinite",
        "fade-up": "fadeUp 1s cubic-bezier(0.16,1,0.3,1) both",
        "slide-down": "slideDown 0.8s cubic-bezier(0.16,1,0.3,1) both",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        float: {
          from: { transform: "translate(0,0) scale(1)" },
          to: { transform: "translate(30px,-30px) scale(1.1)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
