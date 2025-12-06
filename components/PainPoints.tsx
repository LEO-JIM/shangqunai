"use client";

import React from "react";

// 图标组件 (保持刚才的“痛点型”图标，但颜色会在下方统一改为蓝色)
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
    title: "高昂获取的线索，因跟进太慢变“废料”",
    desc: [
      "投放花了几万块，客户半夜留言，第二天上班才回复。",
      "因为缺乏自动分配机制，线索躺在表格里几小时没人管。",
      "结果：客户在等待中失去了兴趣，直接转向了秒回的竞争对手。",
    ],
  },
  {
    id: "02",
    icon: <Icons.HumanResource />,
    title: "高薪员工沦为“表哥表姐”，陷在数据搬运中",
    desc: [
      "花重金请来的销售冠军或运营总监，每天花3小时做Excel。",
      "手动把微信里的订单信息，一条条复制到公司系统里。",
      "结果：核心人才的时间被低价值工作吞噬，没精力去谈大客户。",
    ],
  },
  {
    id: "03",
    icon: <Icons.BrokenLink />,
    title: "销售与交付严重脱节，全靠“截图”沟通",
    desc: [
      "前台签了单，后台财务和库房根本不知道，还得人工拉群通知。",
      "信息流转全靠截图转发，经常出现漏发货、发错票的情况。",
      "结果：内部内耗严重，客户因为“低级错误”要求退款。",
    ],
  },
  {
    id: "04",
    icon: <Icons.DataSilo />,
    title: "买了顶级 SaaS 软件，却用出了“记事本”效率",
    desc: [
      "CRM、飞书、财务系统都买了，但它们之间互不通气。",
      "每换一个平台，就要重新录入一遍客户信息。",
      "结果：软件费交了不少，工作流程依然是碎片化、纯手动的。",
    ],
  },
  {
    id: "05",
    icon: <Icons.SlowClock />,
    title: "总是“后知后觉”，错过业务关键节点",
    desc: [
      "VIP 客户投诉了，老板三天后看周报才知道。",
      "库存已经预警了，直到发不出货才发现。",
      "结果：企业缺乏实时的“神经系统”，永远在事后救火。",
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
              // 回归蓝色 hover 效果
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
            >
              {/* Number - 蓝色系 */}
              <div className="absolute top-4 right-6 text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none select-none">
                {item.id}
              </div>

              {/* Icon & Title - 蓝色系 */}
              <div className="relative z-10 mb-6">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight pr-4">
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
                          // 结果行：加粗，使用深色强调，不再用红色
                          ? "font-bold text-slate-900 mt-2 pt-3 border-t border-dashed border-gray-200" 
                          : "text-slate-600"
                      }`}
                    >
                      {/* 图标/圆点 - 蓝色系 */}
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

          {/* Card 6: CTA - 回归蓝色系 */}
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
              别让这些低级损耗<br/>吃掉你的净利润
            </h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              问题不在员工，而在流程。<br/>
              看我们如何把这些“漏洞”逐一堵上。
            </p>
            {/* 箭头动画 - 蓝色 */}
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
