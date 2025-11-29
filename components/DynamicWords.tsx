"use client";

import { useState, useEffect } from "react";

export default function DynamicWords() {
  const words = [
    "减少 45% 成本",
    "每周节省 21 小时",
    "驱动 30% 利润增长",
    "提高客户满意度"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1200); // 停顿时间也加长
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // ⭐ 打字速度变慢了
    const typingSpeed = deleting ? 80 : 180;

    const timer = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [subIndex, deleting, index, words]);

  useEffect(() => {
    const timer = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"}`}>|</span>
    </span>
  );
}
