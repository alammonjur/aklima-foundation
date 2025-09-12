/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/admin',
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
