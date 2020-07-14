
const path = require('path');
module.exports = async ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('babel-loader'),
        options: {
            presets: [['react-app', { flow: false, typescript: true }]],
            plugins: [
                ['import', { libraryName: "antd", style: true }]
            ]
        }
    }, {
        test: /\.stories\.(ts|tsx)$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
    }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    }, {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', {
            loader: "less-loader",
            options: {
                javascriptEnabled: true
            }
        }],
        include: [/[\\/]node_modules[\\/].*antd/],
    }, {
        test: /\.(jpg|png|gif)$/,
        loader: ["file-loader", "url-loader?limit=100000"]
    }, {
        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache|webp)(\?|$)/,
        loader: [
            "file-loader?name=[name].[ext]",
            "url-loader?limit=100000"
        ]
    });
    /**
     * TODO
     * build error
     * FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
     * 方案一：执行 npm run increase-memory-limit 加大 node 对内存限制解决，但是编译速度偏慢，本地可以解决，jenkins 仍存在问题
     * 方案二：build 时设置 devtool = 'eval'; 控制台会有 SourceMap warning，不太友好，但速度较快
     */
    if (process.env.NODE_ENV === 'production') {
        config.devtool = 'eval';
    }
    config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx", ".scss", ".css");
    // Return the altered config
    return config;
};