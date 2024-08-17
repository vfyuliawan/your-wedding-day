/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    // Add the output option to export the site as static HTML
    // output: 'export',
  };
  
  module.exports = nextConfig;
  