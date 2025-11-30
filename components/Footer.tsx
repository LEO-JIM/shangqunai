"use client";

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* === 上半部分：导航链接 === */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* 1. 品牌/简介 */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-white text-xl font-bold mb-4 tracking-tight">
              TrueHorizon
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              专注于通过 AI 与 n8n 为企业构建自动化工作流，释放团队潜能，实现真实的降本增效。
            </p>
          </div>

          {/* 2. 产品与服务 */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              产品与服务
            </h3>
            <ul className="space-y-3">
              <li><a href="/#pricing" className="text-sm hover:text-white transition-colors">定价方案</a></li>
              <li><a href="/cases" className="text-sm hover:text-white transition-colors">成功案例</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">解决方案</a></li>
            </ul>
          </div>

          {/* 3. 关于我们 */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              关于我们
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-white transition-colors">公司简介</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">联系方式</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">加入我们</a></li>
            </ul>
          </div>

          {/* 4. 社交媒体 (示例) */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              关注动态
            </h3>
            <div className="flex space-x-4">
              {/* GitHub / WeChat / Etc */}
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* === 下半部分：版权与备案 (重点在这里) === */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          
          {/* 左侧：版权信息 + 备案信息占位 */}
          <div className="mb-4 md:mb-0 flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0 text-center md:text-left">
            
            {/* 公司版权 */}
            <span>&copy; {currentYear} TrueHorizon Automation. All rights reserved.</span>
            
            {/* ================================================================
              【备案信息占位区】
              等你拿到备案号之后，把下面这段代码的注释符号 {/* ... * /} 去掉即可
              记得修改里面的号码为你自己的。
              ================================================================
            */}

            {/* START: 备案信息 (目前隐藏) */}
            {/* <div className="hidden md:block w-px h-3 bg-slate-700 mx-2"></div> 
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <a 
                href="https://beian.miit.gov.cn/" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                京ICP备88888888号-1
              </a>

              <a 
                href="http://www.beian.gov.cn/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center hover:text-white transition-colors"
              >
                <img src="/beian.png" alt="公安备案" className="w-3 h-3 mr-1" />
                <span>京公网安备 11010802020202号</span>
              </a>
            </div>
            */}
            {/* END: 备案信息 */}

          </div>

          {/* 右侧：条款链接 */}
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
