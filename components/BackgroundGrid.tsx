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
  
  // 移除 trails (残影) 状态，彻底杜绝“绽放/光晕”感
  // const [trails, setTrails] = useState... (Deleted)

  useEffect(() => {
    if (typeof window === "undefined") return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    setViewport({ w, h });

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
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
      {/* 1. 基础网格线 (保持中性灰，像工程图纸) */}
      <div
        className="absolute inset-0"
        style={{
          // 纯灰色线条，无色相
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)",
          backgroundSize: `${CELL}px ${CELL}px`,
          maskImage:
            "radial-gradient(circle at 100% 0%, white 0%, white 35%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(circle at 100% 0%, white 0%, white 35%, transparent 65%)",
        }}
      />

      {/* 2. 静态高亮方格 (默认显示的格子) */}
      {/* 修改：颜色改回淡蓝色 (Blue-500 @ 5%) */}
      {highlights.map((h, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            left: h.col * CELL,
            top: h.row * CELL,
            width: CELL,
            height: CELL,
            backgroundColor: "rgba(59, 130, 246, 0.05)", // 淡蓝
          }}
        />
      ))}

      {/* 3. 鼠标跟随的主方格 (Active Cell) */}
      {/* 修改：
          1. 只有纯色填充，无边框，无阴影，无残影。
          2. 颜色是比静态块稍深一点的蓝，代表“激活”。
      */}
      {isReady && inGrid && (
        <div
          className="absolute z-10"
          style={{
            left: snappedX,
            top: snappedY,
            width: CELL,
            height: CELL,
            backgroundColor: "rgba(37, 99, 235, 0.12)", // 科技蓝填充 (Blue-600 @ 12%)
            // 简单的位移动画，没有任何发光扩散
            transition: "left 0.15s cubic-bezier(0.4, 0, 0.2, 1), top 0.15s cubic-bezier(0.4, 0, 0.2, 1)", 
          }}
        />
      )}
    </div>
  );
}
