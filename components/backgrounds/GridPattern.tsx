"use client";

export function GridPattern() {
  return (
    <>
      {/* Blueprint Grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.045]
          pointer-events-none
          [background-size:48px_48px]
          [background-image:
            linear-gradient(to_right,#2563eb_1px,transparent_1px),
            linear-gradient(to_bottom,#2563eb_1px,transparent_1px)]
        "
      />

      {/* Dot Pattern */}
      <div
        className="
          absolute inset-0
          opacity-[0.05]
          pointer-events-none
          [background-size:24px_24px]
          [background-image:radial-gradient(#3b82f6_0.8px,transparent_0.8px)]
        "
      />

      {/* Curved Blueprint Line */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 250 C250 80 700 500 1500 220"
          stroke="#2563eb"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 10"
        />

        <path
          d="M-100 650 C500 350 900 900 1700 600"
          stroke="#2563eb"
          strokeWidth="2"
          fill="none"
          strokeDasharray="12 12"
        />
      </svg>

      {/* Top Left Glow */}
      <div
        className="
          absolute
          -top-44
          -left-44
          h-[520px]
          w-[520px]
          rounded-full
          bg-blue-100
          blur-[140px]
          opacity-80
          pointer-events-none
        "
      />

      {/* Bottom Right Glow */}
      <div
        className="
          absolute
          -bottom-44
          -right-44
          h-[520px]
          w-[520px]
          rounded-full
          bg-blue-50
          blur-[140px]
          opacity-80
          pointer-events-none
        "
      />

      {/* Fade Bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
    </>
  );
}