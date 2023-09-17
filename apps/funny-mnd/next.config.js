/** @type {import('next').NextConfig} */
const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  transpilePackages: ["ui"],
  reactStrictMode: true,
}

module.exports = withVanillaExtract(nextConfig);
