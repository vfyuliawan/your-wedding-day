/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    // Add the output option to export the site as static HTML
    // add this line when deploy to export static page
    // output: 'export',
  };
  
  module.exports = nextConfig;
  