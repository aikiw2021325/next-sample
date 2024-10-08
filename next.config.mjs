/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.watchOptions = {
            poll: 1000,
        };
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    },
};

export default nextConfig;
