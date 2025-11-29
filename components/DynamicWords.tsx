"use client";

import { useState, useEffect } from "react";

export default function DynamicWords() {
  const words = [
    "workflow efficiency",
    "automation",
    "AI productivity",
    "scalable systems",
    "smart operations"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="transition-opacity duration-500 ease-in-out text-purple-600">
      {words[index]}
    </span>
  );
}
