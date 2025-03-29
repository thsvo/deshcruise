import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.codeopx.com', 'lh3.googleusercontent.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@fortawesome/fontawesome-svg-core'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize bundle size
  webpack: (config, { dev, isServer }) => {
    // Only run in client production build
    if (!dev && !isServer) {
      // Enable tree shaking for lodash and other large libraries
      config.optimization.usedExports = true;
      
      // Split chunks more aggressively
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
            priority: 30,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
