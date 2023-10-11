/**
 * @type {import('next').NextConfig}
 */
require("dotenv").config();
const webpack = require("webpack");
const nextConfig = {
  output: "export",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      })
    );

    return config;
  },
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  distDir: "out",
};

module.exports = nextConfig;
