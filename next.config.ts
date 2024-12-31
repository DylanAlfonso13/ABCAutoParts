const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/ABCAutoParts/' : '',
  basePath: isProd ? '/ABCAutoParts' : '',
  output: 'export'
};

export default nextConfig;