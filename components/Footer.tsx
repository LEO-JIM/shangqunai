"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* 保持 4 列布局，但内容会更紧凑 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* 1. 公司信息 (占用 2 列，保持不变) */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4 tracking-wide">
              广州商群人工智能科技有限公司
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              专注于通过 AI 与自动化技术为企业构建智能工作流，释放团队潜能，实现真实的降本增效。
            </p>
          </div>

          {/* 2. 导航 (占用 1 列，保持不变) */}
          <div className="col-span-1 md:col-span-1">
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

          {/* 3. 关注动态 (占用 1 列) */}
          {/* 修改点：去掉了 md:text-right，让它自然左对齐，紧挨着导航 */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              关注动态
            </h3>
            {/* 修改点：去掉了 md:justify-end，保持左对齐 */}
            <div className="flex space-x-4">
              {/* 小红书 Link */}
              <a 
                href="#" 
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

        {/* 下半部分：版权与备案 */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>&copy; {currentYear} 广州商群人工智能科技有限公司. All rights reserved.</p>
            {/* 备案信息占位 */}
            {/* <div className="mt-2">
              <a href="https://beian.miit.gov.cn/" target="_blank" className="hover:text-white">
                粤ICP备xxxxxxxx号
              </a>
            </div> */}
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
