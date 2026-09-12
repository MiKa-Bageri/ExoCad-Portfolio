import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // چون سایت روی username.github.io/ExoCad-Portfolio سرو میشه، نه روی ریشه دامنه
  basePath: process.env.NODE_ENV === "production" ? "/ExoCad-Portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/ExoCad-Portfolio/" : "",
};

export default nextConfig;