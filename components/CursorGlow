"use client";
import { useState, useEffect } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(300px at ${pos.x}px ${pos.y}px, rgba(180,0,255,0.25), transparent 70%)`,
      }}
    />
  );
}
