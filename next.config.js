/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    NEXT_APP_API_URL: "https://betygfi.com/api/v2/",
  },
  images: {
    loader: 'imgix',
    path: '',
  },
  distDir: "out",
};

module.exports = nextConfig;
