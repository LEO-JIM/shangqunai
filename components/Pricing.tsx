"use client";

import React from "react";

// 简单的对号图标
const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// 定义标准的 5 步流程 (已更新为您指定的专业术语)
const standardSteps = [
  "1. 业务梳理与诊断",
  "2. 流程可视化设计",
  "3. 方案确认与定稿",
  "4. 私有化部署交付",
  "5. 持续优化与陪跑"
];

const pricingPlans = [
  {
    name: "基础协作版",
    desc: "适合单一业务场景的自动化升级",
    price: "¥8,999",
    period: "/月",
    features: [
      "每月交付 1 个标准自动化流程",
      "基础运行维护与 Bug 修复",
      "工作日邮件技术支持",
      "月度运行数据报告",
    ],
    cta: "开始合作",
    popular: false,
  },
  {
    name: "深度增长版",
    desc: "适合多部门、跨系统的深度业务整合",
    price: "¥59,999",
    period: "/月",
    features: [
      "每月交付 3 个复杂自动化流程",
      "n8n 私有化部署与服务器维护",
      "专属微信群 VIP 快速响应",
      "跨系统深度集成 (CRM/ERP/飞书)",
      "包含所有基础版权益",
    ],
    cta: "成为合作伙伴",
    popular: true, // 推荐款
  },
  {
    name: "企业合伙版",
    desc: "针对复杂需求的全案定制开发",
    price: "定制化",
    period: "",
    features: [
      "按需定制开发配额",
      "企业级知识库 (RAG) 构建",
      "源码交付与私有化部署",
      "季度战略规划与复盘会议",
      "全员 AI 技能实操培训",
    ],
    cta: "预约咨询",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full py-24 px-6 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* 头部文案 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            AI 自动化合作伙伴方案
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            我们不卖软件许可，我们提供结果交付。
            <br className="hidden md:block" />
            从诊断到维护，全周期负责您的业务自动化升级，确保每一分投入都有产出。
          </p>
        </div>

        {/* 三个套餐卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col h-full ${
                plan.popular
                  ? "bg-white ring-2 ring-blue-600 shadow-xl z-10" // 推荐款：白底蓝框
                  : "bg-white border border-gray-200 shadow-sm hover:shadow-md"
              }`}
            >
              {/* 推荐标签 */}
              {plan.popular && (
                <div className="absolute top-6 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Popular
                </div>
              )}

              {/* 标题与价格 */}
              <div className="mb-8 border-b border-gray-100 pb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-sm text-slate-500">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm text-slate-500">
                  {plan.desc}
                </p>
              </div>

              {/* 核心板块：标准 5 步流程 (所有套餐都包含) */}
              <div className="mb-6 bg-slate-50 rounded-lg p-4 border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  包含标准 5 步落地流程
                </p>
                <ul className="space-y-2">
                  {standardSteps.map((step, sIdx) => (
                    <li key={sIdx} className="text-xs font-medium text-slate-700 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2"></span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 具体权益列表 */}
              <div className="flex-grow">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  服务权益
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-0.5">
                         <CheckIcon /> 
                      </div>
                      <span className="text-sm text-slate-700 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 按钮 */}
              <button
                className={`w-full py-3 px-4 rounded-lg font-bold text-sm transition-colors mt-auto border-2 ${
                  plan.popular
                    ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700"
                    : "bg-white text-slate-900 border-slate-200 hover:border-slate-900 hover:text-slate-900"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
