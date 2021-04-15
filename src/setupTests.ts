import '@testing-library/jest-native/extend-expect';
import 'jest-styled-components';
import 'react-native-gesture-handler/jestSetup';
import './locales/i18n';

jest.useFakeTimers();

jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line global-require
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue('light'),
}));

jest.mock('react-native-video', () => 'Video');

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');

  RN.NativeModules.VRTARTrackingTargetsModule = {
    createTargets: jest.fn(),
  };

  return RN;
});

jest.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
}));
