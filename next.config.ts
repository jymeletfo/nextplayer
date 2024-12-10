import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kzmgthe8q38xfb4e6b0z.lite.vusercontent.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
