/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // opcional: garante trailing slash (bom pra static host)
  trailingSlash: true,
}

export default nextConfig
