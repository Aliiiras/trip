/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost'], 
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '6501',
          pathname: '/static/images/**',
        },
      ],
    },
  };
  
  export default nextConfig;