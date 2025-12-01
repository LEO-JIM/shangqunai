"use client";

import React from "react";

// 定义图标组件 (保持不变)
const Icons = {
  Handshake: () => <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Star: () => <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  Academic: () => <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>,
  Badge: () => <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Math: () => <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  Business: () => <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
};

const credentials = [
  {
    title: "加拿大真实客户的长期合作伙伴",
    desc: "真实交付经验，确保方案可在业务中落地和长期运行。",
    icon: <Icons.Handshake />,
  },
  {
    title: "全球最大付费 AI 自动化社群（Skool）Top 4% 贡献者",
    desc: "与北美 AI 自动化公司保持长期交流",
    icon: <Icons.Star />,
  },
  {
    title: "2025 AAAI 全球顶会论文第二作者",
    desc: "深入理解 AI 底层推理逻辑与稳定性，为您构建更可靠的 AI 赚钱机器。",
    icon: <Icons.Academic />,
  },
  {
    title: "n8n 官方认证 Creator",
    desc: "为您设计专业、可扩展、易于维护的 AI 自动化工作流。",
    icon: <Icons.Badge />,
  },
  {
    title: "中山大学数学专业背景",
    desc: "用强逻辑拆解您的业务流程，让方案更严谨、更清晰、更可控。",
    icon: <Icons.Math />,
  },
  {
    title: "专注 B2B 自动化与流程重构",
    desc: "不做工具教学，只做能为企业真正节省人工与时间成本的交付。",
    icon: <Icons.Business />,
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-24 px-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. 顶部 Slogan */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            “让 AI 时代的技术红利，
            <br className="hidden md:block" />
            <span className="text-blue-600">真正转化为您企业的利润红利。”</span>
          </h2>
        </div>

        {/* 2. 创始人介绍布局 */}
        <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">
          
          {/* 左侧：精致的小窗口人像 (固定宽度) */}
          <div className="flex-shrink-0 mx-auto md:mx-0 flex flex-col items-center">
            
            {/* 头像容器：Apple 风格大圆角 */}
            <div className="
              relative 
              w-48 h-48 md:w-64 md:h-64 
              rounded-[2.5rem] /* Apple 风格的大圆角 */
              overflow-hidden 
              shadow-2xl 
              border-4 border-white 
              ring-1 ring-slate-100
              transform hover:scale-105 transition-transform duration-500
            ">
              <img 
                src="/images/founder.jpg" 
                alt="李述一" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* 名字与头衔 (放在照片下方，居中) */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-slate-900">李述一</h3>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mt-1">
                创始人 & AI 自动化架构师
              </p>
            </div>
          </div>

          {/* 右侧：核心卖点 (自适应宽度) */}
          <div className="flex-grow">
            <div className="mb-8 border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold text-slate-900">专业背景 & 核心优势</h3>
            </div>

            {/* 卖点列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {credentials.map((item, idx) => (
                <div key={idx} className="flex items-start group">
                  {/* 图标 */}
                  <div className="flex-shrink-0 mt-1 transition-transform group-hover:scale-110 duration-300">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 text-blue-600">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* 文字 */}
                  <div className="ml-4">
                    <h4 className="text-base font-bold text-slate-900 mb-1.5 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
