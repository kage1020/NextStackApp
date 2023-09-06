/* eslint-disable @typescript-eslint/no-var-requires */

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: './public',
})
const withAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports =
  process.env.NODE_ENV === 'production' ? withAnalyzer(withPWA(nextConfig)) : nextConfig
