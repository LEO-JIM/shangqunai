"use client";

import React from "react";

const steps = [
  {
    step: "01",
    title: "业务诊断与蓝图",
    sub: "Consult & Audit",
    desc: [
      {
        head: "深度梳理",
        text: "解构现有业务流程，精准定位高耗时、低产出的“瓶颈环节”。",
      },
      {
        head: "价值评估",
        text: "量化自动化潜力，输出一份具有明确优先级的《AI 落地行动清单》。",
      },
    ],
  },
  {
    step: "02",
    title: "MVP 试点落地",
    sub: "Pilot Deployment",
    desc: [
      {
        head: "最小闭环",
        text: "选取见效最快、风险最低的单一流程作为试点，降低试错成本。",
      },
      {
        head: "快速交付",
        text: "利用 n8n + AI 快速构建并上线工作流，短期内实现可见的效率提升。",
      },
    ],
  },
  {
    step: "03",
    title: "迭代优化与规模化",
    sub: "Optimize & Scale",
    desc: [
      {
        head: "数据驱动",
        text: "根据试点运行数据持续调优逻辑，确保系统的安全性与稳定性。",
      },
      {
        head: "体系构建",
        text: "基于成功经验，按优先级逐步扩展至其他模块，形成全流程自动化闭环。",
      },
    ],
  },
];

const BusinessProcess: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-8 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          AI 自动化标准实施流程
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="relative flex flex-col h-full p-8 rounded-3xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {/* Background Step Number (Watermark style) */}
              <div className="absolute -top-4 -right-4 text-9xl font-bold text-gray-50 opacity-50 select-none pointer-events-none">
                {s.step}
              </div>

              {/* Header */}
              <div className="relative z-10 mb-6">
                <span className="inline-block py-1 px-3 rounded-full bg-black text-white text-xs font-bold tracking-wide mb-3">
                  STEP {s.step}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-500 font-medium">{s.sub}</p>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-5 flex-grow">
                {s.desc.map((item, i) => (
                  <div key={i}>
                    <h4 className="text-sm font-bold text-gray-800 mb-1">
                      · {item.head}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessProcess;
