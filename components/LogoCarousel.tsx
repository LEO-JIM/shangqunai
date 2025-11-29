"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/N8n-logo-new.svg (1).png", w: 120 },
  { src: "/logos/skool.png", w:115 },
  { src: "/logos/DeepSeek-Logo.png", w: 133 },
  { src: "/logos/feishu.jpg", w: 120 },
  { src: "/logos/Google_2015_logo.svg.png", w: 117 },
  { src: "/logos/Google_Gemini_logo_2025.svg.png", w: 120 },
  { src: "/logos/openAI.svg", w: 130 },
];

export default function LogoCarousel() {
  return (
    <div className="w-full mt-32 py-16 bg-white/70 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-10">
          技术生态伙伴
        </h2>

        <div className="overflow-hidden relative">
          <div className="flex animate-scroll space-x-16 w-max opacity-90">
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt="logo"
                  width={logo.w}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}

            {logos.map((logo, i) => (
              <div key={`copy-${i}`} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt="logo-copy"
                  width={logo.w}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
