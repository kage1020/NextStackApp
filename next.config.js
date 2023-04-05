/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPWA = require('next-pwa')({
  dest: './public',
})

const nextConfig = {
  reactStrictMode: true,
}

module.exports =
  process.env.NODE_ENV === 'production' ? withAnalyzer(withPWA(nextConfig)) : nextConfig
