/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        '@tanstack/react-query', '@tanstack/query-core',
    ],
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            pathname: '/t/p/**',
        }, ],
    }
};

export default nextConfig;