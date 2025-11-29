"use client";

import React from "react";

const steps = [
  {
    title: "阶段 1：AI 咨询（流程梳理）",
    desc: [
      "梳理你的业务流程，找出最费时间、最容易出错的环节。",
      "给出 AI 能落地的优先级清单。",
    ],
  },
  {
    title: "阶段 2：小范围部署（试点落地）",
    desc: [
      "选一个最小、最容易见效的流程作为试点。",
      "用 AI + n8n 构建可运行的小流程，实现可见的提效。",
    ],
  },
  {
    title: "阶段 3：反馈与优化（逐步扩展）",
    desc: [
      "流程跑稳后优化逻辑，让系统更顺畅、更稳定。",
      "按优先级逐步扩展到更多流程，形成自动化体系。",
    ],
  },
];

const BusinessProcess: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        ⭐ AI 自动化咨询 · 标准服务流程
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="rounded-3xl p-8 bg-white/70 backdrop-blur shadow-sm border border-gray-100 text-gray-700 leading-relaxed"
          >
            <h3 className="text-xl font-semibold mb-4">{s.title}</h3>
            <ul className="space-y-2">
              {s.desc.map((d, i) => (
                <li key={i}>· {d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessProcess;
