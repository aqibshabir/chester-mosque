import type { NextConfig } from 'next';

const devCSP =
  "default-src 'self'; " +
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com; " +
  "style-src 'self' 'unsafe-inline'; " +
  "img-src 'self' data: https: https://*.stripe.com; " +
  "connect-src 'self' https://api.aladhan.com https://api.stripe.com; " +
  "frame-ancestors 'self'; " +
  'frame-src https://js.stripe.com;';

const prodCSP =
  "default-src 'self'; " +
  "script-src 'self' 'unsafe-inline' https://js.stripe.com; " +
  "style-src 'self' 'unsafe-inline'; " +
  "img-src 'self' data: https: https://*.stripe.com; " +
  "connect-src 'self' https://api.aladhan.com https://api.stripe.com; " +
  "frame-ancestors 'self'; " +
  'frame-src https://js.stripe.com;';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
  devIndicators: false,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'development' ? devCSP : prodCSP,
          },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
