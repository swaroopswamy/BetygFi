/**
 * @type {import('next').NextConfig}
 */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const webpack = require("webpack");

const nextConfig = {
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
  webpack(config) {
    config.plugins.push(
      new webpack.DefinePlugin({
        // "process.env.CONFIG": JSON.stringify(require('./config.json')),
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      })
    );
    return config;
  },
  images: {
    domains: [
      "s2.coinmarketcap.com",
      "assets.coingecko.com",
    ],
    minimumCacheTTL: 3600, // 1hour
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = withBundleAnalyzer(nextConfig);
