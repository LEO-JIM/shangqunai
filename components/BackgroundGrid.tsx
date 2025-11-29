"use client";

export default function BackgroundGrid() {
  const cards = Array.from({ length: 70 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 grid grid-cols-8 gap-6 opacity-40"
        style={{ transform: "skewY(-12deg)" }}
      >
        {cards.map((_, i) => (
          <div
            key={i}
            className="
              h-32 w-full rounded-xl
              bg-purple-100
              transition-all duration-300
              hover:bg-purple-200
              hover:scale-[1.02]
              pointer-events-auto
            "
          />
        ))}
      </div>
    </div>
  );
}
