import type { Experience as ExperienceType } from "@/types/portfolio";

interface ExperienceProps {
  items: ExperienceType[];
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="relative px-6 md:px-[5%] py-28 overflow-hidden">

      {/* Futuristic bg accent orb */}
      <div
        className="pointer-events-none absolute -right-40 top-20 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
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
            Career
          </p>
          <h2
            className="font-display font-black tracking-tight leading-tight mb-4"
            style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
          >
            Professional
            <br />
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base leading-relaxed max-w-md"
            style={{ color: "var(--color-muted)" }}>
            Building impactful products across IoT platforms, AI chatbots, and component libraries.
          </p>
        </div>

        {/* Timeline cards */}
        <div className="flex flex-col gap-5">
          {items.map((exp, i) => (
            <div
              key={exp.company}
              className={`exp-card reveal reveal-d${Math.min(i + 1, 4)} exp-card-hover rounded-2xl p-7 overflow-hidden`}
              style={{
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Top row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Left */}
                <div className="flex-1 min-w-0">
                  {/* Company name with HUD prefix */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs" style={{ color: "var(--color-cyan, #22d3ee)" }}>
                      [{String(i + 1).padStart(2, "0")}]
                    </span>
                    <h3 className="font-display font-bold text-lg">{exp.company}</h3>
                  </div>
                  <p className="font-mono text-sm mb-5"
                    style={{ color: "var(--color-purple-light)" }}>
                    {exp.role}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: "var(--color-muted)" }}
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                          style={{
                            background: "var(--color-purple-light)",
                            boxShadow: "0 0 4px rgba(168,85,247,0.5)",
                          }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right */}
                <div className="flex-shrink-0 md:text-right flex flex-col gap-2">
                  <span
                    className="font-mono text-xs px-3 py-1 rounded-full whitespace-nowrap self-start md:self-end"
                    style={{
                      color: "var(--color-muted)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--color-border)",
                    }}>
                    {exp.period}
                  </span>
                  <span className="text-sm" style={{ color: "var(--color-muted)" }}>
                    {exp.locationEmoji} {exp.location}
                  </span>
                  <div className="flex flex-wrap gap-1.5 md:justify-end mt-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag-badge">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
