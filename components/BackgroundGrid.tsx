"use client";

import { useState, useEffect } from "react";

type Highlight = { col: number; row: number };

interface Props {
  highlights?: Highlight[];
}

const CELL = 100; // 网格大小

export default function BackgroundGrid({ highlights = [] }: Props) {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>(
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    setViewport({ w, h });

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setPos({ x, y });

      // 逻辑判定：只在右上区域记录残影（大约右边 70%，上面 65% 的区域）
      const inRightTop = x > w * 0.3 && y < h * 0.65;
      if (inRightTop) {
        setTrails((prev) => {
          const next = [
            ...prev.slice(-15),
            { x, y, id: Date.now() + Math.random() },
          ];
          return next;
        });
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const snap = (v: number) => Math.floor(v / CELL) * CELL;
  const snappedX = snap(pos.x);
  const snappedY = snap(pos.y);

  const isReady = viewport.w > 0 && viewport.h > 0;

  // 逻辑判定：左下角即使鼠标滑过也不产生光效
  const inGrid =
    isReady && pos.x > viewport.w * 0.3 && pos.y < viewport.h * 0.65;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* ⭐ 核心修复：灰色网格线背景
        使用了径向遮罩 (radial-gradient)，以右上角 (100% 0%) 为中心。
        离右上角越近越可见 (white)，超过 65% 的距离后完全透明 (transparent)。
        这能确保左下角的文字区域绝对干净。
      */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)",
          backgroundSize: `${CELL}px ${CELL}px`,
          
          // 修改处：使用以右上角为中心的径向渐变遮罩
          maskImage:
            "radial-gradient(circle at 100% 0%, white 0%, white 35%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(circle at 100% 0%, white 0%, white 35%, transparent 65%)",
            
          opacity: 0.7, // 稍微增加了一点点整体不透明度，让右上角的网格更清晰一点
        }}
      />

      {/* 默认高亮方格 - 蓝色系 */}
      {highlights.map((h, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            left: h.col * CELL,
            top: h.row * CELL,
            width: CELL,
            height: CELL,
            background:
              "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)",
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* 跟随鼠标的主光效 - 蓝色系 */}
      {isReady && inGrid && (
        <div
          className="absolute"
          style={{
            left: snappedX,
            top: snappedY,
            width: CELL,
            height: CELL,
            background:
              "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.35) 0%, rgba(37, 99, 235, 0.15) 40%, rgba(37, 99, 235, 0.02) 80%, transparent 100%)",
            filter: "blur(2px)",
            transition: "left 0.05s ease-out, top 0.05s ease-out",
          }}
        />
      )}

      {/* 椭圆残影 - 蓝色系 */}
      {trails.map((t) => (
        <div
          key={t.id}
          className="absolute animate-fadeOut"
          style={{
            left: snap(t.x),
            top: snap(t.y),
            width: CELL,
            height: CELL,
            background:
              "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.25) 0%, rgba(37, 99, 235, 0.10) 50%, transparent 100%)",
            filter: "blur(2px)",
          }}
        />
      ))}
    </div>
  );
}
