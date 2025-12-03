"use client";

import React from "react";

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
    desc: "真实交付经验，确保方案可在业务中落地和长期稳定运行。",
    icon: <Icons.Handshake />,
  },
  {
    title: "全球最大付费 AI 自动化社群 (AIS+) Top 4% 贡献者",
    desc: "与北美 AI 自动化代理公司保持长期交流，掌握行业最佳实践。",
    icon: <Icons.Star />,
  },
  {
    title: "2025 AAAI（全球 AI 顶会）论文第二作者",
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
    title: "专注 B2B AI 自动化与流程重构",
    desc: "不科普科技玩具，只做能为企业真正节省人工与时间成本的交付。",
    icon: <Icons.Business />,
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-24 px-6 md:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. 顶部 Slogan */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            “让 AI 时代的技术红利，
            <br className="hidden md:block" />
            真正转化为您企业的<span className="text-blue-600">利润红利</span>。”
          </h2>
        </div>

        {/* 2. 创始人介绍布局 */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          
          {/* 左侧：精致的小窗口人像 (固定宽度) */}
          <div className="flex-shrink-0 mx-auto lg:mx-0 flex flex-col items-center lg:sticky lg:top-24">
            
            {/* 图片容器修改：
               1. 去掉了 border-4 border-white (那圈奇怪的白边)
               2. 加上了 bg-slate-100 (淡灰色底)，如果你抠图成透明PNG，这个底色会显得很高级
               3. 保持了大圆角和深阴影
            */}
            <div className="
              relative 
              w-64 h-64 
              rounded-[2rem] 
              overflow-hidden 
              shadow-2xl 
              bg-slate-100  
              transform hover:scale-105 transition-transform duration-500
            ">
              <img 
                src="/images/founder1.png" 
                alt="李述一" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* 名字与头衔 */}
            <div className="mt-8 text-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-2">李述一</h3>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                创始人 & AI 自动化架构师
              </p>
            </div>
          </div>

         {/* 右侧：核心卖点 (紧凑卡片版) */}
          <div className="flex-grow w-full">
            <div className="mb-6 border-b border-slate-100 pb-2">
              <h3 className="text-xl font-bold text-slate-900">专业背景 & 核心优势</h3>
            </div>

            {/* 修改点：
               1. gap-6 -> gap-4 (间距更紧凑)
               2. flex-col -> flex-row (图标在左，文字在右，节省高度)
               3. p-6 -> p-4 (减小内边距)
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {credentials.map((item, idx) => (
                <div 
                  key={idx} 
                  className="
                    flex items-start p-4 
                    bg-white 
                    border border-slate-100 
                    rounded-xl 
                    shadow-sm 
                    hover:shadow-md hover:border-blue-100 
                    transition-all duration-300
                  "
                >
                  {/* 图标：放在左侧，尺寸稍微调小一点 (w-10 h-10) */}
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-blue-600 border border-slate-50">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* 文字：放在右侧 */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
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
