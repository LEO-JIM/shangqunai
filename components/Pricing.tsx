"use client";

import React from "react";

// 简单的对号图标
const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// 定义标准的 5 步流程 (作为高价值基石展示)
const standardSteps = [
  "1. 业务梳理与诊断", // 听起来比“梳理”更有深度
  "2. 流程可视化设计", // 加了“蓝图”，听起来像资产
  "3. 方案确认与定稿",
  "4. 私有化部署交付", // 强调安全价值
  "5. 持续优化与陪跑"
];

const pricingPlans = [
  {
    // M-A-G-I-C 命名：时间(7天) + 目标(效率) + 容器(冲刺) [cite: 2304]
    name: "7天极速效率冲刺", 
    subtitle: "针对单一核心痛点的“手术式”解决",
    price: "¥8,999",
    period: "/月",
    scarcity: "每月仅限 5 个名额", // 稀缺性 
    description: "别让繁琐的小事拖慢你的脚步。我们用一周时间，彻底消灭你最头痛的一个人工流程。",
    features: [
      "每月定制开发 1 个标准自动化工作流",
      "包含价值 ¥5,000 的业务诊断服务", // 价值堆叠 [cite: 2006]
      "工作日 24h 内快速响应支持",
      "交付员工操作手册 (SOP) 与录屏培训",
      "月度运行数据与 ROI 报告"
    ],
    // 风险逆转：条件式服务保证 
    guarantee: "🛡️ 落地保证：如果流程无法跑通，我们免费修复直到成功。",
    cta: "抢占本月名额",
    popular: false,
  },
  {
    // M-A-G-I-C 命名：目标(增长) + 容器(引擎)
    name: "全自动增长引擎",
    subtitle: "替代 3 人团队的数字化生产力",
    price: "¥59,999",
    period: "/月",
    scarcity: "每月仅限 3 家企业", // 稀缺性
    description: "打通销售、客服、交付全链路。不仅是省钱，更是构建一套并在您睡觉时也能自动赚钱的系统。",
    features: [
      "每月交付 3 个复杂跨系统工作流",
      "n8n 私有化部署与服务器全托管 (价值 ¥2w/年)", // 价值堆叠
      "专属 VIP 微信群 (7x12h 极速响应)",
      "深度集成 CRM / ERP / 飞书 / 企微",
      "包含所有基础版权益"
    ],
    // 风险逆转：强力服务保证
    guarantee: "🛡️ 结果保证：如果我们没有为您节省承诺的时间/人力，下一月服务免费。",
    cta: "申请合作伙伴",
    popular: true, // 推荐款
  },
  {
    // M-A-G-I-C 命名：头像(企业) + 容器(基建)
    name: "企业数字资产私有化",
    subtitle: "为行业领袖构建不可复制的竞争壁垒",
    price: "定制化",
    period: "",
    scarcity: "需审核资格", // 另一种形式的稀缺性 [cite: 1863]
    description: "拥有完全属于您自己的 AI 大脑。数据100%私有，源码全交付，构建企业核心资产。",
    features: [
      "按需定制的无限量开发配额",
      "企业级 RAG (私有知识库) 构建",
      "核心源码 100% 移交 (Source Code)", // 核心高价值点
      "季度战略规划与全员 AI 实操培训",
      "由创始人亲自监督架构设计"
    ],
    // 反向保证 (Anti-Guarantee) 
    guarantee: "🔒 源码交付，概不退款：我们要的是长期共赢的战友。",
    cta: "预约战略咨询",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full py-24 px-6 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* 头部文案 - 结合 Hormozi 的“Value”理念 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            AI 自动化合作伙伴方案
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            我们不卖软件，我们提供<span className="text-slate-900 font-bold">可量化的结果</span>。
            <br className="hidden md:block" />
            用不到一个员工的成本，为您构建一套不知疲倦的自动化增长系统。
          </p>
        </div>

        {/* 三个套餐卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col h-full ${
                plan.popular
                  ? "bg-white ring-4 ring-blue-600/20 border-2 border-blue-600 shadow-2xl z-10 scale-105" // 视觉上更突出
                  : "bg-white border border-gray-200 shadow-sm hover:shadow-xl"
              }`}
            >
              {/* 推荐标签 */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </div>
              )}

              {/* 头部信息 */}
              <div className="mb-6 border-b border-gray-100 pb-6">
                <div className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wide">
                  {plan.scarcity}
                </div>
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

              {/* 核心板块：标准 5 步流程 (所有套餐都包含 - 价值堆叠) */}
              <div className="mb-6 bg-slate-50/80 rounded-xl p-5 border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  包含核心落地系统 (价值 ¥10k+)
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
                  以及以下专属权益
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
                {/* 风险逆转 Guarantee */}
                <div className="mb-6 p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-xs text-blue-800 font-semibold leading-relaxed text-center">
                    {plan.guarantee}
                  </p>
                </div>

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
