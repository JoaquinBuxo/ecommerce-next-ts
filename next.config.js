/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.sivasdescalzo.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.sivasdescalzo.com',
        port: '',
        pathname: '/media/catalog/product/**',
      },
    ],
  },
};

module.exports = nextConfig;
