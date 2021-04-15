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
  'react-viro',
  'react-native-device-info',
];

module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    `node_modules/(?!((jest-)?${ignoreTransformation.join('|')})/)`,
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svg-mock.js',
    '\\.png': '<rootDir>/__mocks__/png-mock.js',
    '\\.mp4': '<rootDir>/__mocks__/mp4-mock.js',
  },
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
    '\\.(svg|png|mp4)$',
    '-mock\\.js',
  ],
};
