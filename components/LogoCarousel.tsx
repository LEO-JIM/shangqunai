"use client";

import { useEffect, useState } from "react";

// 原始组件（保持不变）
function LogoCarouselInner() {
  const logos = [
    { src: "/logos/n8n.png", w: 120 },
    { src: "/logos/skool.png", w: 110 },
    { src: "/logos/deepseek.png", w: 133 },
    { src: "/logos/feishu.jpg", w: 120 },
    { src: "/logos/google-2015.png", w: 117 },
    { src: "/logos/google-gemini.png", w: 120 },
    { src: "/logos/openai.svg", w: 130 },
  ];

  return (
    <div className="w-full mt-32 py-12 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-xl md:text-2xl font-bold tracking-widest text-slate-600 uppercase mb-12">
          技术生态伙伴
        </h2>

        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex animate-scroll space-x-16 w-max opacity-100 items-center">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center min-w-[120px]">
                <img
                  src={logo.src}
                  alt="logo"
                  width={logo.w}
                  height={60}
                  loading="lazy"
                  className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}

            {logos.map((logo, i) => (
              <div key={`copy-${i}`} className="flex items-center justify-center min-w-[120px]">
                <img
                  src={logo.src}
                  alt="logo-copy"
                  width={logo.w}
                  height={60}
                  loading="lazy"
                  className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ⭐ 新增：仅在客户端渲染
export default function LogoCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // SSR 阶段返回占位，避免布局偏移
    return (
      <div className="w-full mt-32 py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-xl md:text-2xl font-bold tracking-widest text-slate-600 uppercase mb-12">
            技术生态伙伴
          </h2>
          <div className="h-16 bg-gray-100 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return <LogoCarouselInner />;
}
