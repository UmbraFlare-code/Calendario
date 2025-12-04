const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
  },
  // Eliminar output: 'export' para Vercel
  // Eliminar trailingSlash, basePath y assetPrefix para Vercel
}

export default nextConfig