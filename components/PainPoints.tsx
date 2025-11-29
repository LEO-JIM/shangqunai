import React from "react";

const PainPoints: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        AI 时代，遏制企业增长的五个隐形痛点
      </h2>

      <div className="max-w-4xl mx-auto space-y-12 text-gray-700 leading-relaxed">

        {/* 01 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">01｜想用 AI，但完全不知道从哪里开始</h3>
          <ul className="space-y-2">
            <li>· 听了很多概念，但一落到自己业务上就束手无策。</li>
            <li>· 分不清哪些工作能用 AI 做、哪些不能做。</li>
            <li>· 最困扰的是：知道 AI 很强，但不知道它能具体帮你什么。</li>
          </ul>
        </div>

        {/* 02 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">02｜请员工太贵，不请又做不动</h3>
          <ul className="space-y-2">
            <li>· 一个懂技术的人年薪百万，招了也不一定懂业务。</li>
            <li>· 外包担心沟通慢、不稳定、做出来没人用。</li>
            <li>· 最后只能自己硬撑，但事情越积越多，越做越乱。</li>
          </ul>
        </div>

        {/* 03 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">04｜AI 只用在表面，不用在真正省时间的地方</h3>
          <ul className="space-y-2">
            <li>· 用 AI 写文案、总结资料，但这些对效率提升有限。</li>
            <li>· 真正费时费力的流程，从来没人系统化优化。</li>
            <li>· 你知道能更高效，但不知道 AI 的“深层用法”怎么落地。</li>
          </ul>
        </div>

        {/* 04 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">05｜工具买了不少，但团队就是不用</h3>
          <ul className="space-y-2">
            <li>· 软件再强，也比不上“打开就能跑的一键按钮”。</li>
            <li>· 员工觉得麻烦、怕操作错、培训了也记不住。</li>
            <li>· 最后还是回到老路：手动做、效率低、错误多。</li>
          </ul>
        </div>

        {/* 05 */}
        <div>
          <h3 className="text-xl font-semibold mb-3">06｜每天被大量“小事”拖住，核心工作做不动</h3>
          <ul className="space-y-2">
            <li>· 复制粘贴、写重复报告、整理数据占掉大部分时间。</li>
            <li>· 看似都在忙，但忙的都是低价值、耗时间的事。</li>
            <li>· 越忙越乱，越乱越忙，效率迟迟上不来。</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default PainPoints;
