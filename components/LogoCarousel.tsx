"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/N8n-logo-new.svg (1).png", w: 110 },
  { src: "/logos/skool.png", w: 120 },
  { src: "/logos/DeepSeek-Logo.png", w: 130 },
  { src: "/logos/feishu.jpg", w: 120 },
  { src: "/logos/Google_2015_logo.svg.png", w: 140 },
  { src: "/logos/Google_Gemini_logo_2025.svg.png", w: 120 },
  { src: "/logos/openAI.svg", w: 135 },
  { src: "/logos/wechat.png", w: 110 }
];

export default function LogoCarousel() {
  return (
    <div className="w-full py-20 bg-white/70 backdrop-blur-sm">
      <h2 className="text-center text-3xl font-semibold text-gray-700 mb-12">
        技术生态伙伴
      </h2>

      <div className="overflow-hidden relative">
        <div className="flex animate-scroll space-x-16 w-max opacity-70">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt="brand"
              width={150}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          ))}

          {logos.map((logo, i) => (
            <Image
              key={`copy-${i}`}
              src={logo}
              alt="brand-copy"
              width={150}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
