export const dynamic = "force-dynamic";

import DynamicWords from "@/components/DynamicWords";
import Header from "@/components/Header"; 
import BackgroundNoise from "@/components/BackgroundNoise";
import BackgroundGrid from "@/components/BackgroundGrid";
import LogoCarousel from "@/components/LogoCarousel";
import PainPoints from "@/components/PainPoints";
import BusinessFeatures from "@/components/BusinessFeatures";
import BusinessProcess from "@/components/BusinessProcess";
import Pricing from "@/components/Pricing";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden">
      
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

{/* ⭐ 往下推的距离保持 pt-64，视口高度不够时可以用 min-h-screen */}
<div className="relative z-10 px-6 md:px-10 pt-48 md:pt-64 max-w-5xl">
  <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900">
    创造 <span className="text-blue-600">AI 员工</span>
    <br />

    {/* ⭐ 动态词区域 */}
    <span className="block mt-2 md:mt-4 h-[1.2em]">
      <DynamicWords />
    </span>
  </h1>
  
  <p className="mt-8 md:mt-10 max-w-2xl text-lg md:text-[22px] text-slate-600 leading-[1.6] md:leading-[1.8]">
    我们通过深度理解业务流程，为企业定制 AI 自动化方案，<br className="hidden md:block" />
    节省人力成本，提升运行效率，并实现可持续增长。
  </p>
  

</div>
      <LogoCarousel />
     <PainPoints /> 
  <BusinessFeatures />
  <BusinessProcess />
      <Pricing />
    </div>
  );
}
