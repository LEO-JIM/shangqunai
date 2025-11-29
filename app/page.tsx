export const dynamic = "force-dynamic";

import DynamicWords from "@/components/DynamicWords";
import Header from "@/components/Header"; 
import BackgroundNoise from "@/components/BackgroundNoise";
import BackgroundGrid from "@/components/BackgroundGrid";
import LogoCarousel from "@/components/LogoCarousel";
import PainPoints from "@/components/PainPoints";
import BusinessFeatures from "@/components/BusinessFeatures";
import BusinessProcess from "@/components/BusinessProcess";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden">
      
      {/* 全局淡紫色纹理 */}
      <BackgroundNoise />

<BackgroundGrid
  highlights={[
    { col: 11, row: 1 },
    { col: 11, row: 4 },
    { col: 8, row: 2 },
    { col: 8, row: 5 },
    { col: 9, row: 3 },
  ]}
/>

      {/* ⭐⭐ 顶部 Header */}
      <Header />

      {/* ⭐ 往下推的距离改大（pt-48 → pt-56 或 pt-64） */}
      <div className="relative z-10 px-10 pt-64 max-w-5xl">
        <h1 className="text-7xl font-extrabold leading-tight">
          创造 <span className="text-purple-600">AI 员工</span>
          <br />

          {/* ⭐ 动态词也同样 7xl */}
          <span className="text-7xl">
            <DynamicWords />
          </span>
        </h1>
        <p className="mt-10 max-w-2xl text-[22px] text-gray-600 leading-[1.8]">
    我们通过深度理解业务流程，为企业定制 AI 自动化方案，<br />
    节省人力成本，提升运行效率，并实现可持续增长。
  </p>
      </div>
      <LogoCarousel />
     <PainPoints /> 
  <BusinessFeatures />
  <BusinessProcess />
    </div>
  );
}
