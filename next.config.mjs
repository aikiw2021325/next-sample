/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
    // ファイル監視の間隔を調整

    webpackDevMiddleware: (config) => {
        config.watchOptions = {
            poll: 1000, // 1秒ごとにファイルの変更をポーリング
            aggregateTimeout: 100, // 変更があった後に再ビルドを遅らせる時間
        };
        return config;
    },
    reactStrictMode: true,  // ReactのStrictモードを有効化（オプション）
};

export default nextConfig;
