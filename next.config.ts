import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.styl$/,
      use: [
        {
          loader: 'style-loader',
          options: {
            esModule: true,
          },
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        'stylus-loader',
      ],
    });
    return config;
  },
};

export default nextConfig;
