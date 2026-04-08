import type { NextConfig } from "next";

// const isProduction = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // typescript: {
  //   tsconfigPath: isProduction ? 'tsconfig.build.json' : 'tsconfig.json',
  // },
  experimental: {
    typedEnv: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
      /**
       * Limit the image host pattern (security + performance)
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "images.unsplash.com"
          },
          {
            protocol: "https",
            hostname: "cdn.yourapp.com"
          }
        ]
      }
      */
    ]
  }
};

export default nextConfig;
