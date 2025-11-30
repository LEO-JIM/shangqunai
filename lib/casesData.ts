// lib/casesData.ts

// 1. 定义数据结构（Interface）
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

// 2. 录入数据
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "property-management",
    category: "物业管理 · 客服自动化",
    title: "加拿大物业公司 AI 智能邮件管家",
    subtitle: "双重 AI 校验 + 安全围栏，打造稳定的客服系统",
    description: "客户不仅面临邮件过载，更担心 AI 回复过于机械或产生误导。我们引入了'双重智能体校验'与'安全围栏'机制，在确保绝对安全的前提下实现自动化。",
    
    // --- 详情页内容 ---
    fullTitle: "加拿大物业公司：\n如何利用 AI 实现高安全性的智能回复",
    
    // 修改点 1：痛点改为“避免机械化、复杂情况处理、安全性”
    challenge: "该客户管理着数百套房源。核心痛点并非仅仅是处理速度，而是**回复的质量与安全性**：如何避免 AI 发送过于生硬的模板式回复？面对复杂的租户诉求（如一信多问），如何确保 AI 不会胡乱承诺？此外，必须防止恶意 Prompt 注入攻击影响系统稳定性。",
    
    // 修改点 2：解决方案强调“双重检查”和“Guardrail”
    solution: "我们构建了一套高安全性的 n8n 智能工作流：在入口处设置'安全围栏 (Guardrail)' 过滤恶意邮件；在回复生成环节，独创'双重智能体 (Dual-Agent)' 机制进行交叉审核，确保只有 100% 匹配的情况才自动化，其余全部无缝转接人工。",
    
    workflowImage: "/caseImage/tenant-communication.png",

    solutionSteps: [
      {
        title: "安全围栏与多轮身份匹配 (Security & Identity)",
        desc: "首先通过 Guardrail 节点过滤恶意提示词和无关垃圾邮件。随后进行多轮身份验证（邮箱 -> 电话/地址），确保系统只处理真实租户的请求，从源头保障安全。"
      },
      {
        title: "双重智能体校验 (Dual-Agent Verification)",
        desc: "这是核心风控机制：智能体 A 负责分析意图并检索回复模板；智能体 B 负责'质检'，检查 A 的匹配是否精准、语气是否自然。只有两者达成一致，才会触发自动回复。"
      },
      {
        title: "复杂情况人工兜底 (Human Handoff)",
        desc: "对于非标准问题或一封邮件包含多个复杂诉求的情况，系统会自动标记并转交人工处理。这确保了客户不会收到'驴唇不对马嘴'的机械回复。"
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
        text: "98%", 
        subtext: "回复准确率" 
      }
    ],
  },
];
