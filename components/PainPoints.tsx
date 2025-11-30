"use client";

import React from "react";

// 定义简单的 SVG 图标组件 (保持不变)
const Icons = {
  Alert: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  UserX: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="18" y1="8" x2="23" y2="13" />
      <line x1="23" y1="8" x2="18" y2="13" />
    </svg>
  ),
  Layers: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  Cursor: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <path d="m13 13 6 6" />
    </svg>
  ),
  Clock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

const painPoints = [
  {
    id: "01",
    icon: <Icons.Alert />,
    title: "想用 AI，但完全不知道从哪里开始",
    desc: [
      "概念听了很多，但一落到自己业务上就束手无策。",
      "分不清哪些工作能用 AI 做、哪些绝对不能做。",
      "知道 AI 很强，但不知道它能具体帮你什么。",
    ],
  },
  {
    id: "02",
    icon: <Icons.UserX />,
    title: "请员工太贵，不请又做不动",
    desc: [
      "一个懂技术的人年薪百万，招了也不一定懂业务。",
      "外包担心沟通慢、不稳定、做出来没人用。",
      "最后只能自己硬撑，但事情越积越多，越做越乱。",
    ],
  },
  {
    id: "03",
    icon: <Icons.Layers />,
    title: "AI 只用在表面，没用在刀刃上",
    desc: [
      "用 AI 写文案、总结资料，但这些对利润提升非常有限。",
      "真正费时费力、影响交付的流程，从来没人系统化优化。",
      "你知道能更高效，但不知道 AI 的“深层用法”怎么落地。",
    ],
  },
  {
    id: "04",
    icon: <Icons.Cursor />,
    title: "工具买了不少，但团队就是不用",
    desc: [
      "软件再强，也比不上“打开就能跑的一键按钮”。",
      "员工觉得麻烦、怕操作错、培训了也记不住。",
      "最后还是回到老路：手动做、效率低、错误多。",
    ],
  },
  {
    id: "05",
    icon: <Icons.Clock />,
    title: "每天被大量“小事”拖住，核心工作做不动",
    desc: [
      "复制粘贴、写重复报告、整理数据占掉大部分时间。",
      "看似都在忙，但忙的都是低价值、耗时间的事。",
      "越忙越乱，越乱越忙，效率迟迟上不来。",
    ],
  },
];

const PainPoints: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-8 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            AI 时代，遏制企业增长的<span className="text-blue-600"> 5 个隐形痛点</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            如果您在业务中感到阻力，很可能是陷入了以下困局。
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
            >
              {/* Decorative Number Background */}
              <div className="absolute top-4 right-6 text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none select-none">
                {item.id}
              </div>

              {/* Icon & Title */}
              <div className="relative z-10 mb-6">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight pr-4">
                  {item.title}
                </h3>
              </div>
              
              {/* Bullets */}
              <ul className="relative z-10 space-y-3">
                {item.desc.map((d, i) => {
                  const isLast = i === item.desc.length - 1;
                  return (
                    <li 
                      key={i} 
                      className={`flex items-start text-sm leading-relaxed ${
                        isLast 
                          ? "font-semibold text-slate-800 mt-4 pt-4 border-t border-gray-100" 
                          : "text-slate-600"
                      }`}
                    >
                      {!isLast && (
                        <span className="mt-1.5 mr-2.5 min-w-[6px] h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-400 transition-colors"></span>
                      )}
                      
                      {/* 修改部分：用 SVG 图标代替字符，strokeWidth={3} 加粗 */}
                      {isLast && (
                        <svg 
                          className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                      
                      {d}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Card 6: The Solution */}
          <div className="
            relative group cursor-pointer
            flex flex-col justify-center items-center 
            p-8 rounded-2xl 
            bg-slate-900 
            text-white text-center 
            shadow-xl 
            transition-all duration-300 ease-out
            hover:-translate-y-2 
            hover:shadow-2xl hover:shadow-blue-600/30
            hover:bg-slate-800
            border border-slate-800 hover:border-blue-500/50
          ">
            <h3 className="text-xl font-bold mb-4 group-hover:text-blue-200 transition-colors">
              这些问题，<br/>也是我们的出发点
            </h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              别让技术障碍成为发展瓶颈。<br/>我们提供务实的 AI 自动化方案，从根源解决效率难题。
            </p>
            {/* 箭头动画 */}
            <div className="animate-bounce mt-2 p-2 rounded-full bg-slate-800 group-hover:bg-blue-600 transition-colors duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <p className="text-xs text-slate-500 mt-4 uppercase tracking-widest group-hover:text-blue-300 transition-colors">
              下滑查看解决方案
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
