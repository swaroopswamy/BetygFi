/**
 * @type {import('next').NextConfig}
 */
const webpack = require("webpack");
const nextConfig = {
  output: "export",
  reactStrictMode: false,
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
    config.module.rules.push({
      test: /\.js?/,
      include: "/src",
      use: {
        loader: "babel-loader",
        options: {
          presets: [["es2015", { modules: false }]],
        },
      },
      exclude: "/node_modules/"
    });

    return config;
  },
  distDir: "out",
  images: { unoptimized: true }
};

module.exports = nextConfig;
