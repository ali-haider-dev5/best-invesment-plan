import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
    remotePatterns: [{ protocol: 'https', hostname: 'i.ibb.co', pathname: '/**' }],
  },
};

export default nextConfig;
