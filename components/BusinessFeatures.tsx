"use client";

import React from "react";

// 1. 定义与 PainPoints 风格一致的 SVG 图标
const Icons = {
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Chart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  ),
  Workflow: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  ),
  Bot: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  ),
};

const BusinessFeatures: React.FC = () => {
  const features = [
    {
      title: "严选技术，拒绝跟风",
      icon: <Icons.Shield />,
      description:
        "为您过滤市场噪音。不盲目追求最新潮的 AI 模型，只为您筛选最安全、最稳定、最可控的技术方案，确保业务流转绝对可靠。",
    },
    {
      title: "中立选型，ROI 为先",
      icon: <Icons.Chart />,
      description:
        "我们不推销 SaaS，也不绑定特定软件。完全基于您的成本预算与投入产出比 (ROI)，从零筛选最适配的方案。每一分投入，都必须指向真实的效率提升。",
    },
    {
      title: "精准“手术式”自动化",
      icon: <Icons.Workflow />,
      description:
        "不推翻现有业务，不增加额外流程。我们专注于流程中的“痛点”与“堵点”，用 AI 和 n8n 进行精准替换，做减法，不做加法。",
    },
    {
      title: "打造“自驱型”AI 员工",
      icon: <Icons.Bot />,
      description:
        "将原本依赖人工的碎片化操作，封装为标准的自动化工作流。像培养一名全天候在线、零差错的远程员工一样，让 AI + n8n 接管繁琐事务。",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            我们的核心价值
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            用 AI + n8n，为您构建稳定、安全、以人为本的业务自动化体系
          </p>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            拒绝技术堆砌，只做真实落地的降本增效。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              // 交互升级：Hover 时边框变蓝，阴影加深
              className="group bg-white border border-gray-100 rounded-3xl p-8 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                 {/* 图标区域：淡蓝色背景 + 科技蓝图标 */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* 装饰线条：从黑色改为科技蓝，且 Hover 时伸长 */}
                <div className="mt-2 h-1 w-12 bg-gray-200 rounded-full group-hover:bg-blue-600 group-hover:w-20 transition-all duration-300"></div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;
