const path = require("path");

// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /.(scss|sass)$/,
//                 loaders: ["style-loader", "css-loader", "sass-loader"],
//                 include: path.resolve(__dirname, "../")
//             }
//         ]
//     }
// }

// 保留storybook原有默认配置 + 扩展配置
module.exports = function (baseConfig, env, defaultConfig) {
    defaultConfig.module.rules.push({
      test: /\.stories\.js$/,
      loaders: [require.resolve('@storybook/addon-storysource/loader')],
      enforce: 'pre',
    }, {
        test: /.(scss|sass)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
    });

    return defaultConfig;
};