/**
 * @type {import('next').NextConfig}
*/
// const webpack = require("webpack");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/dev/notification/:path*',
        destination: 'http://54.84.90.145:31924/:path*'
      },
      {
        source: '/local/notification/:path*',
        destination: 'http://54.84.90.145:31924/:path*'
      },
      {
        source: '/qa/notification/:path*',
        destination: 'https://qanotificationapi.betygfi.com/:path*'
      },
      {
        source: '/prod/notification/:path*',
        destination: 'https://notificationapi.betygfi.com/:path*'
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ];
  },
  reactStrictMode: false,
  // webpack(config) {
  //   config.plugins.push(
  //     new webpack.DefinePlugin({
  //       "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  //     })
  //   );
  //   config.resolve = {
  //     ...config.resolve,
  //     fallback: {
  //       "fs": false,
  //       "path": false,
  //       "os": false,
  //     }
  //   };
  //   return config;
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s2.coinmarketcap.com",
      },
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
      },
      {
        protocol: "https",
        hostname: "betygfi-media.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "7000",
      },

    ],
    minimumCacheTTL: 3600, // 1hour
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = withBundleAnalyzer(nextConfig);
