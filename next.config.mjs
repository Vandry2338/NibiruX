/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Enable ESLint during builds
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Enable TypeScript checking during builds
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  // Add experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
