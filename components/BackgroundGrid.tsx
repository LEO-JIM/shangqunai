"use client";

import { useState, useEffect, useRef } from "react";

type Highlight = { col: number; row: number };

interface Props {
  highlights?: Highlight[];
}

const CELL = 100; // 网格大小

export default function BackgroundGrid({ highlights = [] }: Props) {
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  
  // 使用 footprints 数组来存储“足迹”
  const [footprints, setFootprints] = useState<{ x: number; y: number; id: number }[]>([]);
  
  // 使用 Ref 记录上一次的网格坐标，避免在同一个格子里晃动时重复添加
  const lastPosRef = useRef({ x: -1, y: -1 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    setViewport({ w, h });

    const handleMove = (e: MouseEvent) => {
      // 1. 计算当前的网格坐标
      const currentGridX = Math.floor(e.clientX / CELL) * CELL;
      const currentGridY = Math.floor(e.clientY / CELL) * CELL;

      // 逻辑判定：只在右上区域产生交互
      const inRightTop = e.clientX > w * 0.3 && e.clientY < h * 0.65;

      if (inRightTop) {
        // 2. 只有当鼠标进入了一个“新格子”时，才添加足迹
        if (currentGridX !== lastPosRef.current.x || currentGridY !== lastPosRef.current.y) {
          lastPosRef.current = { x: currentGridX, y: currentGridY };

          setFootprints((prev) => {
            // 保持数组精简，最多保留 20 个足迹，避免性能问题
            const newFootprints = [
              ...prev.slice(-20), 
              { x: currentGridX, y: currentGridY, id: Date.now() + Math.random() }
            ];
            return newFootprints;
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [viewport.w, viewport.h]);

  // 定期清理过期的足迹（可选，依靠 key 变化和 slice 其实已经够了，但为了严谨可以清理）
  useEffect(() => {
    const interval = setInterval(() => {
      setFootprints((prev) => {
        const now = Date.now();
        // 移除 2 秒前的足迹，保持 DOM 轻量
        return prev.filter(f => now - Math.floor(f.id) < 2000);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* 1. 基础网格线 (中性灰，保持工程感) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px)",
          backgroundSize: `${CELL}px ${CELL}px`,
          maskImage:
            "radial-gradient(circle at 100% 0%, white 0%, white 35%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(circle at 100% 0%, white 0%, white 35%, transparent 65%)",
        }}
      />

      {/* 2. 静态高亮方格 (默认显示的格子) - 淡蓝色 */}
      {highlights.map((h, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            left: h.col * CELL,
            top: h.row * CELL,
            width: CELL,
            height: CELL,
            backgroundColor: "rgba(59, 130, 246, 0.05)", // 淡蓝 (Blue-500 @ 5%)
          }}
        />
      ))}

      {/* 3. 动态足迹 (Footprints) 
          - 鼠标经过时产生
          - 瞬间出现 (无 transition delay)
          - 自动淡出 (CSS animation)
      */}
      {footprints.map((f) => (
        <div
          key={f.id}
          // 这里使用 tailwind 的 animate-fadeOut，或者自定义 style animation
          className="absolute animate-fadeOut"
          style={{
            left: f.x,
            top: f.y,
            width: CELL,
            height: CELL,
            // 样式修改：纯色填充，无边框，无光晕
            backgroundColor: "rgba(37, 99, 235, 0.15)", // 科技蓝填充 (Blue-600 @ 15%)
          }}
        />
      ))}
      
      {/* 补充：如果没有定义 tailwind animate-fadeOut，这里是一个内联样式的兜底写法 
          (实际项目中建议在 tailwind.config.js 配置 keyframes)
      */}
      <style jsx global>{`
        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-fadeOut {
          animation: fadeOut 1.5s forwards; /* 1.5秒内慢慢消失 */
        }
      `}</style>
    </div>
  );
}
