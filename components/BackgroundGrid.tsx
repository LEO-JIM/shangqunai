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

      // 逻辑判定：只在右上区域记录残影
      const inRightTop = x > w * 0.3 && y < h * 0.65;
      if (inRightTop) {
        setTrails((prev) => {
          const next = [
            ...prev.slice(-8), // 进一步减少残影数量，保持干净
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
      {/* 1. 基础网格线
         修改点：颜色改为纯黑的极低透明度 (rgba(0,0,0,0.04))。
         这比之前的 Slate/Blue 灰更像“工程制图”，完全没有色相偏向，非常稳。
      */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)",
          backgroundSize: `${CELL}px ${CELL}px`,
          // 遮罩保持不变
          maskImage:
            "radial-gradient(circle at 100% 0%, white 0%, white 35%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(circle at 100% 0%, white 0%, white 35%, transparent 65%)",
        }}
      />

      {/* 2. 静态高亮方格 (Optional) */}
      {highlights.map((h, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            left: h.col * CELL,
            top: h.row * CELL,
            width: CELL,
            height: CELL,
            backgroundColor: "rgba(0, 0, 0, 0.02)", // 静态格子改为极淡的灰色，不抢眼
          }}
        />
      ))}

      {/* 3. 鼠标跟随的主方格 (Active Cell) */}
      {/* 修改点：
          1. 去掉了 border (边框)
          2. 去掉了 boxShadow (光晕)
          3. 颜色改为极为克制的“科技蓝”填充，透明度很低 (0.08)。
          现在它看起来像是一个淡淡的数据块。
      */}
      {isReady && inGrid && (
        <div
          className="absolute z-10"
          style={{
            left: snappedX,
            top: snappedY,
            width: CELL,
            height: CELL,
            backgroundColor: "rgba(37, 99, 235, 0.08)", // 极淡的蓝色填充 (Blue-600 @ 8%)
            transition: "left 0.15s cubic-bezier(0.4, 0, 0.2, 1), top 0.15s cubic-bezier(0.4, 0, 0.2, 1)", 
          }}
        />
      )}

      {/* 4. 方格残影 (Trails) */}
      {/* 修改点：同样去掉了边框，颜色更淡 */}
      {trails.map((t) => (
        <div
          key={t.id}
          className="absolute animate-fadeOut"
          style={{
            left: snap(t.x),
            top: snap(t.y),
            width: CELL,
            height: CELL,
            backgroundColor: "rgba(37, 99, 235, 0.04)", // 几乎透明的蓝 (Blue-600 @ 4%)
          }}
        />
      ))}
    </div>
  );
}
