"use client";

import React from "react";

const BusinessFeatures: React.FC = () => {
  const features = [
    {
      title: "严选技术，拒绝跟风",
      description:
        "为您过滤市场噪音。不盲目追求最新潮的 AI 模型，只为您筛选最安全、最稳定、最可控的技术方案，确保业务流转绝对可靠。",
    },
    {
      title: "ROI 为先",
      description:
        "我不卖 SaaS 软件。完全基于您的成本预算与投入产出比 (ROI)，从零筛选最适配的方案。每一分投入，都必须指向真实的效率提升。",
    },
    {
      title: "精准“手术式”自动化",
      description:
        "不推翻现有业务，不增加额外流程。我们专注于流程中的“痛点”与“堵点”，用 AI 和 n8n 进行精准替换，做减法，不做加法。",
    },
    {
      title: "打造“自驱型”AI 员工",
      description:
        "将原本依赖人工的碎片化操作，封装为标准的自动化工作流。像培养一名全天候在线、零差错的远程员工一样，让 AI + n8n 接管繁琐事务。",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            我们的核心价值
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            用 AI + n8n，为您构建稳定、安全、以人为本的业务自动化体系
          </p>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            拒绝技术堆砌，只做真实落地的降本增效。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white/70 backdrop-blur shadow-sm hover:shadow-md border border-gray-100 rounded-3xl p-8 transition-all duration-300"
            >
              <div className="mb-4">
                {/* Decorative accent line */}
                <div className="h-1 w-12 bg-black rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
