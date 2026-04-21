import type { Project } from "@/types/portfolio";

interface ProjectsProps {
  items: Project[];
}

export default function Projects({ items }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="px-6 md:px-[5%] py-28"
      style={{
        background:
          "linear-gradient(180deg, transparent, rgba(124,58,237,0.03), transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="reveal mb-16">
          <p className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--color-purple-light)" }}>
          </p>
          <h2
            className="font-display font-black tracking-tight leading-tight mb-4"
            style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
          >
            Projects
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
              className={`proj-card reveal reveal-d${i + 1} proj-card-hover rounded-2xl p-7 overflow-hidden`}
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(232,121,249,0.15))",
                  border: "1px solid rgba(124,58,237,0.3)",
                }}
              >
                {proj.icon}
              </div>

              <h3 className="font-display font-bold text-lg mb-3">
                {proj.title}
              </h3>
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
