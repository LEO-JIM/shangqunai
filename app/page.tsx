import DynamicWords from "@/components/DynamicWords";
import Header from "@/components/Header"; 
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">

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

    </div>
  );
}
