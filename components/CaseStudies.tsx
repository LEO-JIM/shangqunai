"use client";

import React from "react";
import Link from "next/link"; // 引入 Link 组件

const Icons = {
  ArrowRight: () => (
    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
  Mail: () => (
    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
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
  )
};

const cases = [
  {
    id: "property-management", // 用于路由
    category: "物业管理 · 客服自动化",
    title: "加拿大物业公司 AI 智能邮件管家",
    subtitle: "多重身份验证 + 智能分流，实现 70% 客服自动化",
    // 摘要部分，吸引点击
    description: "客户每天面临大量租户邮件，人工回复耗时且易出错。我们需要解决的核心难题是：如何在不确定的邮件内容中精准识别租户身份，并区分'紧急'与'常规'需求。",
    solution: "构建了一套基于 n8n 的智能工作流：引入'多轮身份匹配机制'（邮箱/电话/地址），针对紧急情况（如漏水）和常规咨询（如租金）设计独立处理逻辑，并设有严格的人工兜底机制。",
    results: [
      { icon: <Icons.Clock />, text: "节省 70% 客服时间" },
      { icon: <Icons.Money />, text: "月节省成本 $2,100 CAD" },
    ],
    link: "/cases/property-management", // 指向二级详情页
  },
  // ... 其他案例
];

const CaseStudies = () => {
  return (
    <section className="w-full px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* 头部区域：已删除绿色圆点，改为极简大标题 */}
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
          {cases.map((item, idx) => (
            <div
              key={idx}
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

              {/* 标题与副标题 */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                </h3>
                <p className="text-lg font-medium text-slate-700">
                    {item.subtitle}
                </p>
              </div>

              {/* 内容描述框 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <p className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">挑战 Challenge</p>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                </div>
                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                    <p className="text-sm font-bold text-blue-900 mb-2 uppercase tracking-wider">解决方案 Solution</p>
                    <p className="text-slate-700 leading-relaxed text-sm">{item.solution}</p>
                </div>
              </div>

              {/* 底部结果与按钮 */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-slate-100 pt-6 mt-auto gap-4">
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {item.results.map((res, i) => (
                    <div key={i} className="flex items-center text-sm font-bold text-slate-800 bg-white shadow-sm border border-slate-200 px-3 py-1.5 rounded-lg">
                      {res.icon}
                      <span className="ml-2">{res.text}</span>
                    </div>
                  ))}
                </div>

                {/* 链接改为 Link 组件，指向二级页面 */}
                <Link 
                  href={item.link} 
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
