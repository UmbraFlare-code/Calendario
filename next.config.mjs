const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  // Cambia 'tu-repositorio' por el nombre real de tu repo en GitHub
  basePath: process.env.NODE_ENV === 'production' ? '/Calendario' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Calendario/' : '',
}

export default nextConfig
