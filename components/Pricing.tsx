"use client";

import React from "react";

// 定义简单的对号图标
const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const pricingPlans = [
  {
    name: "单点提效版",
    desc: "适合初次尝试，解决最痛的一个环节",
    price: "¥2,980",
    period: "/起",
    features: [
      "单个业务场景自动化",
      "包含需求诊断与设计",
      "部署 1 个 AI Agent",
      "交付后 1 个月维护",
      "不包含服务器费用",
    ],
    cta: "预约咨询",
    popular: false,
  },
  {
    name: "全流程增长版",
    desc: "打通业务闭环，彻底释放团队生产力",
    price: "¥9,800",
    period: "/起",
    features: [
      "全链路业务自动化 (3-5个节点)",
      "包含 n8n 私有化部署",
      "团队操作培训 (2 课时)",
      "季度数据监控与优化",
      "7x12小时 技术支持",
    ],
    cta: "开始构建",
    popular: true, // 标记为推荐套餐
  },
  {
    name: "企业定制版",
    desc: "针对复杂业务场景的深度解决方案",
    price: "面议",
    period: "",
    features: [
      "跨部门/跨系统深度集成",
      "私有知识库 (RAG) 搭建",
      "企业级数据安全方案",
      "年度陪伴式咨询服务",
      "源码交付与二次开发支持",
    ],
    cta: "联系我们",
    popular: false,
  },
];

const Pricing = () => {
  return (
    // 关键点：设置 id="pricing" 以便 Header 跳转
    <section id="pricing" className="w-full py-24 px-6 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* 头部文案 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            简单透明的定价方案
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            拒绝隐形消费。您可以根据业务阶段，选择最适合的切入点。
          </p>
        </div>

        {/* 三个套餐卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-slate-900 text-white shadow-2xl scale-105 border border-slate-800 z-10" // 推荐款：深色背景，稍微放大
                  : "bg-white text-slate-900 shadow-sm border border-gray-200 hover:shadow-lg" // 普通款：白底
              }`}
            >
              {/* 推荐标签 */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              {/* 标题与价格 */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.desc}
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </span>
                  <span className={`ml-1 text-sm ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* 按钮 */}
              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold text-sm mb-8 transition-colors ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                {plan.cta}
              </button>

              {/* 功能列表 */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-3 mt-0.5">
                      {/* 如果是深色卡片，图标可能需要换个颜色，这里简单处理复用 */}
                       <CheckIcon /> 
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
