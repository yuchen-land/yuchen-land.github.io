/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/personal-land' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-land/' : '',
}

module.exports = nextConfig
