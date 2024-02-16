/** @type {import('next').NextConfig} */
const nextConfig = {
    image: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: ""
            },
        ],
    },
};

export default nextConfig;
