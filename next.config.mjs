const nextConfig = {
  experimental: {
    turbo: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Calendario' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Calendario/' : '',
}

export default nextConfig
