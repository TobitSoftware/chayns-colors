module.exports = {
    roots: [
        '<rootDir>/cjs',
    ],
    verbose: true,
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.ts$': 'babel-jest',
    },
    testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.js?$',
    moduleFileExtensions: [
        'js',
    ],
};
