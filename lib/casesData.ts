// lib/casesData.ts

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  
  fullTitle: string;
  challenge: string;
  solution: string;
  
  workflowImage: string; 

  solutionSteps: {
    title: string;
    desc: string;
  }[];

  results: {
    icon: string;
    text: string;
    subtext: string;
  }[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "property-management",
    category: "物业管理 · 客服自动化",
    title: "加拿大物业公司 AI 智能邮件管家",
    subtitle: "双重 AI 校验 + 安全围栏，打造稳定的客服系统",
    
    // 卡片上的挑战描述
    description: "客户面临邮件过载与回复质量不可控的双重压力。核心痛点在于如何防止 AI 回复机械化，并确保在处理复杂或敏感租户诉求时，能够安全、准确地进行人工兜底。",
    
    // --- 详情页内容 ---
    fullTitle: "加拿大物业公司：\n如何利用 AI 实现高安全性的智能回复",
    
    // 详情页背景挑战
    challenge: "该客户管理着数百套房源。核心痛点并非仅仅是处理速度，而是回复的质量与安全性：如何避免 AI 发送过于生硬的模板式回复？面对复杂的租户诉求（如一信多问），如何确保 AI 不会胡乱承诺？此外，必须防止恶意 Prompt 注入攻击影响系统稳定性。",
    
    // 卡片上的解决方案描述
    solution: "构建高安全性 n8n 智能工作流：通过 Guardrail 机制过滤风险邮件，并采用双重智能体交叉验证。系统优先保障准确性，对于复杂场景自动无缝转接人工处理。",
    
    workflowImage: "/caseImage/tenant-communication.png",

    solutionSteps: [
      {
        title: "安全围栏与多轮身份匹配 (Security & Identity)",
        desc: "首先通过 Guardrail 节点过滤恶意提示词和无关垃圾邮件。随后进行多轮身份验证（邮箱 -> 电话/地址），确保系统只处理真实租户的请求，从源头保障安全。"
      },
      {
        title: "双重智能体校验 (Dual-Agent Verification)",
        desc: "这是核心风控机制：智能体 A 负责分析意图并匹配对应模板；智能体 B 负责'二次核对'，确认 A 的分类逻辑是否正确。系统严格调用 Google Sheet 预设话术，绝不让 AI 自由生成回复。"
      },
      {
        title: "复杂情况人工兜底 (Human Handoff)",
        desc: "对于非标准问题或一封邮件包含多个复杂诉求的情况，系统会在表格中自动标记人工处理。这确保了客户不会收到'驴唇不对马嘴'的回复，破坏用户体验。"
      }
    ],

    results: [
      { 
        icon: "clock", 
        text: "70%", 
        subtext: "客服工时节省" 
      },
      { 
        icon: "money", 
        text: "$2,100", 
        subtext: "每月节省成本 (CAD)" 
      },
      { 
        icon: "check", 
        text: "回复标准化", // 修改点：更务实，强调是基于标准模板
        subtext: "严格预设话术" 
      }
    ],
  },
];
