interface FooterProps {
  text: string;
}

export default function Footer({ text }: FooterProps) {
  return (
    <footer
      className="text-center py-6 font-mono text-xs"
      style={{
        borderTop: "1px solid var(--color-border)",
        color: "var(--color-muted)",
      }}
    >
      {text}
    </footer>
  );
}
