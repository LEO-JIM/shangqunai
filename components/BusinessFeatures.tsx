"use client";

import React from "react";

// 针对 6 个核心价值点定制的 SVG 图标
const Icons = {
  // 1. 真实 ROI -> 增长趋势/钱袋 (代表量化回报)
  Roi: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  // 2. 稳定性优先 -> 锚/盾牌 (代表稳固、不冒进)
  Stable: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  // 3. 数据安全 -> 服务器/锁 (代表自托管、私有)
  Security: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
      <path d="M15 6h.01" />
      <path d="M18 6h.01" />
    </svg>
  ),
  // 4. 人机协作 -> 用户 + 机器人 (代表分工)
  Coop: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <path d="M16 11h6" />
      <path d="M19 8v6" />
    </svg>
  ),
  // 5. 软件适应业务 -> 滑块/调节 (代表定制、适配)
  Adapt: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  ),
  // 6. 拒绝PPT -> 锤子/实干 (代表解决实际问题)
  Action: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

const BusinessFeatures: React.FC = () => {
  const features = [
    {
      title: "真实 ROI，拒绝虚假繁荣",
      icon: <Icons.Roi />,
      description:
        "不做行业报告，不堆砌工具清单。一次专注打通一个关键业务闭环，确保您能看到清晰、可量化的成本降低与效率提升。",
    },
    {
      title: "稳定性压倒一切",
      icon: <Icons.Stable />,
      description:
        "拒绝拿您的业务当实验田。只采用经过大量数据验证的成熟工具与工作流，稳稳替代重复劳动，不冒进使用不稳定的技术。",
    },
    {
      title: "数据私有，安全可控",
      icon: <Icons.Security />,
      description:
        "基于 n8n 自托管架构，确保数据 100% 留存在您的服务器内。提供长期的陪伴式维护，随业务变化实时优化，不仅好用，更要安全。",
    },
    {
      title: "人机协作，各司其职",
      icon: <Icons.Coop />,
      description:
        "没有 AI 能完全接管一个岗位。让 AI 吞噬枯燥的重复杂事，把您的团队从低效劳动中解放出来，专注于判断、创意与高价值产出。",
    },
    {
      title: "让软件迁就业务",
      icon: <Icons.Adapt />,
      description:
        "拒绝“丢个模板就跑”的交付。所有流程均围绕您的业务现状定制，最大程度保留团队习惯，通过平滑过渡，让系统真正融入业务。",
    },
    {
      title: "小步快跑，拒绝 PPT 革命",
      icon: <Icons.Action />,
      description:
        "我们不是大型咨询公司，也不是大科技公司的售前团队。一次解决一个痛点，改好一个再做下一个，用实实在在的落地成果推动升级。",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            我们的核心承诺
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            用最务实的方式，为您构建安全、稳定、以人为本的自动化体系
          </p>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            从技术选型到落地交付，我们坚持 6 项基本原则。
          </p>
        </div>

        {/* Features Grid - 3x2 布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              // 交互：Hover 时边框变蓝，阴影加深
              className="group bg-white border border-gray-100 rounded-3xl p-8 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                 {/* 图标区域 */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* 装饰线条 */}
                <div className="mt-2 h-1 w-12 bg-gray-200 rounded-full group-hover:bg-blue-600 group-hover:w-20 transition-all duration-300"></div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              {/* 描述部分 */}
              <p className="text-slate-600 leading-relaxed text-sm">
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
