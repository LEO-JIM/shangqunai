// lib/casesData.ts

// 1. 定义数据结构（Interface）
export interface CaseStudy {
  id: string;           // 也就是 URL 里的 slug，例如 'property-management'
  category: string;     // 分类
  title: string;        // 列表页标题
  subtitle: string;     // 列表页副标题
  description: string;  // 列表页简介
  
  // --- 详情页专属内容 ---
  fullTitle: string;    // 详情页大标题
  challenge: string;    // 痛点描述
  solution: string;     // 解决方案描述
  
  // n8n 工作流图片路径 (放在 public 文件夹里)
  workflowImage: string; 

  // 解决方案的步骤 (那个深色时间轴)
  solutionSteps: {
    title: string;
    desc: string;
  }[];

  // 底部数据成果
  results: {
    text: string;
    subtext: string;
  }[];
}

// 2. 录入数据 (目前只有一个案例)
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "property-management",
    category: "物业管理 · 客服自动化",
    title: "加拿大物业公司 AI 智能邮件管家",
    subtitle: "多重身份验证 + 智能分流，实现 70% 客服自动化",
    description: "客户每天面临大量租户邮件，人工回复耗时且易出错。我们解决了核心难题：如何在不确定的邮件内容中精准识别租户身份。",
    
    // --- 详情页内容 ---
    fullTitle: "加拿大物业公司：\n如何利用 AI 实现 24/7 智能邮件管家",
    challenge: "这家客户管理着数百套房源。核心痛点不仅仅是邮件多，更在于身份确认困难：租户可能用非注册邮箱发信。此外，区分“紧急报修”和“常规咨询”耗费大量精力。",
    solution: "我们构建了一套基于 n8n 的智能工作流，引入'多轮身份匹配机制'（邮箱/电话/地址），针对紧急情况（如漏水）和常规咨询（如租金）设计独立处理逻辑。",
    
    // 你的 n8n 图片路径 (下一步会教你放哪里)
    workflowImage: "/caseImage/tenant-communication.png",

    solutionSteps: [
      {
        title: "多轮身份匹配 (Identity Matching)",
        desc: "系统接收到 Gmail 后，首先进行数据库比对：1. 匹配发件人邮箱。2. AI 读取邮件正文，提取电话号码或房号地址进行二次匹配。确保只有真实租户才能获得详细回复。"
      },
      {
        title: "紧急程度与意图识别",
        desc: "AI 分析邮件语义，判断是否为紧急事件（如火灾、漏水）。紧急情况立即调用标准模板回复并短信通知经理；非紧急进入下一轮。"
      },
      {
        title: "智能回复与人工兜底 (Safety Net)",
        desc: "标准问题由 AI 根据知识库生成准确回复；复杂/多重问题自动标记为“需人工处理”，避免 AI 胡乱承诺。核心价值是稳定性压倒一切。"
      }
    ],

    results: [
      { text: "70%", subtext: "客服工时节省" },
      { text: "$2,100", subtext: "每月节省成本 (CAD)" },
      { text: "24/7", subtext: "全天候即时响应" }
    ],
  },
];
