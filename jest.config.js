
module.exports = {
    name: 'dt-react-component',
    globals: {
    },
    // setupFilesAfterEnv: ["./setupTests.js"], // enzyme adapter
    transformIgnorePatterns: ["/node_modules/",  "dist","lib"],
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        "^.+\\.[jt]s?(x)$": "babel-jest"
    },
    testMatch: [
        '**/__tests__/**/(*.)+(spec|test).[jt]s?(x)',
        '**/test/**/(*.)+(spec|test).[jt]s?(x)'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/mock/fileMock.js',
        '\\.(css|scss|less)$': '<rootDir>/mock/styleMock.js'
    }
};
