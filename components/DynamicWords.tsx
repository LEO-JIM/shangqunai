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
    // ⭐（1）句子打完 → 停留 → 开始删除
    if (!deleting && subIndex === words[index].length) {
      const pause = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    // ⭐（2）删除完毕 → 切换单词（先换 index 再开始打字，保证不会闪现字符）
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // ⭐（3）正常打字和删除逻辑
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 70 : 170); // 删除速度 | 打字速度

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

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
      <span
  className={`
    inline-block 
    w-[2px] 
    h-[1em] 
    bg-black
    align-middle
    translate-y-[-8px] 
    ${blink ? "opacity-100" : "opacity-0"}
  `}
></span>


    </span>
  );
}
