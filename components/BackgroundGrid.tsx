"use client";

import { useState, useEffect } from "react";

export default function BackgroundGrid() {
  const cellSize = 100; // 网格大小更大
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // 对齐到网格
  const snapX = Math.floor(pos.x / cellSize) * cellSize;
  const snapY = Math.floor(pos.y / cellSize) * cellSize;

  // 检查鼠标是否在“右上网格区域”
  const isInGrid =
    // 判断鼠标是否在右上角区域（x 越大越右，y 越小越上）
    pos.x + pos.y < window.innerWidth * 0.8; // 这是一个右上区域的判定方法，可调

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      {/* ⭐ 网格（右上角 + 斜线淡出） */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(180,0,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(180,0,255,0.15) 1px, transparent 1px)",
          backgroundSize: `${cellSize}px ${cellSize}px`,

          // ⭐ 关键：左下 → 右上 方向淡出（符合你的要求）
          maskImage:
            "linear-gradient(225deg, black 0%, black 45%, transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(225deg, black 0%, black 45%, transparent 70%)",

          opacity: 0.35,
        }}
      ></div>

      {/* ⭐ 鼠标经过的方格渐变光效（只在右上网格区域显示） */}
      {isInGrid && (
        <div
          className="absolute"
          style={{
            width: cellSize,
            height: cellSize,
            left: snapX,
            top: snapY,

            // ⭐ 柔和渐变，而不是突然变色
            background: `
              radial-gradient(
                circle at center,
                rgba(180,0,255,0.25) 0%,
                rgba(180,0,255,0.15) 40%,
                transparent 90%
              )
            `,

            transition: "all 0.20s ease-out",
          }}
        ></div>
      )}
    </div>
  );
}
