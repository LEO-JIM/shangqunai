"use client";

import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ModalProps) => {
  // 1. 监听 ESC 键，用户按 ESC 可以关闭弹窗
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // 2. 如果状态是关闭，就不渲染任何东西
  if (!isOpen) return null;

  return (
    // 最外层容器：固定定位，层级最高 (z-50)
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      
      {/* A. 背景遮罩：半透明黑色，点击空白处关闭 */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* B. 弹窗主体：白色卡片 */}
      <div className="
        relative 
        w-full max-w-2xl h-[85vh] /* 高度设为视口的 85%，防止太长 */
        bg-white 
        rounded-2xl 
        shadow-2xl 
        overflow-hidden 
        flex flex-col
        animate-in fade-in zoom-in-95 duration-200 /* 简单的进入动画 */
      ">
        
        {/* 顶部：关闭按钮 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-lg font-bold text-slate-900">
            预约免费自动化诊断
          </h3>
          <button 
            onClick={onClose}
            className="p-2 bg-white hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 核心：iframe 嵌入 n8n 表单 */}
        <div className="flex-grow bg-slate-50 relative">
          <iframe 
            // 👇【关键】把这里换成你的 n8n 表单真实链接
            src="https://your-n8n-instance.com/form/xxxx-xxxx-xxxx" 
            className="absolute inset-0 w-full h-full border-0"
            title="Consultation Form"
          ></iframe>
        </div>
        
      </div>
    </div>
  );
};

export default ConsultationModal;
