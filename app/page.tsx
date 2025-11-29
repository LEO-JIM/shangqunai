import BackgroundGrid from "@/components/BackgroundGrid";
import DynamicWords from "@/components/DynamicWords";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      
      <BackgroundGrid />

      <div className="relative z-10 px-10 pt-48 max-w-5xl">
        <h1 className="text-7xl font-extrabold leading-tight">
          创造 <span className="text-purple-600">AI 员工</span>
          <br />
          <span className="text-6xl">
            <DynamicWords />
          </span>
        </h1>
      </div>

    </div>
  );
}
