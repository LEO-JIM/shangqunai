"use client";

import { useState, useEffect } from "react";

export default function DynamicWords() {
  const words = [
    "减少 45% 成本",
    "每周节省 21 小时",
    "驱动 30% 利润增长",
    "提高客户满意度"
  ];

  const [index, setIndex] = useState(0);       // 当前词语序号
  const [subIndex, setSubIndex] = useState(0); // 当前显示字数
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // ⭐ 修复“错误字符”关键点 → 删除到空后再换字
  useEffect(() => {
    if (subIndex === words[index].length && !deleting) {
      // 到句尾 → 停顿 1 秒
      setTimeout(() => setDeleting(true), 1200);
      return;
    }

    if (subIndex === 0 && deleting) {
      // ⭐ 删除完后，再切换单词（不会出现字符闪烁）
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const speed = deleting
      ? 80   // 删除速度（更慢一点，更专业）
      : 200;  // 打字速度（你要求变慢）

    const timer = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [subIndex, deleting, index, words]);

  // 光标闪烁
  useEffect(() => {
    const timer = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className={blink ? "opacity-100" : "opacity-0"}>|</span>
    </span>
  );
}
