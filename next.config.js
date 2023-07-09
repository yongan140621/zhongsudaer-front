/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ['bms.zhongsudaer.com'],
    unoptimized: true
  },
}

module.exports = nextConfig
