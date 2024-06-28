/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        '@tanstack/react-query', '@tanstack/query-core',
    ],
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'api.themoviedb.org',
            port: '',
            pathname: '/3/**',
        }, ],
    }
};

export default nextConfig;