# Damanpreet Singh — Portfolio

A production-ready **Next.js 15 + TypeScript** portfolio website with a fully configurable UI driven by a single JSON file.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # CSS variables, base styles, all animations
│   ├── layout.tsx           # Root layout — fonts, metadata
│   └── page.tsx             # Main page — assembles all sections
│
├── components/
│   ├── sections/            # One file per section
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── Stats.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/                  # Reusable UI primitives
│       ├── Cursor.tsx
│       ├── Icons.tsx
│       ├── RevealInit.tsx
│       └── ThemeProvider.tsx
│
├── data/
│   └── portfolio.json       # ⭐ ALL content & theme config lives here
│
├── lib/
│   └── portfolio.ts         # Data access helpers
│
├── public/
│   └── Damanpreet_Singh_Resume.pdf   # ← Drop your resume PDF here
│
└── types/
    └── portfolio.ts         # TypeScript interfaces for all data
```

---

## ⚙️ Customisation — `data/portfolio.json`

**Everything** is configured from one file. No code changes needed for content updates.

### Change Theme Colors

```json
"theme": {
  "colors": {
    "bg": "#07060f",
    "bg2": "#0d0b1e",
    "purple": "#7c3aed",
    "purpleLight": "#a855f7",
    "accent": "#e879f9",
    "text": "#f0eeff",
    "muted": "#8b80b0"
  }
}
```

Swap any hex value — e.g. change `purple` to `#0ea5e9` for a blue theme.

### Toggle Sections On/Off

```json
"sections": {
  "hero":       { "enabled": true  },
  "marquee":    { "enabled": true  },
  "stats":      { "enabled": true  },
  "experience": { "enabled": true  },
  "projects":   { "enabled": true  },
  "skills":     { "enabled": true  },
  "contact":    { "enabled": true  }
}
```

Set any section to `false` to hide it completely — no code edits needed.

### Add / Edit Work Experience

```json
"experience": [
  {
    "company": "Your Company",
    "role": "Your Role",
    "period": "01/2024 – Present",
    "location": "City, Country",
    "locationEmoji": "📍",
    "tags": ["React", "TypeScript"],
    "bullets": [
      "Bullet point one...",
      "Bullet point two..."
    ]
  }
]
```

### Add / Edit Projects

```json
"projects": [
  {
    "icon": "🚀",
    "title": "Project Name",
    "description": "Brief description of the project.",
    "stats": [
      { "label": "30% faster", "emoji": "⚡" }
    ],
    "tags": ["Next.js", "Tailwind"]
  }
]
```

### Resume Download

Place your resume PDF in `/public/` and update:

```json
"hero": {
  "resumeDownload": {
    "label": "Download Resume",
    "href": "/Damanpreet_Singh_Resume.pdf",
    "filename": "Damanpreet_Singh_Resume.pdf"
  }
}
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#07060f` | Page background |
| `--color-purple` | `#7c3aed` | Primary purple |
| `--color-purple-light` | `#a855f7` | Accents, tags, labels |
| `--color-accent` | `#e879f9` | Gradient end, cursor |
| `--color-muted` | `#8b80b0` | Body copy, subtitles |
| `--font-display` | Syne | Headings |
| `--font-sans` | Space Grotesk | Body text |
| `--font-mono` | JetBrains Mono | Tags, labels, code |

---

## 🔧 Build & Deploy

```bash
npm run build     # Production build
npm run start     # Start production server

# Deploy to Vercel (recommended)
npx vercel
```

---

## ✨ Features

- ⚡ **Next.js 15 App Router** with TypeScript
- 🎨 **JSON-configurable** — change everything from `data/portfolio.json`
- 🌙 **Dark purple theme** with CSS variables (swap colors via JSON)
- 🎭 **Custom animated cursor** with hover magnetic effect
- 📜 **Scroll reveal** animations on every section
- 📊 **Animated counters** for stats
- 🔄 **Infinite marquee** tech ticker
- ✨ **Floating gradient orbs** and noise texture
- 📱 **Fully responsive** — mobile-first
- 📥 **Resume download** button (Hero + Navbar + Contact)
- 🔀 **Section toggles** — enable/disable any section from JSON
- 🚀 **Vercel-ready** zero-config deployment
