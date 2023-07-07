/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ['bms.zhongsudaer.com'],
    unoptimized: true
  },
}

module.exports = nextConfig
