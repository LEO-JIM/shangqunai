"use client";

import React, { useState } from "react";
// 引入刚才写好的弹窗组件 (请确保 components/ConsultationModal.tsx 文件存在)
import ConsultationModal from "@/components/ConsultationModal"; 

export default function Header() {
  // 控制弹窗开关的状态
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 👇 请在这里填入你的 n8n 通用咨询表单链接 (Webhook URL)
  const GENERAL_FORM_URL = "https://your-n8n-instance.com/form/general-inquiry"; 

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        
        {/* 左上 Logo - 保持不变 */}
        <a href="/" className="text-2xl font-bold tracking-tight text-slate-900 cursor-pointer">
          商群
        </a>

        {/* 右侧导航 + CTA */}
        <div className="flex items-center gap-8">

          {/* 文本导航按钮 - 保持不变 */}
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

          {/* “免费咨询”按钮 - 修改点：改为 button 并绑定点击事件 */}
          <button
            onClick={() => setIsModalOpen(true)}
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
            "
          >
            免费咨询
          </button>
        </div>
      </header>

      {/* 弹窗组件 - 放在 Header 外面 */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        formUrl={GENERAL_FORM_URL} 
      />
    </>
  );
}
