import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/lib/casesData"; 

// 图标组件
const Icons = {
  ArrowLeft: () => <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>,
};

// 定义参数类型
type Props = {
  params: Promise<{ slug: string }>;
};

// 👇 必须是 async 函数
export default async function CaseDetail({ params }: Props) {
  
  // 👇 关键：在 Next.js 15 中，必须先 await params
  const { slug } = await params;

  // 调试：在终端(不是浏览器控制台)可以看到这行打印
  console.log("正在查找 Slug:", slug);

  // 2. 查找数据
  const caseItem = CASE_STUDIES.find((c) => c.id === slug);

  // 3. 找不到则返回 404 页面
  if (!caseItem) {
    console.log("未找到数据，触发 404");
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="pt-24 pb-20 px-6 md:px-8 max-w-4xl mx-auto">
        
        {/* 返回按钮 */}
        <Link href="/cases" className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <Icons.ArrowLeft />
          返回案例列表
        </Link>

        {/* 标题区 */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4 uppercase">
            {caseItem.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight whitespace-pre-line">
            {caseItem.fullTitle}
          </h1>
        </div>

        {/* 核心数据 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {caseItem.results.map((res, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="text-3xl font-black text-slate-900 mb-2">{res.text}</div>
              <div className="text-sm text-slate-500 font-medium">{res.subtext}</div>
            </div>
          ))}
        </div>

        {/* 正文内容 */}
        <div className="prose prose-lg prose-slate max-w-none">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">背景与挑战</h3>
          <p className="text-slate-600 mb-8">{caseItem.challenge}</p>

          <h3 className="text-2xl font-bold text-slate-900 mb-6">我们的解决方案</h3>
          <p className="text-slate-600 mb-8">{caseItem.solution}</p>

          {/* n8n 图片 */}
          {caseItem.workflowImage && (
            <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-xs text-slate-500 font-mono ml-2 opacity-70">
                  n8n_workflow_v1.0.json
                </span>
              </div>
              {/* 注意：因为去掉了 use client，这里普通的 img 标签依然有效 */}
              <img 
                src={caseItem.workflowImage} 
                alt="n8n Automation Workflow" 
                className="w-full h-auto object-cover bg-white"
              />
            </div>
          )}

          {/* 步骤时间轴 */}
          <div className="bg-slate-900 text-slate-300 p-8 rounded-3xl mb-12 shadow-2xl">
            <div className="space-y-8 relative">
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-700"></div>
              {caseItem.solutionSteps.map((step, idx) => (
                <div key={idx} className="relative pl-12">
                  <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 
                    ${idx === 0 ? 'bg-blue-600' : idx === 1 ? 'bg-purple-600' : 'bg-green-600'}`}>
                    {idx + 1}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部 CTA */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center mt-12">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            想要同款自动化系统？
          </h3>
          <a href="/#pricing" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
            查看价格方案
          </a>
        </div>

      </div>
    </main>
  );
}
