"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* 1. 公司品牌信息 */}
          <div className="col-span-1">
            <h2 className="text-white text-2xl font-bold mb-4 tracking-tight">
              商群
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              广州商群人工智能科技有限公司
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              专注于通过 AI 与自动化技术为企业构建智能工作流，释放团队潜能，实现真实的降本增效。
            </p>
          </div>

          {/* 2. 核心导航 (精简版) */}
          <div className="flex flex-col">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              导航
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-white transition-colors">首页</Link></li>
              <li><Link href="/cases" className="text-sm hover:text-white transition-colors">客户案例</Link></li>
              <li><Link href="/#pricing" className="text-sm hover:text-white transition-colors">价格方案</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">关于我们</Link></li>
            </ul>
          </div>

          {/* 3. 关注动态 (只放小红书) */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              关注动态
            </h3>
            <div className="flex space-x-4">
              {/* 小红书 Link */}
              <a 
                href="#" 
                target="_blank"
                className="group flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
              >
                {/* 小红书简单的文字标或图标模拟 */}
                <div className="bg-red-500 text-white p-1.5 rounded-md group-hover:bg-red-600 transition-colors">
                  <span className="text-xs font-bold">小红书</span>
                </div>
                <span className="text-sm">商群 AI 探索</span>
              </a>
            </div>
          </div>
        </div>

        {/* 下半部分：版权与备案 */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {currentYear} 广州商群人工智能科技有限公司. All rights reserved.</p>
            
            {/* 备案信息占位 (拿到备案号后取消注释) */}
            {/* <div className="mt-2 flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-4">
              <a href="https://beian.miit.gov.cn/" target="_blank" className="hover:text-white">
                粤ICP备xxxxxxxx号
              </a>
            </div> 
            */}
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
