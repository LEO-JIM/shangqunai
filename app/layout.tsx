import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 👇 第一步：引入 Header 和 Footer 组件
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 建议把这里的标题改成您公司的名字
  title: "商群AI - 用 AI 降本增效", 
  description: "广州商群人工智能科技有限公司",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 建议把 lang 改成 zh-CN，scroll-smooth 保持不动
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 👇 第二步：在这里放置 Header (页面顶部) */}
        <Header />

        {/* 页面主体内容 */}
        {children}

        {/* 👇 第三步：在这里放置 Footer (页面底部) */}
        <Footer />
      </body>
    </html>
  );
}
