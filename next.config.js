/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const withAnalyzer = require('@next/bundle-analyzer')

const nextConfig = {
  reactStrictMode: true,
}

module.exports =
  process.env.NODE_ENV === 'production' ? withAnalyzer(withPWA(nextConfig)) : nextConfig
