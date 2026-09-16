/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/servicos/relatorios-e-metricas',
        destination: '/servicos/social-media',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

