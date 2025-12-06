"use client";

import React from "react";

const steps = [
  {
    step: "01",
    title: "梳理业务",
    desc: [
      {
        head: "精准定位痛点",
        text: "抛开技术术语，我们直接深入您的业务流程，找出那些用 AI 能产生最大杠杆的环节。",
      },
      {
        head: "筛选高价值场景",
        text: "不为了 AI 而 AI。我们只挑选那些 ROI 高、为您真正省钱省时的流程入手。",
      },
    ],
  },
  {
    step: "02",
    title: "设计流程",
    desc: [
      {
        head: "业务逻辑透明化",
        text: "利用画图工具将您脑海中的业务流程画成清晰的流程图。数据怎么流、AI 哪里介入，一眼便知。",
      },
      {
        head: "确认执行标准",
        text: "在开发之前，先理清交付条件。哪一些步骤被 AI 代替、能节省多少金钱和时间，在此刻就被规划清楚。",
      },
    ],
  },
  {
    step: "03",
    title: "确认方案",
    desc: [
      {
        head: "所见即所得",
        text: "以确认好的 AI 流程图为准，您满意了我们才开发。从源头上消除“需求做偏了”的风险。",
      },
      {
        head: "预算不浪费",
        text: "拒绝无效开发。每一笔投入都有明确的对应实际功能，确保交付的 AI 员工真正能为业务带来增长。",
      },
    ],
  },
  {
    step: "04",
    title: "私有化部署",
    desc: [
      {
        head: "数据绝对安全",
        text: "基于 n8n 实现私有化部署。系统跑在您自己的服务器或电脑上，核心数据绝不外泄。",
      },
      {
        head: "像员工一样稳定",
        text: "我们交付的不是一堆冷冰冰的代码，而是一个经过反复测试、能 24 小时稳定干实事的 AI 自动化系统。",
      },
    ],
  },
  {
    step: "05",
    title: "持续优化",
    desc: [
      {
        head: "越用越聪明",
        text: "上线只是起点。我们会根据真实数据，帮您优化 AI 工作流的准确性，让它越来越好用。",
      },
      {
        head: "长期技术伙伴",
        text: "随着您业务的发展，我们可以随时为您维护并扩展新的 AI 自动化流程，保护您的利润增长。",
      },
    ],
  },
];

const BusinessProcess: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-8 bg-slate-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            全链路落地流程
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            从痛点诊断到持续维护，我们用陪伴式的服务，真正用 AI 实现利润增长。
          </p>
        </div>

        {/* Flex 布局：完美实现 "上3 下2" 居中排列 */}
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="
                group relative flex flex-col p-8 rounded-3xl bg-white 
                shadow-sm border border-gray-100 
                hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 
                transition-all duration-300 overflow-hidden
                w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.4rem)]
              "
            >
              {/* Background Step Number (Watermark) */}
              <div className="absolute -top-4 -right-4 text-9xl font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-300 select-none pointer-events-none">
                {s.step}
              </div>

              {/* Header */}
              <div className="relative z-10 mb-8">
                <span className="inline-block py-1.5 px-3 rounded-lg bg-blue-600 text-white text-xs font-bold tracking-wide mb-4 shadow-sm">
                  STEP {s.step}
                </span>
                <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6 flex-grow">
                {s.desc.map((item, i) => (
                  <div key={i} className="relative pl-4">
                    {/* 左侧装饰线 */}
                    <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-slate-100 group-hover:bg-blue-100 transition-colors"></div>
                    {/* 小圆点 */}
                    <div className="absolute left-[-3px] top-2 w-2 h-2 rounded-full bg-blue-600 shadow-sm"></div>

                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {item.head}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
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
