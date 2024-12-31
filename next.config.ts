const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: isProd ? '/ABCAutoParts' : '',
  basePath: isProd ? '/ABCAutoParts' : '',
  output: 'export'
};

export default nextConfig;