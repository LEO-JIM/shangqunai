"use client";

import React from "react";
// ❌ 不需要再引入 ConsultationModal 和 useState 了

export default function Header() {
  
  // 👇 通用咨询表单链接 (Header 按钮专用)
  const GENERAL_FORM_URL = "https://n8nstorm.app.n8n.cloud/form/20056cb7-0807-4dde-b25b-6ce888c76e72"; 

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      
      {/* 左上 Logo */}
      <a href="/" className="text-2xl font-bold tracking-tight text-slate-900 cursor-pointer">
        商群
      </a>

      {/* 右侧导航 + CTA */}
      <div className="flex items-center gap-8">

        {/* 文本导航按钮 */}
        <nav className="hidden md:flex gap-6">
          <a href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            首页
          </a>
          <a href="/#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            价格
          </a>
          <a href="/cases" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            案例
          </a>
          <a href="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            关于我们
          </a>
        </nav>

        {/* “免费咨询”按钮 - 修改点：直接跳转新页面 */}
        <a
          href={GENERAL_FORM_URL}
          target="_blank"           // 在新标签页打开
          rel="noopener noreferrer" // 安全属性
          className="
            px-5 
            py-2.5 
            rounded-lg
            bg-slate-900 
            text-white 
            text-sm
            font-semibold
            shadow-sm
            hover:bg-blue-600 
            transition-all 
            duration-300
            active:scale-95
            inline-block cursor-pointer
          "
        >
          免费咨询
        </a>
      </div>
    </header>
  );
}
