/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
      // Suppress hydration warnings
      suppressHydrationWarning: true,
    }
  }
  
  module.exports = nextConfig