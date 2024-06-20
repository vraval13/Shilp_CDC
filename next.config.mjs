/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    serverComponentsExternalPackages:["mongoose"],
  },
  productionBrowserSourceMaps: true, 
};

export default nextConfig;
