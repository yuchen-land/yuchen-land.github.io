/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/yuchen-land.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/yuchen-land.github.io' : '',
}

module.exports = nextConfig
