/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aletheia.events",
      },
    ],
    unoptimized: true
  },
};

export default nextConfig;
