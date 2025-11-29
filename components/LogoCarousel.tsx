"use client";

import Image from "next/image";

const logos = [
  "/logos/n8n.png",
  "/logos/skool.png",
  "/logos/make.png",
  "/logos/openai.png",
  "/logos/airtable.png",
  "/logos/stripe.png",
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
