import BackgroundGrid from "@/components/BackgroundGrid";
import DynamicWords from "@/components/DynamicWords";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">

      {/* 背景动效 */}
      <BackgroundGrid />

      {/* 内容区 */}
      <div className="relative z-10 px-10 pt-32 max-w-4xl">
        <h1 className="text-6xl font-bold leading-tight">
          Bespoke <span className="text-purple-600">AI</span> solutions that drive<br />
          <DynamicWords />
        </h1>
      </div>

    </div>
  );
}
