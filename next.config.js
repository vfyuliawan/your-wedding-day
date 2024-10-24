const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  webpack: (config, { isServer, dev }) => {
    if (!isServer && !dev) { // Only add Workbox in production
      config.plugins.push(
        new WorkboxWebpackPlugin.InjectManifest({
          swSrc: './public/service_worker.js', // Source of your service worker file
          swDest: 'sw.js', // Destination where the service worker will be output
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
