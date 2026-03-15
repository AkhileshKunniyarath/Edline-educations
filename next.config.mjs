/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Note: Using static export means API routes (/api/register) will not be functional
  // on static hosting because static servers cannot run Node.js backend code.
};

export default nextConfig;
