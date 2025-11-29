"use client";

const cards = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  // 随便挑 4 个初始就是淡紫色
  accent: [2, 6, 11, 15].includes(i),
}));

export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 w-[65%] overflow-hidden">
      {/* 整块区域稍微旋转一点，做成斜着的卡片 */}
      <div className="absolute -right-32 -top-32 h-[140%] w-[120%] rotate-[-12deg]">
        <div
          className="grid grid-cols-4 gap-8 opacity-80"
          style={{
            // 往左边渐渐消失（只保留右上角那一带）
            WebkitMaskImage:
              "linear-gradient(to left, transparent 0%, black 35%, black 100%)",
            maskImage:
              "linear-gradient(to left, transparent 0%, black 35%, black 100%)",
          }}
        >
          {cards.map((card) => (
            <div key={card.id} className="flex items-center justify-center">
              <div
                className={
                  "pointer-events-auto h-40 w-28 rounded-[26px] border border-[#f5eefe] bg-white/70 shadow-sm transition-colors duration-300 " +
                  (card.accent ? "bg-purple-50" : "hover:bg-purple-50")
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
