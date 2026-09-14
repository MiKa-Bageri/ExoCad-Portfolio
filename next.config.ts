import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? "/ExoCad-Portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/ExoCad-Portfolio/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === "production" ? "/ExoCad-Portfolio" : "",
  },
};

export default nextConfig;