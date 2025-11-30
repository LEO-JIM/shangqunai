"use client";

import React from "react";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/casesData"; 

const Icons = {
  // 👇 修复：使用标准的“向右长箭头”，线条更清晰
  ArrowRight: () => (
    <svg className="w-4 h-4 ml-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
  Mail: () => (
    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  TrendingDown: () => <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>,
  Clock: () => <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Money: () => <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Check: () => <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
};

const CaseStudies = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'clock': return <Icons.Clock />;
      case 'money': return <Icons.Money />;
      case 'check': return <Icons.Check />;
      default: return <Icons.TrendingDown />;
    }
  };

  return (
    <section className="w-full px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* 头部区域 */}
        <div className="mb-16 text-center md:text-left pt-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            探索我们的<span className="text-blue-600">成功案例</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            看看我们如何帮助像您一样的企业，通过 AI 自动化技术解决实际痛点，实现效率与利润的双重增长。
          </p>
        </div>

        {/* 案例列表 */}
        <div className="space-y-12">
          {CASE_STUDIES.map((item) => (
            <div
              key={item.id}
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
                    Completed 2025
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

              {/* 描述与解决方案 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">挑战 Challenge</p>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                </div>
                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                    <p className="text-sm font-bold text-blue-900 mb-2 uppercase tracking-wider">解决方案 Solution</p>
                    <p className="text-slate-700 leading-relaxed text-sm">
                      {item.solution}
                    </p>
                </div>
              </div>

              {/* 底部 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-slate-100 pt-6 mt-auto gap-4">
                {/* 数据展示区域 */}
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {item.results.slice(0, 2).map((res, i) => (
                    <div key={i} className="flex items-center bg-white shadow-sm border border-slate-200 px-4 py-2 rounded-xl">
                      <div className="mr-3">
                        {getIconComponent(res.icon)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900 leading-none mb-1">{res.text}</span>
                        <span className="text-[10px] font-medium text-slate-500 uppercase tracking-tight">{res.subtext}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 链接按钮 - 核心修复 */}
                <Link 
                  href={`/cases/${item.id}`} 
                  className="
                    inline-flex items-center justify-center 
                    px-6 py-3 
                    border border-transparent 
                    text-sm font-semibold 
                    rounded-xl 
                    text-white bg-slate-900 
                    hover:bg-blue-600 
                    transition-all duration-200 
                    shadow-md hover:shadow-lg 
                    transform hover:-translate-y-0.5
                    whitespace-nowrap  /* 防止文字换行 */
                    leading-normal     /* 修复文字截断问题 */
                  "
                >
                  阅读详情
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
