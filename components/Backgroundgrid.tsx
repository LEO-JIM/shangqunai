"use client";

const rows = 7;   // 行数
const cols = 6;   // 每行六边形数量

// 预先挑 4 个要默认高亮的六边形（row-col 索引）
const accentHexes = new Set(["1-2", "2-4", "3-1", "4-3"]);

export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 w-[70%] overflow-hidden">
      {/* 整个蜂窝区域稍微旋转一点，让它有“斜对角”的感觉 */}
      <div className="absolute -right-20 -top-24 h-[140%] w-[140%] rotate-[-12deg]">
        <div
          className="flex flex-col gap-1 opacity-80"
          style={{
            // 往左边渐隐，只保留右上这块
            WebkitMaskImage:
              "linear-gradient(to left, transparent 0%, black 35%, black 100%)",
            maskImage:
              "linear-gradient(to left, transparent 0%, black 35%, black 100%)",
          }}
        >
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={
                // 奇数行做一点水平偏移，形成紧密蜂窝排列
                "flex gap-1 " +
                (rowIndex % 2 === 0 ? "translate-x-5" : "")
              }
              style={{
                // 让行与行之间轻微叠在一起，让六边形“顶到一起”
                marginTop: rowIndex === 0 ? 0 : -8,
              }}
            >
              {Array.from({ length: cols }).map((_, colIndex) => {
                const key = `${rowIndex}-${colIndex}`;
                const isAccent = accentHexes.has(key);

                return (
                  <div key={key} className="flex items-center justify-center">
                    <div
                      className={
                        "pointer-events-auto h-20 w-20 bg-white/80 border border-[#f3eefc] shadow-sm transition-colors duration-300 " +
                        (isAccent ? "bg-purple-50" : "hover:bg-purple-50")
                      }
                      style={{
                        // 用 clip-path 把它裁成正六边形
                        clipPath:
                          "polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0 50%)",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
