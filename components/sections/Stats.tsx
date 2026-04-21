import type { Stat } from "@/types/portfolio";

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="px-6 md:px-[5%] pt-20 pb-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`reveal reveal-d${i + 1} rounded-2xl p-8 text-center`}
            style={{
              background: "var(--color-card)",
              border: "1px solid var(--color-border)",
            }}
          >
            <span
              className="block font-display font-black text-5xl gradient-text"
              data-target={stat.value}
              data-suffix={stat.suffix}
            >
              0{stat.suffix}
            </span>
            <div
              className="mt-2 text-sm"
              style={{ color: "var(--color-muted)" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
