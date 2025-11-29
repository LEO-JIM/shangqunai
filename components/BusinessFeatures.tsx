"use client";

import React from "react";

const BusinessFeatures: React.FC = () => {
  const bullets = [
    "我替你研究 AI 趋势，不带你跟风，只告诉你哪些 AI 能更安全、更稳定、更可控地落地，真正实现降本增效。",
    "我替你评估工具与技术，我不卖 SaaS，也不推软件；我从你的成本和 ROI 出发，为你挑出最适配、最高效的方案。",
    "我替你设计自动化，我不创造多余流程；我只用 AI 和 n8n 自动化你原有流程里重复、机械、易出错的部分。",
    "我替你发现流程中的浪费，我不“硬上 AI”；我只在最费人工、最耗时间的位置，引入合适 AI 工具减少负担，而不是增加复杂度。",
    "我替你构建 AI 员工，将稳定流程逐步优化成“能自己跑的”工作流，让 AI 与 n8n 像可靠的远程员工，24 小时运转。",
    "我替你真正用 AI 解决问题，我不是交付大而全的报告，而是从一个小痛点开始，让你直接看到时间与金钱的真实节省。",
  ];

  return (
    <section className="w-full py-24 px-6 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        业务特点
      </h2>

      <div className="max-w-4xl mx-auto rounded-3xl bg-white/70 backdrop-blur shadow-sm p-10">
        <h3 className="text-xl font-semibold mb-6">
          用 AI + n8n，为您构建稳定、安全、以人为中心的业务自动化
        </h3>
        <ul className="space-y-4 text-gray-700 leading-relaxed">
          {bullets.map((b, idx) => (
            <li key={idx}>· {b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BusinessFeatures;
