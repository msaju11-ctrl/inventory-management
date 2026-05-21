/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "2026-s3-inventorymanagement20.s3.eu-north-1.amazonaws.com",
                port: "",
                pathname: "/**"

            }
        ]
    }
};

export default nextConfig;


