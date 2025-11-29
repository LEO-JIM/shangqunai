"use client";

import { useState, useEffect } from "react";

export default function BackgroundGrid() {
  const cellSize = 100;

  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [viewport, setViewport] = useState({ w: 0, h: 0 });

  // 获取屏幕宽高（只能在客户端执行）
  useEffect(() => {
    setViewport({ w: window.innerWidth, h: window.innerHeight });

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  // 如果还没有获取到 viewport（SSR 时会是 0）
  const isReady = viewport.w > 0;

  // 对齐坐标
  const snapX = Math.floor(pos.x / cellSize) * cellSize;
  const snapY = Math.floor(pos.y / cellSize) * cellSize;

  // ⭐ 判定鼠标是否在右上网格区域（屏幕对角线以上）
  const isInGrid =
    isReady && pos.x > viewport.w * 0.3 && pos.y < viewport.h * 0.7;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      {/* ⭐ 右上角网格 + 斜线淡出 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(180,0,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(180,0,255,0.15) 1px, transparent 1px)",
          backgroundSize: `${cellSize}px ${cellSize}px`,

          // ⭐ 正确的右上角 mask（左下无网格）
          maskImage:
            "linear-gradient(225deg, white 0%, white 40%, transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(225deg, white 0%, white 40%, transparent 70%)",

          opacity: 0.35,
        }}
      ></div>

      {/* ⭐ 光标 hover 高亮（渐变柔和） */}
      {isReady && isInGrid && (
        <div
          className="absolute"
          style={{
            left: snapX,
            top: snapY,
            width: cellSize,
            height: cellSize,

            background: `
              radial-gradient(
                circle at center,
                rgba(180,0,255,0.25) 0%,
                rgba(180,0,255,0.12) 60%,
                transparent 100%
              )
            `,

            transition: "all 0.25s ease-out",
          }}
        ></div>
      )}
    </div>
  );
}
