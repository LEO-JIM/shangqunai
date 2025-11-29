"use client";

import { useState, useEffect } from "react";

export default function BackgroundGrid() {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  // 网格单元大小
  const cellSize = 60;

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // 让 hover 方块吸附到网格对齐位置
  const snappedX = Math.floor(mouse.x / cellSize) * cellSize;
  const snappedY = Math.floor(mouse.y / cellSize) * cellSize;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* ⭐ Layer 1: 背景淡紫色网格（右上角 + 对角线淡出） */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(180,0,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(180,0,255,0.15) 1px, transparent 1px)",
          backgroundSize: `${cellSize}px ${cellSize}px`,
          maskImage:
            "linear-gradient(135deg, black 0%, black 40%, transparent 60%)",
          WebkitMaskImage:
            "linear-gradient(135deg, black 0%, black 40%, transparent 60%)",
          opacity: 0.35,
        }}
      ></div>

      {/* ⭐ Layer 2: 鼠标经过的方格高亮 */}
      <div
        className="absolute rounded-none"
        style={{
          width: cellSize,
          height: cellSize,
          left: snappedX,
          top: snappedY,
          background: "rgba(180,0,255,0.20)",
          transition: "background 0.1s ease-out",
        }}
      ></div>
    </div>
  );
}
