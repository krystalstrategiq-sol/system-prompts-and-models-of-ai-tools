/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const isPreview = process.env.VERCEL_ENV === 'preview'
    if (isPreview) {
      return [
        {
          source: '/(.*)',
          headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
        },
      ]
    }
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
