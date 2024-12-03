const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    // Disable service worker generation
    register: false,
    skipWaiting: false,
});

// Combine PWA with existing Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/masuk',
            destination: '/WebApp/masuk', // The path to your login page
          },
          {
            source: '/daftar',
            destination: '/WebApp/daftar', // The path to your login page
          },
        ];
      },
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'export',
};

// Export the combined configuration
module.exports = withPWA(nextConfig);
