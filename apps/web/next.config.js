/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@readventure/ui"],
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
