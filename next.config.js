/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  // async rewrites() {
  //   return (
  //     {
  //       source: "/api/:pathw",
  //       destination: "http://localhost:3001/api/:path*"
  //     }
  //   )
  // }
}

module.exports = nextConfig
