"use client";

import React from "react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* 4列布局 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* 1. 公司信息 (占用 2 列) */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4 tracking-wide">
              广州商群人工智能科技有限公司
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              专注于通过 AI 与自动化技术为企业构建智能工作流，释放团队潜能，实现真实的降本增效。
            </p>
          </div>

          {/* 2. 导航 (占用 1 列) */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              导航
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-sm hover:text-white transition-colors">首页</Link></li>
              <li><a href="/cases" className="text-sm hover:text-white transition-colors">案例</Link></li>
              <li><a href="/#pricing" className="text-sm hover:text-white transition-colors">价格</Link></li>
              <li><a href="/about" className="text-sm hover:text-white transition-colors">关于我们</Link></li>
            </ul>
          </div>

          {/* 3. 关注动态 (占用 1 列) */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              关注动态
            </h3>
            <div className="flex space-x-4">
              {/* 小红书 Link */}
              <a 
                href="https://www.xiaohongshu.com/user/profile/5d498c6c000000001602394b" 
                target="_blank"
                className="group flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
              >
                <div className="bg-red-500 text-white p-1.5 rounded-md group-hover:bg-red-600 transition-colors">
                  <span className="text-xs font-bold">小红书</span>
                </div>
                <span className="text-sm font-medium">李述一</span>
              </a>
            </div>
          </div>
        </div>

        {/* 下半部分：版权与备案 (已移除隐私政策与服务条款) */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          
          <div className="w-full text-center md:text-left flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
            <p>&copy; {currentYear} 广州商群人工智能科技有限公司. All rights reserved.</p>
            
            {/* 分隔线 (在大屏幕显示) */}
            <span className="hidden md:inline-block text-slate-700">|</span>

            {/* ICP 备案信息 */}
            <a 
              href="https://beian.miit.gov.cn/" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              粤ICP备2025491916号
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
