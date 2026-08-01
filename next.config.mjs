/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'agnthos.se',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Domain DNS points at Vercel, so /cpanel would otherwise load the Next app.
  // Send those requests to the hosting server's real cPanel login.
  async redirects() {
    return [
      {
        source: '/cpanel',
        destination: 'https://mail.kymed.co:2083',
        permanent: false,
      },
      {
        source: '/cpanel/',
        destination: 'https://mail.kymed.co:2083',
        permanent: false,
      },
      {
        source: '/cpanel/:path*',
        destination: 'https://mail.kymed.co:2083',
        permanent: false,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
