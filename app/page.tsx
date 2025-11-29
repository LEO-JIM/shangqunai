import BackgroundGrid from "@/components/BackgroundGrid";
import DynamicWords from "@/components/DynamicWords";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      
      <BackgroundGrid />

      <div className="relative z-10 px-10 pt-32 max-w-4xl">

        <h1 className="text-6xl font-bold leading-tight">
          创造 <span className="text-purple-600">AI 员工</span>
          <br />
          <DynamicWords />
        </h1>

      </div>
    </div>
  );
}
