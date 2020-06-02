
module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: false
            }
        ],
        "@babel/preset-react",
        "@babel/preset-typescript"
    ],
    plugins: [
        "@babel/plugin-transform-runtime",
        [
            "@babel/plugin-proposal-decorators",
            {
                legacy: true
            }
        ],
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-modules-commonjs"
    ]
};
