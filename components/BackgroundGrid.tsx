"use client";

export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="
          absolute 
          right-[-10%] 
          top-[-10%]
          w-[120%] 
          h-[120%]
          rotate-[12deg] 
          opacity-30
          grid 
          grid-cols-8 
          gap-8
          mask-diagonal
        "
      >
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="
              w-32 
              h-48 
              rounded-xl 
              bg-purple-100 
              hover:bg-purple-200 
              transition-all 
              duration-500
            "
          />
        ))}
      </div>
    </div>
  );
}
