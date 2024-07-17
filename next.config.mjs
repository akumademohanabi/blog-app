/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:[
      {
        protocol: "http",
        hostname: "Invalid next.config.mjs options detected:"
      }
    ]
  }
};

export default nextConfig;
