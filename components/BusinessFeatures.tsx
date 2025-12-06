"use client";

import React from "react";

// ... (Icons 部分保持不变，省略以节省空间) ...
const Icons = {
  // ... 保持原来的 Icon 代码 ...
  Roi: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  Stable: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="22" x2="12" y2="8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
  ),
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
  Coop: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <path d="M16 11h6" />
      <path d="M19 8v6" />
    </svg>
  ),
  Adapt: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-1.42-1.42l.88-.88a1 1 0 0 0 0-1.42l-1.88-1.88a3 3 0 0 0-4.24 0l-2 2a3 3 0 0 0 0 4.24l2.88 2.88a3 3 0 0 0 4.24 0l1-1" />
    </svg>
  ),
  Action: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
};

const BusinessFeatures: React.FC = () => {
  const features = [
    {
      title: "真实 ROI",
      icon: <Icons.Roi />,
      description:
        "不做行业报告，不堆砌工具清单，不推销科技玩具。每一处 AI 的使用都直接带来利润的增加，确保您能看到清晰、可量化的成本降低与效率提升。",
    },
    {
      title: "稳定性是基础",
      icon: <Icons.Stable />,
      description:
        "我们深知生产环境不是试验场。只采用经过市场反复验证的成熟工具与架构，不冒进追求最新最潮的模型，只追求跑得稳、不出错，保障业务连续性。",
    },
    {
      title: "数据私有",
      icon: <Icons.Security />,
      description:
        "拒绝第三方 SaaS 的云端黑盒。基于 n8n 私有化部署，确保数据 100% 留存在您的服务器内。让核心经营数据物理隔绝，安全握在自己手中。",
    },
    {
      title: "人机协作",
      icon: <Icons.Coop />,
      description:
        "AI 目前无法处理复杂决策。我们用 AI 接管枯燥的重复劳动，让它成为员工的“超强辅助”，把您的团队从低效劳动中解放出来，专注于判断与管理。",
    },
    {
      title: "全套陪伴",
      icon: <Icons.Adapt />,
      description:
        "拒绝“丢个账号就跑”。我们提供从服务器配置、流程梳理到后期维护的全套陪伴服务。您不需要懂技术，只需要提需求，剩下的交给我们。",
    },
    {
      title: "一次解决一个痛点",
      icon: <Icons.Action />,
      description:
        "不搞耗时半年的大型咨询。我们实行“单点突破”，一次只解决一个最痛的环节。先看到省了时间、有了效果，再做下一步。",
    },
  ];

  return (
    <section className="w-full py-24 px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            我们的服务特点
          </h2>
          
          {/* 修改后的副标题 */}
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            <span className="text-blue-600 font-bold">拒绝技术堆砌，回归商业本质。</span>
            <br className="md:hidden" />
            为您构建安全、稳定、ROI 高的 AI 自动化体系
          </p>

        </div>

        {/* Features Grid - 3x2 布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
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
