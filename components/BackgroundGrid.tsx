"use client";

import { useState, useEffect } from "react";

type Highlight = { col: number; row: number };

export default function BackgroundGrid({
  highlights = [],
}: {
  highlights?: Highlight[];
}) {
  const cell = 100;

  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [viewport, setViewport] = useState({ w: 0, h: 0 });

  const [trails, setTrails] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  useEffect(() => {
    setViewport({ w: window.innerWidth, h: window.innerHeight });

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // ⭐ 加残影，只在右上方区域
      const isRightTop =
        e.clientX > viewport.w * 0.3 && e.clientY < viewport.h * 0.7;

      if (isRightTop) {
        setTrails((prev) => [
          ...prev.slice(-20),
          { x: e.clientX, y: e.clientY, id: Date.now() },
        ]);
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [viewport]);

  const snap = (v: number) => Math.floor(v / cell) * cell;
  const snapX = snap(pos.x);
  const snapY = snap(pos.y);

  const isReady = viewport.w > 0;

  // ⭐ 右上区域判定（更严格）
  const isInGrid =
    isReady &&
    pos.x > viewport.w * 0.3 &&
    pos.y < viewport.h * 0.65;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      {/* ⭐ 灰色网格线（右上角） */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,120,120,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(120,120,120,0.10) 1px, transparent 1px)",
          backgroundSize: `${cell}px ${cell}px`,
          maskImage:
            "linear-gradient(225deg, white 0%, white 42%, transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(225deg, white 0%, white 42%, transparent 70%)",
          opacity: 0.45,
        }}
      ></div>

      {/* ⭐ 默认高亮方格（你可以自己设置） */}
      {highlights.map((h, i) => {
        const x = h.col * cell;
        const y = h.row * cell;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: x,
              top: y,
              width: cell,
              height: cell,
              background: `
                radial-gradient(
                  ellipse at center,
                  rgba(180,0,255,0.15) 0%,
                  rgba(180,0,255,0.10) 40%,
                  transparent 100%
                )
              `,
              filter: "blur(1px)",
            }}
          ></div>
        );
      })}

      {/* ⭐ 跟手光效（右上方且渐变柔和） */}
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
                ellipse at center,
                rgba(180,0,255,0.35) 0%,
                rgba(180,0,255,0.18) 40%,
                rgba(180,0,255,0.05) 75%,
                transparent 100%
              )
