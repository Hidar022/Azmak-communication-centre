export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* White background */}
      <div className="absolute inset-0 bg-white" />

      {/* Blueprint Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(37,99,235,0.18) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to right, transparent, black 40%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 40%, black 100%)",
        }}
      />

      {/* Left Glow */}
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-100 blur-[140px]" />

      {/* Right Glow */}
      <div className="absolute -right-32 bottom-0 h-[550px] w-[550px] rounded-full bg-sky-100 blur-[150px]" />

      {/* Logo Accent */}
      <div className="absolute right-52 top-32 h-4 w-4 rounded-full bg-red-500/30" />

      {/* Large Outline Circle */}
      <div className="absolute right-16 top-20 h-[420px] w-[420px] rounded-full border border-blue-200/40" />

      {/* Small Outline Circle */}
      <div className="absolute right-40 bottom-10 h-56 w-56 rounded-full border border-blue-200/30" />
    </div>
  );
}