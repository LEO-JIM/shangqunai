"use client";

import React from "react";

const steps = [
  {
    step: "01",
    title: "业务梳理与诊断",
    desc: [
      {
        head: "精准定位痛点",
        text: "抛开技术术语，我们直接深入您的业务逻辑，找出那些最费人工、最容易出错的“卡顿”环节。",
      },
      {
        head: "筛选高价值场景",
        text: "不为了自动化而自动化。我们只挑选那些能立竿见影、为您真正省钱省时的流程入手。",
      },
    ],
  },
  {
    step: "02",
    title: "流程可视化设计",
    desc: [
      {
        head: "业务逻辑透明化",
        text: "利用 Excalidraw 将您脑海中的业务流程画成清晰的导图。数据怎么流、AI 哪里介入，一眼便知。",
      },
      {
        head: "确认执行标准",
        text: "在开发之前，先理清规则。确保每一个步骤的判断逻辑都符合您的实际业务要求，没有模糊地带。",
      },
    ],
  },
  {
    step: "03",
    title: "方案确认与定稿",
    desc: [
      {
        head: "所见即所得",
        text: "以确认好的蓝图为准，您满意了我们再动手。从源头上消除“需求做偏了”的风险。",
      },
      {
        head: "预算不浪费",
        text: "拒绝无效开发。每一笔投入都有明确的对应功能，确保交付的正是您需要的，没有隐形消费。",
      },
    ],
  },
  {
    step: "04",
    title: "私有化部署交付",
    desc: [
      {
        head: "数据绝对安全",
        text: "基于 n8n 实现私有化部署。系统跑在您自己的服务器或电脑上，核心数据绝不外泄。",
      },
      {
        head: "像员工一样稳定",
        text: "我们交付的不是一堆冷冰冰的代码，而是一个经过反复测试、能 24 小时稳定干活的自动化系统。",
      },
    ],
  },
  {
    step: "05",
    title: "持续优化与陪跑",
    desc: [
      {
        head: "越用越聪明",
        text: "上线只是开始。我们会根据实际运行情况，帮您调整 AI 的指令，让它处理得越来越准确。",
      },
      {
        head: "长期技术伙伴",
        text: "随着您业务的发展，我们可以随时为您扩展新的自动化能力，做您长期的技术后盾。",
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
            从痛点诊断到持续陪跑，我们用标准化的流程，确保交付结果的确定性。
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
