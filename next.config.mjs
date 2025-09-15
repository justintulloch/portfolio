/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { 
    loader: "akamai",
    path: "",
    unoptimized: true,
   },
   assetPrefix: "./",
  swcMinify: true,
        webpack: (config, { isServer }) => {
        config.module.rules.push({
          test: /\.(glsl|vs|fs|vert|frag)$/,
          exclude: /node_modules/,
          use: ['raw-loader', 'glslify-loader'],
        });
        return config;
        },
};

export default nextConfig;
