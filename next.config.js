/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath: process.env.NODE_ENV === 'production' ? '/yuchen-land.github.io' : '',
  // 移除 basePath，因為這是 User Pages
  // basePath 只在 Project Pages 才需要
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/yuchen-land.github.io' : '',
}

module.exports = nextConfig
