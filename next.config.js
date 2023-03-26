/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pokeapi.co',
        port: '',
        pathname: '/dashboard/**',
      },
    ],
  },
};

module.exports = nextConfig;
