import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--color-purple-light)" }}>
        404
      </p>
      <h1 className="font-display font-black text-3xl sm:text-4xl mb-4">Page not found</h1>
      <p className="text-base mb-8 max-w-md" style={{ color: "var(--color-muted)" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full text-white transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: "linear-gradient(135deg, var(--color-purple), var(--color-accent))",
          boxShadow: "0 0 30px rgba(124,58,237,0.25)",
        }}
      >
        Back home
      </Link>
    </div>
  );
}
