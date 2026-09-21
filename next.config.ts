import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/download.html", destination: "/download", permanent: true },
      { source: "/features.html", destination: "/features", permanent: true },
      { source: "/help.html", destination: "/help", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/products.html", destination: "/products", permanent: true },
      { source: "/subscription.html", destination: "/subscription", permanent: true },
      { source: "/version.html", destination: "/version", permanent: true },
    ];
  },
};

export default nextConfig;
