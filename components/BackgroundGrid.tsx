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
          // 限制残影数量，保持页面高性能
          const next = [
            ...prev.slice(-10), // 稍微减少一点残影数量，让视觉更干练
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
      {/* 1. 基础网格线 (保持不变，使用径向遮罩确保左下角干净) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)",
          backgroundSize: `${CELL}px ${CELL}px`,
          maskImage:
            "radial-gradient(circle at 100% 0%, white 0%, white 35%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(circle at 100% 0%, white 0%, white 35%, transparent 65%)",
          opacity: 0.7,
        }}
      />

      {/* 2. 静态高亮方格 (如果有传入 highlights) */}
      {highlights.map((h, idx) => (
        <div
          key={idx}
          className="absolute border border-blue-500/30"
          style={{
            left: h.col * CELL + 1, // +1 为了让边框对齐网格内侧
            top: h.row * CELL + 1,
            width: CELL - 1,
            height: CELL - 1,
            backgroundColor: "rgba(59, 130, 246, 0.05)", // 极淡的蓝色填充
          }}
        />
      ))}

      {/* 3. 鼠标跟随的主方格 (Active Cell) */}
      {/* 去掉了 blur，改用纯色填充 + 边框，打造“选中”的实感 */}
      {isReady && inGrid && (
        <div
          className="absolute z-10"
          style={{
            left: snappedX,
            top: snappedY,
            width: CELL,
            height: CELL,
            // 样式修改重点：
            backgroundColor: "rgba(37, 99, 235, 0.2)", // 科技蓝填充，不透明度 20%
            border: "1px solid rgba(37, 99, 235, 0.6)", // 亮蓝色边框，强调边界
            boxShadow: "0 0 15px rgba(37, 99, 235, 0.15)", // 极其微弱的内发光，增加层次
            transition: "left 0.1s cubic-bezier(0, 0, 0.2, 1), top 0.1s cubic-bezier(0, 0, 0.2, 1)", // 稍微加快一点，更有机械感
          }}
        />
      )}

      {/* 4. 方格残影 (Trails) */}
      {/* 同样去掉了 blur，变成一个个逐渐消失的方块 */}
      {trails.map((t) => (
        <div
          key={t.id}
          className="absolute animate-fadeOut"
          style={{
            left: snap(t.x),
            top: snap(t.y),
            width: CELL,
            height: CELL,
            // 样式修改重点：
            backgroundColor: "rgba(37, 99, 235, 0.1)", // 更淡的蓝色
            border: "1px solid rgba(37, 99, 235, 0.2)", // 很淡的边框
            // 这是一个 CSS 动画，需要在全局 CSS 或 tailwind config 里定义 @keyframes fadeOut
            // 哪怕没有定义，它也会显示为静止的淡蓝方块
          }}
        />
      ))}
    </div>
  );
}
