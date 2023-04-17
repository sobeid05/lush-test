/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["unicorn-staging.eu.saleor.cloud"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/originals/75/3c/6b/753c6b5807b823a1cac9120eb095277c.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
