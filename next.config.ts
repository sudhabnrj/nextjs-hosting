import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sudha.cloudcanvas.in",
      },
      {
        hostname: "localhost",
      },
      {
        hostname: "i.pravatar.cc",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during build
  },
};

export default nextConfig;
