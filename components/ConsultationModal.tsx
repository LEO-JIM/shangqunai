"use client";

import React, { useEffect } from "react";

// 👇 修复点 1：在这里定义 formUrl，类型为 string
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  formUrl: string; 
}

// 👇 修复点 2：在组件参数里接收 formUrl
const ConsultationModal = ({ isOpen, onClose, formUrl }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* 弹窗主体 */}
      <div className="
        relative 
        w-full max-w-2xl h-[85vh] 
        bg-white 
        rounded-2xl 
        shadow-2xl 
        overflow-hidden 
        flex flex-col
        animate-in fade-in zoom-in-95 duration-200
      ">
        
        {/* 顶部标题栏 */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-lg font-bold text-slate-900">
            预约咨询
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

        {/* 核心内容区 */}
        <div className="flex-grow bg-slate-50 relative">
          {/* 👇 修复点 3：这里使用传入的 formUrl */}
          <iframe 
            src={formUrl} 
            className="absolute inset-0 w-full h-full border-0"
            title="Consultation Form"
          ></iframe>
        </div>
        
      </div>
    </div>
  );
};

export default ConsultationModal;
