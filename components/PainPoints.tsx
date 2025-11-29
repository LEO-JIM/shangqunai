import React from "react";

const PainPoints: React.FC = () => {
  const points = [
    {
      title: "01｜想用 AI，但完全不知道从哪里开始",
      bullets: [
        "听了很多概念，但一落到自己业务上就束手无策。",
        "分不清哪些工作能用 AI 做、哪些不能做。",
        "最困扰的是：知道 AI 很强，但不知道它能具体帮你什么。",
      ],
    },
    {
      title: "02｜请员工太贵，不请又做不动",
      bullets: [
        "一个懂技术的人年薪百万，招了也不一定懂业务。",
        "外包担心沟通慢、不稳定、做出来没人用。",
        "最后只能自己硬撑，但事情越积越多，越做越乱。",
      ],
    },
    {
      title: "03｜以前做过系统，但最终都成了摆设",
      bullets: [
        "当时承诺很多，交付后发现完全脱离真实业务。",
        "界面复杂、学习成本高，员工不愿意打开第二次。",
        "花了钱也花了时间，却没有解决任何实际痛点。",
      ],
    },
    {
      title: "04｜AI 只用在表面，不用在真正省时间的地方",
      bullets: [
        "用 AI 写文案、总结资料，但这些对效率提升有限。",
        "最费时费力的流程，从来没人系统化优化。",
        "你知道更高效，但不知道 AI 的“深层用法”怎么落地。",
      ],
    },
    {
      title: "05｜工具买了不少，但团队就是不用",
      bullets: [
        "软件再强，也比不上“打开就能跑的一键按钮”。",
        "员工觉得麻烦、怕操作错、培训了也记不住。",
        "最后还是回到老路：手动做、效率低、错误多。",
      ],
    },
    {
      title: "06｜每天被大量“小事”拖住，核心工作做不动",
      bullets: [
        "复制粘贴、写重复报告、整理数据占掉大部分时间。",
        "看似都在忙，但忙的都是低价值、耗时间的事。",
        "越忙越乱，越乱越忙，效率迟迟上不来。",
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        AI 时代：企业增长的六大核心痛点
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto text-gray-700 leading-relaxed">
        {points.map((p, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
            <ul className="space-y-2">
              {p.bullets.map((b, i) => (
                <li key={i}>· {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PainPoints;
