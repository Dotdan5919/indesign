import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Configure SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
  // Handle images properly
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;