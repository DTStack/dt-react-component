const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          './css-plugin',
          [
            '@babel/plugin-proposal-decorators',
            {
              legacy: true,
            },
          ],
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-transform-modules-commonjs',
        ]
      : [
          [
            '@babel/plugin-proposal-decorators',
            {
              legacy: true,
            },
          ],
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-transform-modules-commonjs',
        ],
};
module.exports = config;
