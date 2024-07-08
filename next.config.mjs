/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.intract.io",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "static.highongrowth.xyz",
        port: "",
        // pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
