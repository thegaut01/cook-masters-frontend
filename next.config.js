
/** @type {import('next').NextConfig} */

const nextConfig = {
   reactStrictMode: true,
   webpack: (config) => {
   config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
   })
   
   
   config.resolve.fallback = { fs: false };
   return config
   },

   images: {
      domains: ['cdn.sanity.io', ]
   },
   
}

module.exports = nextConfig
