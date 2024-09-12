/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "45.12.239.121",
        port: "5001",
        pathname: "/embroidery/**",
      },
    ],
  },
};

export default nextConfig;
