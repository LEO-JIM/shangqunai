// app/about/page.tsx
import React from "react";
import AboutUs from "@/components/AboutUs"; // 复用之前写好的组件

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* pt-24 是为了防止内容被固定的顶部 Header 遮挡 */}
      <div className="pt-24 pb-12">
        {/* 直接复用之前写好的组件即可 */}
        <AboutUs />
      </div>
    </main>
  );
}
