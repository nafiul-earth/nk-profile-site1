/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/articles', destination: '/blogs', permanent: true },
    ]
  },
}

module.exports = nextConfig
