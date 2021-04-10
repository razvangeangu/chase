module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-iphone-x-helper|react-navigation|react-navigation-redux-helpers|@react-navigation/.*|@flyskywhy/react-native-locale-detector)/)',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svg-mock.js',
    '\\.png': '<rootDir>/__mocks__/png-mock.js',
  },
  setupFilesAfterEnv: ['./src/setupTests.ts'],
};
