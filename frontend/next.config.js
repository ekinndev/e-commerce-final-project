/* eslint-disable no-param-reassign */
/* eslint-disable arrow-parens */
// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    minimumCacheTTL: 15000000,
  },
};

module.exports = nextConfig;
