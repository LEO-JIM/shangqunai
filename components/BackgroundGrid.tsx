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
      {/* 灰色网格线 - 微调为更偏冷的 Slate 灰色，显得更高级 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)",
          backgroundSize: `${CELL}px ${CELL}px`,
          maskImage:
            "linear-gradient(225deg, white 0%, white 42%, transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(225deg, white 0%, white 42%, transparent 70%)",
          opacity: 0.6,
        }}
      />

      {/* 默认高亮方格 - 改为淡蓝色 (Blue-500) */}
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
              "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)",
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* 跟随鼠标的主光效 - 改为科技蓝 (Blue-600) */}
      {isReady && inGrid && (
        <div
          className="absolute"
          style={{
            left: snappedX,
            top: snappedY,
            width: CELL,
            height: CELL,
            background:
              "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.30) 0%, rgba(37, 99, 235, 0.15) 40%, rgba(37, 99, 235, 0.02) 80%, transparent 100%)",
            filter: "blur(2px)",
            transition: "left 0.05s ease-out, top 0.05s ease-out",
          }}
        />
      )}

      {/* 椭圆残影 - 改为淡蓝轨迹 */}
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
              "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.20) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 100%)",
            filter: "blur(2px)",
          }}
        />
      ))}
    </div>
  );
}
