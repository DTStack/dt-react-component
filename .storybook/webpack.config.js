
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
    config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx", ".scss", ".css");
    // Return the altered config
    return config;
};