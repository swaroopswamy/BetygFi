/** @type {import('next').NextConfig} */
require('dotenv').config()
const webpack = require('webpack');
const nextConfig = {
  output: "export",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    );

    return config;
  },

  images: {
    loader: 'imgix',
    path: '',
  },
  distDir: "out",
};

module.exports = nextConfig;
