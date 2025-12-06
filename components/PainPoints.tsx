"use client";

import React from "react";

// 图标组件 (保持不变)
const Icons = {
  MoneyLoss: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  HumanResource: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  BrokenLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      <line x1="12" y1="2" x2="12" y2="22" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  ),
  SlowClock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  DataSilo: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
};

const painPoints = [
  {
    id: "01",
    icon: <Icons.MoneyLoss />,
    title: "线索跟进不及时，导致客户直接流失",
    desc: [
      "高成本引流带来的客户，因非工作时间无人响应而错失商机。",
      "缺乏自动分发机制，线索在内部流转滞后，无法即时触达销售。",
      "结果：客户失去耐心转向竞对，获客成本无法转化为实际收益。",
    ],
  },
  {
    id: "02",
    icon: <Icons.HumanResource />,
    title: "核心员工花费大量时间处理手工录入",
    desc: [
      "高薪聘请的核心人才，被迫将大量精力耗费在低价值的数据搬运上。",
      "手动将微信订单录入系统，不仅效率低下，且极易出现人为录入错误。",
      "结果：团队深陷繁杂事务，无暇顾及大客户开发与核心业务增长。",
    ],
  },
  {
    id: "03",
    icon: <Icons.BrokenLink />,
    title: "跨部门信息流转依赖人工，极易出错",
    desc: [
      "前端销售与后端交付信息脱节，严重依赖人工截图或拉群传话。",
      "跨部门信息流转存在时差，导致经常出现漏发货、发错票等交付事故。",
      "结果：内部沟通成本极高，且因低级错误导致客户满意度下降。",
    ],
  },
  {
    id: "04",
    icon: <Icons.DataSilo />,
    title: "软件之间数据不互通，需要重复录入",
    desc: [
      "采购了 CRM、飞书、财务等多套系统，但数据互不相通，各自为政。",
      "由于系统割裂，同一份客户信息需要在不同平台重复录入多次。",
      "结果：虽然购买了 AI 软件，但实际工作流程依然是碎片化、纯手动的。",
    ],
  },
  {
    id: "05",
    icon: <Icons.SlowClock />,
    title: "业务数据更新滞后，无法实时监控风险",
    desc: [
      "关键业务指标（如库存预警、VIP 投诉）反馈滞后，往往事后才知情。",
      "缺乏实时的业务监控体系，管理者无法第一时间掌握经营异常。",
      "结果：看不见潜在风险，错过了解决问题的最佳时机。",
    ],
  },
];

const PainPoints: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-8 bg-white border-b border-gray-100">
      {/* 修改点 1: max-w-6xl 改为 max-w-7xl，让容器更宽 */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            您的利润，正在这 <span className="text-blue-600">5 个“隐形漏洞”</span>中悄悄流失
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            如果不解决数据流转和人工效率的问题，再好的业务模式也跑不快。
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((item, idx) => (
            <div
              key={idx}
              // 修改点 2: p-8 改为 px-6 py-8。保持垂直空间，但减少左右内边距，给文字腾地方
              className="group relative bg-white rounded-2xl px-6 py-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
            >
              {/* Number */}
              <div className="absolute top-4 right-6 text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none select-none">
                {item.id}
              </div>

              {/* Icon & Title */}
              <div className="relative z-10 mb-6">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                {/* 修改点 3: 移除了 pr-4，避免右侧无意义的留白挤压标题空间；添加 tracking-tight 稍微收紧字间距 */}
                <h3 className="text-lg font-bold text-slate-900 leading-tight tracking-tight">
                  {item.title}
                </h3>
              </div>
              
              {/* Descriptions */}
              <ul className="relative z-10 space-y-4">
                {item.desc.map((d, i) => {
                  const isResult = i === item.desc.length - 1; 

                  return (
                    <li 
                      key={i} 
                      className={`flex items-start text-sm leading-relaxed ${
                        isResult 
                          ? "font-bold text-slate-900 mt-2 pt-3 border-t border-dashed border-gray-200" 
                          : "text-slate-600"
                      }`}
                    >
                      {/* 图标/圆点 */}
                      {!isResult && (
                        <span className="mt-1.5 mr-2.5 min-w-[6px] h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-400 transition-colors"></span>
                      )}
                      
                      {isResult && (
                        <svg 
                          className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      )}
                      
                      {d}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Card 6: CTA */}
          <div className="
            relative group cursor-pointer
            flex flex-col justify-center items-center 
            px-6 py-8 rounded-2xl 
            bg-slate-900 
            text-white text-center 
            shadow-xl 
            transition-all duration-300 ease-out
            hover:-translate-y-2 
            hover:shadow-2xl hover:shadow-blue-600/30
            hover:bg-slate-800
            border border-slate-800 hover:border-blue-500/50
          ">
            {/* CTA 同样改为了 px-6 py-8 以保持大小一致 */}
            <h3 className="text-xl font-bold mb-4 group-hover:text-blue-200 transition-colors">
              别让这些低级损耗<br/>浪费宝贵的运营预算
            </h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              看我们如何用 AI 把这些“漏洞”补上。
            </p>
            {/* 箭头动画 */}
            <div className="animate-bounce mt-2 p-2 rounded-full bg-slate-800 group-hover:bg-blue-600 transition-colors duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <p className="text-xs text-slate-500 mt-4 uppercase tracking-widest group-hover:text-blue-300 transition-colors">
              查看 AI 自动化止损方案
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
