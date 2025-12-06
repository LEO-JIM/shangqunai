"use client";

import React from "react";

const Solutions = () => {
  return (
    <section className="w-full py-24 px-6 md:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            不仅仅是省钱，更是<span className="text-blue-600">让生意自己会自动跑起来</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            利用 <strong>n8n (24小时 AI 员工)</strong> 在后台干脏活累活，
            <br className="hidden md:block" />
            并通过 <strong>飞书 (老板的控制台)</strong> 让您在手机上随时掌控全局。
          </p>
        </div>

        <div className="space-y-8">
          
          {/* 1. 线索转化 - 痛点：花钱引流没转化 */}
          <SolutionCard 
            badge="线索转化"
            title="客户刚留言，销售的电话就打过去了"
            resultHighlight="线索浪费率降低 80%"
            desc="别让客户等冷了。广告一有留资，系统毫秒级自动分配给销售。只有在客户意向最强的那一刻联系，成交率才最高。"
            techProof="后台原理：自动对接广告平台 → 自动剔除空号/假号码 → 飞书弹窗强提醒销售 → 销售点击卡片一键拨号。"
          />

          {/* 2. 人力解放 - 痛点：高薪低能 */}
          <SolutionCard 
            badge="人力解放"
            title="别付着 2 万的工资，让人干着 3 千块的复制粘贴"
            resultHighlight="每年节省 500+ 小时无效工时"
            desc="发票录入、合同归档、订单搬运……这些枯燥的事让机器人做。把您的精英员工从表格里解放出来，让他们去谈客户、去搞钱。"
            techProof="后台原理：自动抓取邮件/文件 → 机器自动识别图片文字 → 自动填入飞书表格。不出错，不喊累。"
          />

          {/* 3. 协同交付 - 痛点：内部扯皮 */}
          <SolutionCard 
            badge="协同交付"
            title="销售刚签单，财务和库房就已经动起来了"
            resultHighlight="订单交付周期缩短 50%"
            desc="拒绝“我没看到群消息”。一旦成交，系统自动要把活派给财务、库房和实施。不是人催人，而是系统推着人走，想偷懒都不行。"
            techProof="后台原理：监控销售签单状态 → 自动给各部门发飞书任务卡片 → 自动拉专属服务群 → 完工自动汇报。"
          />

          {/* 4. 数据孤岛 - 痛点：看不清账 (去掉了SaaS、中台等词) */}
          <SolutionCard 
            badge="经营数据"
            title="不用问下属要报表，手机打开就是实时经营数据"
            resultHighlight="从“月底看报表”变为“实时看大盘”"
            desc="软件买了一大堆，数据全是散的？我们帮您把 CRM、财务、电商后台的数据全部打通，汇总在一张表上，老板一眼就能看懂。"
            techProof="后台原理：连接所有独立软件接口 → 统一整理数据格式 → 实时同步至飞书多维表格仪表盘。"
          />

          {/* 5. 风险控制 - 痛点：出事了才知道 */}
          <SolutionCard 
            badge="风险控制"
            title="比老板更早发现问题，把风险掐死在苗头里"
            resultHighlight="将潜在利润损失拦截在发生之前"
            desc="库存不够了？大客户不开心了？利润跌破红线了？系统会比您先知道，并疯狂震动负责人的手机，直到问题解决为止。"
            techProof="后台原理：全天候监控业务数据 → 一旦异常触发布控 → 飞书发送“加急”消息（强震动提醒）→ 手机端一键处理。"
          />

        </div>
        
        {/* Transition */}
        <div className="mt-20 text-center border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            这 5 个场景，仅仅是效率提升的<span className="text-blue-600">冰山一角</span>
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            每家企业的流程都是独一无二的。您的业务中，还有大量隐形的繁琐环节占用了宝贵的时间。
            <br/>
            我们提供的不是标准化的软件，而是深度贴合您业务逻辑的定制化疏通服务。</strong>。
          </p>
          
          <div className="flex flex-col items-center justify-center gap-2 text-slate-400 text-sm animate-pulse">
            <span>了解我们的服务承诺</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

// 独立的卡片组件
const SolutionCard = ({ badge, title, resultHighlight, desc, techProof }: { badge: string, title: string, resultHighlight: string, desc: string, techProof: string }) => (
  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
    {/* 左侧装饰条 */}
    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
    
    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
      {/* 左侧：核心商业成果 */}
      <div className="flex-1">
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
          {badge}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
          {desc}
        </p>
        <div className="bg-green-50/50 border border-green-100 rounded-lg p-3 inline-block">
          <p className="text-green-700 font-bold flex items-center gap-2 text-sm">
            <TrendingUpIcon />
            {resultHighlight}
          </p>
        </div>
      </div>

      {/* 右侧：技术实现原理 (用大白话解释) */}
      <div className="md:w-1/3 bg-slate-50 rounded-xl p-5 border border-slate-100 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-3 text-slate-800 font-semibold text-sm">
          <WorkflowIcon />
          <span>后台自动执行逻辑</span>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed font-mono">
          {techProof}
        </p>
        {/* 视觉暗示：连接图标 */}
        <div className="mt-4 flex items-center gap-2 text-slate-300">
           <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
           <div className="text-[10px] text-slate-400 font-bold">n8n + 飞书</div>
           <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

// Icons
const TrendingUpIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const WorkflowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

export default Solutions;
