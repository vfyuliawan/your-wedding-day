const withPWA = require('next-pwa')({
    dest: 'public', // Destination for the service worker file
    register: true, // Automatically register the service worker
    skipWaiting: true, // Automatically activate the new service worker
    disable: process.env.NODE_ENV === 'development',
  });
  
  // Combine PWA with existing Next.js configuration
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    output: 'export',
  };
  
  // Export the combined configuration
  module.exports = withPWA(nextConfig);
  