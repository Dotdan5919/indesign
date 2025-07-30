import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  // Add any other configuration options here
  experimental: {
    // Enable any experimental features if needed
  },
  // Optimize for production
  swcMinify: true,
  // Handle images properly
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;