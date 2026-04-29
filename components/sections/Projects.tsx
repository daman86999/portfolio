import type { Project } from "@/types/portfolio";

interface ProjectsProps {
  items: Project[];
}

export default function Projects({ items }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-[5%] py-28 overflow-hidden"
    >
      {/* Accent orbs */}
      <div
        className="pointer-events-none absolute -left-40 top-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,121,249,0.07) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs tracking-widest uppercase mb-3 flex items-center gap-2"
            style={{ color: "var(--color-purple-light)" }}>
            <span className="inline-block w-8 h-px" style={{ background: "var(--color-purple-light)" }} />
            Portfolio
          </p>
          <h2
            className="font-display font-black tracking-tight leading-tight mb-4"
            style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base leading-relaxed max-w-md"
            style={{ color: "var(--color-muted)" }}>
            Innovative products built with modern technologies and a focus on performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((proj, i) => (
            <div
              key={proj.title}
              className={`proj-card reveal reveal-d${Math.min(i + 1, 4)} proj-card-hover rounded-2xl p-7 overflow-hidden`}
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* HUD index + Icon row */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(232,121,249,0.15))",
                    border: "1px solid rgba(124,58,237,0.35)",
                    boxShadow: "0 0 12px rgba(124,58,237,0.15)",
                  }}
                >
                  {proj.icon}
                </div>
                <span
                  className="font-mono text-xs"
                  style={{ color: "rgba(168,85,247,0.45)" }}
                >
                  {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg mb-3">{proj.title}</h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--color-muted)" }}
              >
                {proj.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-2 mb-5">
                {proj.stats.map((s) => (
                  <span
                    key={s.label}
                    className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-full"
                    style={{
                      color: "var(--color-purple-light)",
                      background: "rgba(124,58,237,0.1)",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}
                  >
                    {s.emoji} {s.label}
                  </span>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <span key={tag} className="tag-badge">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
