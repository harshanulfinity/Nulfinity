import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.7.27', '192.168.7.*'],
  turbopack: {
    root: process.cwd(),
  },
  webpack: (config, { isServer }) => {
    // Fix for PDF.js worker in Next.js
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Handle PDF.js worker
    config.module.rules.push({
      test: /pdf\.worker\.(min\.)?js/,
      type: 'asset/resource',
    });

    return config;
  },
};

export default nextConfig;
