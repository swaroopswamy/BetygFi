/**
 * @type {import('next').NextConfig}
 */
require('dotenv').config()
const webpack = require('webpack');
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
      )
    );

    return config;
  },
  images: {
    unoptimized: true
  },
  distDir: "out",
};

module.exports = nextConfig;
