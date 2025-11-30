"use client";

import React from "react";

// 定义图标
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
};

const cases = [
  {
    category: "房地产管理 · 客服自动化",
    title: "物业公司 AI 邮件管家系统",
    subtitle: "让 AI 接管 90% 的租户重复咨询，实现 24/7 秒级响应",
    description: "该客户管理着超过 2,000 套租赁单元，客服团队每天被大量重复的邮件淹没（如：'空调坏了'、'合同什么时候到期'、'如何支付租金'）。这导致核心业务处理缓慢，租户满意度下降。",
    solution: "我们基于 n8n + OpenAI 构建了一套自动化系统：自动识别租户邮件意图 -> 检索租赁数据库 -> 自动草拟并发送回复 -> 对于复杂维修请求自动生成工单并通知维修工。",
    results: [
      { icon: <Icons.Clock />, text: "响应时间从 24h 降至 2min" },
      { icon: <Icons.TrendingDown />, text: "客服人工介入率降低 85%" },
    ],
    // 这里可以加一个具体的案例详情页链接，如果没有就放空或 '#'
    link: "#", 
  },
  // 可以在这里复制上面的结构添加更多案例...
];

const CaseStudies = () => {
  return (
    <section className="w-full px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* 头部区域 - 更加像一个独立的 Landing Page Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 mb-6 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
              Project Showcase
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
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
                {/* 日期或状态，可选 */}
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
                {/* 数据结果 */}
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {item.results.map((res, i) => (
                    <div key={i} className="flex items-center text-sm font-bold text-slate-800 bg-white shadow-sm border border-slate-200 px-3 py-1.5 rounded-lg">
                      {res.icon}
                      <span className="ml-2">{res.text}</span>
                    </div>
                  ))}
                </div>

                {/* 按钮 */}
                <a href={item.link} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-slate-900 hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  阅读完整复盘
                  <Icons.ArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
