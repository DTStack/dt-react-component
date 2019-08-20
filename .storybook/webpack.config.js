
const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

// {
//     loader: 'babel-loader',
//     exclude: /node_modules/,
//     test: /\.(ts|tsx)$/,
//     options: {
//         presets: ["@babel/react"],
//         plugins: [
//             ['import', {libraryName: "antd", style: true}]
//         ]
//     },
// }
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
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
  });
  config.resolve.extensions.push('.ts', '.tsx');
  // Return the altered config
  return config;
};