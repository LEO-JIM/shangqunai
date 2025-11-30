// app/cases/page.tsx
import React from "react";
import Navbar from "@/components/Header"; // 假设你的导航组件叫 Navbar 或 Header
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer"; // 假设你有 Footer

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* 页面主体容器，加 pt-24 是为了防止内容被固定顶部的 Navbar 遮挡 */}
      <div className="pt-24 pb-12">
        <CaseStudies />
      </div>
    </main>
  );
}
