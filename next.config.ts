import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import dotenv from "dotenv";
import type { NextConfig } from "next";

dotenv.config(); // .env 파일 로드
setupDevPlatform().catch(console.error);

// TODO: csp 헤더 기본값 (외부 자원이 전부 차단되어서 개선 후 적용 예정)
// const cspHeader = `
//     default-src 'self';
//     script-src 'self' 'unsafe-eval' 'unsafe-inline';
//     style-src 'self' 'unsafe-inline';
//     img-src 'self' blob: data:;
//     font-src 'self';
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-ancestors 'none';
//     upgrade-insecure-requests;
// `;

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: cspHeader.replace(/\n/g, ""),
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
