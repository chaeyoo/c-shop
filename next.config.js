/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cataas.com', 'picsum.photos', 'firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
