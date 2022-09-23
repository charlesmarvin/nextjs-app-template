/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
})

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains: ['<ADD_IMAGE_DOMAIN_HERE>'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
})

module.exports = nextConfig
