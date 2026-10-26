import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "usama.dev" }],
  },
  async redirects() {
    return [
      {
        source: "/Talha%20Rashid%20Resume.pdf",
        destination: "/talha-rashid-resume.pdf",
        permanent: true,
      },
      {
        source: "/Talha Rashid Resume.pdf",
        destination: "/talha-rashid-resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
