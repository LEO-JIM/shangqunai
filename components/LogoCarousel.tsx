"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/N8n-logo-new.svg (1).png", w: 120 },
  { src: "/logos/skool.png", w: 110 },
  { src: "/logos/DeepSeek-Logo.png", w: 133 },
  { src: "/logos/feishu.jpg", w: 120 },
  { src: "/logos/Google_2015_logo.svg.png", w: 117 },
  { src: "/logos/Google_Gemini_logo_2025.svg.png", w: 120 },
  { src: "/logos/openAI.svg", w: 130 },
];

export default function LogoCarousel() {
  return (
    <div className="w-full mt-32 py-12 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* ⭐ 修改处：字体放大 */}
        {/* text-2xl (移动端) -> md:text-3xl (桌面端) */}
        {/* text-slate-500 保持低调专业，如果想跳一点可以用 text-blue-600 */}
        <h2 className="text-center text-xl md:text-2xl font-bold tracking-widest text-slate-600 uppercase mb-12">
          技术生态伙伴
        </h2>

        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex animate-scroll space-x-16 w-max opacity-100 items-center">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center min-w-[120px]">
                <Image
                  src={logo.src}
                  alt="logo"
                  width={logo.w}
                  height={60}
                  className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}

            {logos.map((logo, i) => (
              <div key={`copy-${i}`} className="flex items-center justify-center min-w-[120px]">
                <Image
                  src={logo.src}
                  alt="logo-copy"
                  width={logo.w}
                  height={60}
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
