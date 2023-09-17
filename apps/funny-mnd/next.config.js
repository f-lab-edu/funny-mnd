import {
  createVanillaExtractPlugin
} from '@vanilla-extract/next-plugin'

/** @type {import('next').NextConfig} */

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  transpilePackages: ["ui"],
  reactStrictMode: true,
}

export default withVanillaExtract(nextConfig);
