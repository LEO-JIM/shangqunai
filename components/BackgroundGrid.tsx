"use client";

import { useState, useEffect } from "react";

export default function BackgroundGrid() {
  const cell = 100;

  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [viewport, setViewport] = useState({ w: 0, h: 0 });

  // ⭐ 残影数组
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>(
    []
  );

  // ⭐ 默认高亮 4 个格子
  const defaultHighlights = [
    { x: 5 * cell, y: 2 * cell },
    { x: 7 * cell, y: 4 * cell },
    { x: 8 * cell, y: 1 * cell },
    { x: 6 * cell, y: 3 * cell },
  ];

  useEffect(() => {
    setViewport({ w: window.innerWidth, h: window.innerHeight });

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // ⭐ 生成残影（多一个淡紫色格子，延迟淡出）
      setTrails((prev) => [
        ...prev,
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ]);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // 对齐到网格
  const snap = (v: number) => Math.floor(v / cell) * cell;
  const snapX = snap(pos.x);
  const snapY = snap(pos.y);

  const isReady = viewport.w > 0;

  // ⭐ 右上角区域判定
  const isInGrid = isReady && pos.x > viewport.w * 0.3 && pos.y < viewport.h * 0.7;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      {/* ⭐ 右上角大网格（顶部完全对齐 header） */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(180,0,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(180,0,255,0.12) 1px, transparent 1px)",
          backgroundSize: `${cell}px ${cell}px`,
          maskImage:
            "linear-gradient(225deg, white 0%, white 45%, transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(225deg, white 0%, white 45%, transparent 70%)",
          opacity: 0.35,
          top: "0px", // ⭐ 和 header 顶部完全对齐
        }}
      ></div>

      {/* ⭐ 默认浅色高亮格子 */}
      {defaultHighlights.map((h, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: h.x,
            top: h.y,
            width: cell,
            height: cell,
            background: `
              radial-gradient(
                circle at center,
                rgba(180,0,255,0.15) 0%,
                rgba(180,0,255,0.12) 40%,
                transparent 100%
              )
            `,
          }}
        ></div>
      ))}

      {/* ⭐ 移动光效（新版，超级跟手 + 科技感） */}
      {isReady && isInGrid && (
        <div
          className="absolute"
          style={{
            left: snapX,
            top: snapY,
            width: cell,
            height: cell,
            background: `
              radial-gradient(
                circle,
                rgba(180,0,255,0.35) 0%,
                rgba(180,0,255,0.20) 40%,
                rgba(180,0,255,0.08) 70%,
                transparent 100%
              )
            `,
            filter: "blur(2px)", // ⭐ 更科技的发光
            transition: "left 0.05s ease-out, top 0.05s ease-out",
          }}
        ></div>
      )}

      {/* ⭐ 残影效果（自动淡出 + 渐变，更科技） */}
      {trails.map((t) => {
        const tx = snap(t.x);
        const ty = snap(t.y);

        return (
          <div
            key={t.id}
            className="absolute animate-fadeOut"
            style={{
              left: tx,
              top: ty,
              width: cell,
              height: cell,
              background: `
                radial-gradient(
                  circle,
                  rgba(180,0,255,0.25) 0%,
                  rgba(180,0,255,0.12) 40%,
                  transparent 100%
                )
              `,
              filter: "blur(1px)",
            }}
          ></div>
        );
      })}
    </div>
  );
}
