/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:[
      {
        protocol: "https",
        hostname: "ovtgehtwuwjtslpqgzlx.supabase.co"
      },
      {
        protocol: "http",
        hostname: "localhost"
      }
    ]
  }
};

// https://ovtgehtwuwjtslpqgzlx.supabase.co/storage/v1/object/public/thumbnails/imgs/art_of_reading.jpg

export default nextConfig;
