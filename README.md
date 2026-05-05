# Damanpreet Singh — Portfolio

A production-ready **Next.js 16 + TypeScript** portfolio website with a fully configurable UI driven by a single JSON file.

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

- ⚡ **Next.js 16 App Router** with TypeScript
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

---

## 🛠️ Tools & Technologies Used

- **Core Framework**: Next.js 16 (App Router)
 - **UI Library**: React 19
- **Styling**: Tailwind CSS (with PostCSS and Autoprefixer)
- **Language**: TypeScript (Strict typing for robust components and data structures)
- **Linting/Formatting**: ESLint
- **Version Control**: Git & GitHub
- **Deployment**: Vercel (Zero-config deployment)

---

## 📝 Development Process

The creation of this portfolio website followed an iterative, design-first approach, focusing heavily on modern aesthetics, modularity, and maintainability.

### 1. Architecture & "No-Code" CMS Strategy
- **JSON-Driven Content**: Early in development, a decision was made to extract all content (text, links, theme colors, section toggles) into a single `data/portfolio.json` file. This acts as a lightweight CMS, allowing updates without digging into React components.
- **Component Modularity**: The codebase was split into specific `sections` (Hero, Experience, Projects) and reusable `ui` primitives (Cursor, ThemeProvider, RevealInit) for excellent code hygiene.

### 2. Premium & Futuristic UI/UX
- **Design System Setup**: Implemented a dark, "futuristic" aesthetic with carefully selected colors (`purple`, `accent`, `muted`) stored as CSS variables.
- **Interactive Elements**: Built custom micro-interactions like a magnetic cursor and scroll-reveal animations to make the site feel responsive and alive.
- **Visual Refinement**: Iteratively refined the UI by removing visually noisy elements (like HUD brackets and scan lines) and replacing them with elegant alternatives, ensuring the core "constellation" background stood out clearly.

### 3. Refactoring & Optimization
- **Tailwind Migration**: Transitioned complex, manually-managed inline styles (such as complex box shadows and hover transitions) directly into Tailwind utility classes (e.g., `hover:shadow-xl`), resulting in cleaner, declarative component structures.
- **Responsive Design Fixes**: Constantly iterated on mobile-first responsiveness, ensuring that grids, flexboxes, and text sizes adapted beautifully to everything from mobile devices to 4k monitors.

### 4. Layout Enhancements (Extra-Large Screens)
- **Hero Section Overhaul**: Specifically optimized the site for ultra-wide displays by transforming the Hero section into a dual-column layout. A visually striking "Glassmorphic Code Terminal" graphic was implemented on the right side to balance the text content on the left, preventing awkward empty spaces on larger viewports.

### 5. Deployment & Version Control
- **Git Troubleshooting**: Addressed and resolved Git push permission issues, ensuring a smooth continuous integration pipeline.
- **Vercel Hosting**: Set up direct deployment to Vercel for fast, global edge delivery of the Next.js application.
