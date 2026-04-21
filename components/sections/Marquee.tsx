interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className="py-5 overflow-hidden"
      style={{
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        background: "rgba(124,58,237,0.04)",
      }}
    >
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 font-mono text-xs flex-shrink-0"
            style={{ color: "var(--color-muted)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "var(--color-purple-light)" }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
