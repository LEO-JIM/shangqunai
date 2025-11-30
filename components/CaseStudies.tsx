"use client";

import React from "react";
import Link from "next/link";
// 👇 修改点 1：引入我们在第一步创建的数据文件
import { CASE_STUDIES } from "@/lib/casesData"; 

// 图标组件保持不变 (UI展示用的)
const Icons = {
  ArrowRight: () => (
    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l7-7m7-7H3" />
    </svg>
  ),
  Mail: () => (
    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  // 下面这几个图标对应数据文件里的 "clock", "money", "check"
  TrendingDown: () => (
    <svg className="w-4 h-4 text-green-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-4 h-4 text-blue-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Money: () => (
    <svg className="w-4 h-4 text-amber-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Check: () => (
    <svg className="w-4 h-4 text-green-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
};

// 👇 修改点 2：原来的 const cases = [...] 删掉了，因为数据现在在 lib/casesData.ts 里

const CaseStudies = () => {
  
  // 👇 辅助函数：把数据里的字符串 "clock" 转换成组件 <Icons.Clock />
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'clock': return <Icons.Clock />;
      case 'money': return <Icons.Money />;
      case 'check': return <Icons.Check />; // 对应你在数据里写的 "check"
      default: return <Icons.TrendingDown />;
    }
  };

  return (
    <section className="w-full px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* 头部区域 */}
        <div className="mb-16 text-center md:text-left pt-12">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">
            PROJECT SHOWCASE
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            探索我们的<span className="text-blue-600">成功案例</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            看看我们如何帮助像您一样的企业，通过 AI 自动化技术解决实际痛点，实现效率与利润的双重增长。
          </p>
        </div>

        {/* 案例卡片列表 */}
        <div className="space-y-12">
          {/* 👇 修改点 3：这里直接 map 遍历引入的 CASE_STUDIES */}
          {CASE_STUDIES.map((item) => (
            <div
              key={item.id} // 使用 item.id (如 property-management) 作为 key
              className="group relative bg-white border border-slate-200 rounded-3xl p-8 md:p-10 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              {/* 顶部标签 */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                    <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                      <Icons.Mail />
                    </div>
                    <span className="text-sm font-bold text-slate-500 tracking-wide uppercase">
                      {item.category}
                    </span>
                </div>
                <span className="hidden md:block text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                    Completed 2024
                </span>
              </div>

              {/* 标题 */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                </h3>
                <p className="text-lg font-medium text-slate-700">
                    {item.subtitle}
                </p>
              </div>

              {/* 描述与解决方案摘要 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">挑战 Challenge</p>
                    {/* 使用 description 作为列表页摘要 */}
                    <p className="text-slate-600 leading-relaxed text-sm line-clamp-3">{item.description}</p>
                </div>
                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                    <p className="text-sm font-bold text-blue-900 mb-2 uppercase tracking-wider">解决方案 Solution</p>
                    <p className="text-slate-700 leading-relaxed text-sm line-clamp-3">{item.solution}</p>
                </div>
              </div>

              {/* 底部 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-slate-100 pt-6 mt-auto gap-4">
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {/* 只展示前2个核心数据 */}
                  {item.results.slice(0, 2).map((res, i) => (
                    <div key={i} className="flex items-center text-sm font-bold text-slate-800 bg-white shadow-sm border border-slate-200 px-3 py-1.5 rounded-lg">
                      {/* 👇 修改点 4：调用辅助函数，把字符串变成图标 */}
                      {getIconComponent(res.icon)}
                      <span className="ml-2">{res.text}</span>
                    </div>
                  ))}
                </div>

                {/* 👇 修改点 5：链接完全动态化 */}
                <Link 
                  href={`/cases/${item.id}`} 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-slate-900 hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  阅读完整复盘
                  <Icons.ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
