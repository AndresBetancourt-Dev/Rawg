/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.fallback = { fs: false, module: false, path : false }
    return config
  },
}
