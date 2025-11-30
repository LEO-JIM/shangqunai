"use client";

import React from "react";

// 简单的对号图标
const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// 标准5步流程
const standardSteps = [
  "1. 业务梳理与诊断",
  "2. 流程可视化设计",
  "3. 方案确认与定稿",
  "4. 私有化部署交付",
  "5. 持续优化与陪跑"
];

const pricingPlans = [
  {
    name: "标准协作版",
    subtitle: "适合业务场景单一，需要快速实现自动化的团队",
    price: "¥8,999",
    period: "/月",
    description: "每月稳步推进一个核心业务场景的自动化升级。",
    features: [
      "每月定制开发 1 个标准自动化工作流",
      "n8n 私有化部署与服务器全托管",
      "工作日 24h 内快速响应支持",
      "交付详细操作文档 + 专属录屏教程",
      "月度运行数据报告"
    ],
    guarantee: null,
    cta: "开始咨询",
    popular: false,
  },
  {
    name: "深度增长版",
    subtitle: "适合业务复杂，需要深度技术介入的企业",
    price: "¥59,999",
    period: "/月",
    description: "处理跨系统、高复杂度的业务逻辑，提供更高级别的技术保障。",
    features: [
      "每月交付 1 个复杂跨系统工作流",
      "n8n 私有化部署与服务器全托管",
      "7x12h 专属 VIP 急速响应",
      "包含标准版所有基础权益",
      "季度业务复盘会议"
    ],
    // 风险逆转：3个月全额退款保证
    guarantee: "🛡️ 结果承诺：若 3 个月后未达到承诺的“节省时间/人力”指标，全额退款。",
    cta: "开始咨询",
    popular: true, // 推荐款
  },
  {
    name: "企业合作伙伴", // Enterprise Partner
    subtitle: "针对特定复杂业务场景的深度定制方案",
    price: "定制化",
    period: "",
    description: "根据企业实际需求配置资源，提供从架构设计到落地的全案支持。",
    features: [
      "按需定制开发配额", // 灵活
      "企业级 RAG (私有知识库) 构建",
      "多业务线协同架构设计",
      "私有化部署 (数据完全留存本地)",
      "季度自动化战略规划" // 您要求的点
    ],
    // 定制化不需要退款保证，强调专业对口
    guarantee: null,
    cta: "开始咨询",
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
            不卖软件许可，只提供结果交付。
            <br className="hidden md:block" />
            从诊断到维护，全周期负责您的业务自动化升级。
          </p>
        </div>

        {/* 三个套餐卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col h-full ${
                plan.popular
                  ? "bg-white ring-4 ring-blue-600/20 border-2 border-blue-600 shadow-2xl z-10 scale-105"
                  : "bg-white border border-gray-200 shadow-sm hover:shadow-xl"
              }`}
            >
              {/* 推荐标签 */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  Recommended
                </div>
              )}

              {/* 头部信息 */}
              <div className="mb-6 border-b border-gray-100 pb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-500 font-medium mb-4 min-h-[40px]">
                  {plan.subtitle}
                </p>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-lg text-slate-500 font-medium">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* 核心板块：标准 5 步流程 (所有套餐都包含) */}
              <div className="mb-6 bg-slate-50/80 rounded-xl p-5 border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  包含标准 5 步落地流程
                </p>
                <ul className="space-y-2.5">
                  {standardSteps.map((step, sIdx) => (
                    <li key={sIdx} className="text-xs font-semibold text-slate-700 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2.5 flex-shrink-0"></span>
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
                      <span className="text-sm text-slate-700 font-medium leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 保证与按钮 */}
              <div className="mt-auto">
                {/* 只有有 Guarantee 的套餐才显示这个区域 */}
                {plan.guarantee && (
                  <div className="mb-6 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-xs text-blue-800 font-semibold leading-relaxed text-justify">
                      {plan.guarantee}
                    </p>
                  </div>
                )}
                
                {/* 占位符：保持高度对齐 */}
                {!plan.guarantee && (
                   <div className="mb-6 p-3 h-[60px]"></div>
                )}

                <button
                  className={`w-full py-4 px-6 rounded-xl font-bold text-sm transition-all duration-200 transform hover:-translate-y-1 ${
                    plan.popular
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700"
                      : "bg-slate-900 text-white shadow-md hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
