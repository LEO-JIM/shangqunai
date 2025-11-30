"use client";

import { useState, useEffect } from "react";

export default function DynamicWords() {
  const words = [
    "减少 45% 运营成本",    //稍微加长了一点描述，显得更完整
    "每周节省 21 小时工时",
    "驱动 30% 净利润增长",
    "实现 24/7 业务自动运转",
    "提高客户满意度"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    // ⭐（1）句子打完 → 停留 → 开始删除
    if (!deleting && subIndex === words[index].length) {
      const pause = setTimeout(() => setDeleting(true), 2500); // 停留时间稍微加长到 2.5s，让老板看清楚
      return () => clearTimeout(pause);
    }

    // ⭐（2）删除完毕 → 切换单词
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // ⭐（3）打字和删除逻辑
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 100); // 稍微调快了打字速度，显得更流畅

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
    <span className="text-slate-900 inline-flex items-center">
      {/* 文字部分 */}
      <span>{words[index].substring(0, subIndex)}</span>
      
      {/* 光标部分 - 改为蓝色，高度和位置微调 */}
      <span
        className={`
          ml-1
          inline-block 
          w-[4px] 
          h-[0.9em] 
          bg-blue-600 
          align-baseline
          ${blink ? "opacity-100" : "opacity-0"}
        `}
        style={{ marginBottom: "-0.1em" }} // 微调光标底部对齐
      ></span>
    </span>
  );
}
