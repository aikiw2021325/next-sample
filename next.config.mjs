/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.watchOptions = {
            poll: 300,
        };
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        return config;
    },
};

export default nextConfig;
