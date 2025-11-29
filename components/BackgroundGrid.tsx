"use client";

import { useState, useEffect } from "react";

type Highlight = { col: number; row: number };

interface Props {
  // 你可以自己指定哪些格子默认高亮（用列 / 行索引）
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

      // 只在右上区域记录残影
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

  // 右上区域判定（左下绝对不会有光效）
  const inGrid =
    isReady && pos.x > viewport.w * 0.3 && pos.y < viewport.h * 0.65;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* 灰色网格线（右上，对角线以下淡出） */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,120,120,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(120,120,120,0.10) 1px, transparent 1px)",
          backgroundSize: `${CELL}px ${CELL}px`,
          maskImage:
            "linear-gradient(225deg, white 0%, white 42%, transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(225deg, white 0%, white 42%, transparent 70%)",
          opacity: 0.45,
        }}
      />

      {/* 默认高亮方格（椭圆淡紫）——你可以自己配置 */}
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
              "radial-gradient(ellipse at center, rgba(180,0,255,0.15) 0%, rgba(180,0,255,0.10) 40%, transparent 100%)",
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* 跟随鼠标的主光效（椭圆，科技感） */}
      {isReady && inGrid && (
        <div
          className="absolute"
          style={{
            left: snappedX,
            top: snappedY,
            width: CELL,
            height: CELL,
            background:
              "radial-gradient(ellipse at center, rgba(180,0,255,0.35) 0%, rgba(180,0,255,0.18) 40%, rgba(180,0,255,0.05) 75%, transparent 100%)",
            filter: "blur(2px)",
            transition: "left 0.05s ease-out, top 0.05s ease-out",
          }}
        />
      )}

      {/* 椭圆残影（只在右上，有淡出动画） */}
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
              "radial-gradient(ellipse at center, rgba(180,0,255,0.25) 0%, rgba(180,0,255,0.12) 50%, transparent 100%)",
            filter: "blur(2px)",
          }}
        />
      ))}
    </div>
  );
}
