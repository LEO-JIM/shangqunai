import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 允许加载本地 public/ 目录的图片（默认已支持，但显式声明更安全）
    domains: [],
    // 可选：设置远程图片域名（如果你以后要用 CDN）
    // remotePatterns: [
    //   { hostname: 'cdn.example.com' }
    // ],
  },
  // 如果你用 App Router（app/ 目录），确保这个开启（默认 true）
  experimental: {
    // 一般不用改
  },
};

export default nextConfig;
