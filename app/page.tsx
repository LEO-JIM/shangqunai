import BackgroundGrid from "@/components/BackgroundGrid";
import DynamicWords from "@/components/DynamicWords";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      
      <BackgroundGrid />

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
      </div>

    </div>
  );
}
