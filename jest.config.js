const ignoreTransformation = [
  'react-native',
  '@react-native(-community)?',
  'react-native-iphone-x-helper',
  'react-navigation',
  'react-navigation-redux-helpers',
  '@react-navigation/.*',
  '@flyskywhy/react-native-locale-detector',
  'react-native-chart-kit',
  'react-native-reanimated',
  'react-native-video',
];

module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    `node_modules/(?!((jest-)?${ignoreTransformation.join('|')})/)`,
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svg-mock.js',
    '\\.png': '<rootDir>/__mocks__/png-mock.js',
  },
  setupFilesAfterEnv: ['./src/setupTests.ts'],
};
