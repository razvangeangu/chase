import { StatusBarStyle } from 'react-native';

const blue = {
  50: '#E7F2FA',
  100: '#CFE4F4',
  200: '#A0CAEA',
  300: '#70AFDF',
  400: '#4195D5',
  500: '#117ACA',
  600: '#0E62A2',
  700: '#0A4979',
  800: '#073151',
  900: '#031828',
};

const grey = {
  50: '#F3F3F3',
  100: '#E6E6E6',
  200: '#CECECE',
  300: '#B5B5B5',
  400: '#9D9D9D',
  500: '#848484',
  600: '#6A6A6A',
  700: '#4F4F4F',
  800: '#353535',
  900: '#211E1E',
};

const lightTheme = {
  primary: blue[500],
  background: '#ffffff',

  text: grey[900],
  textSecondary: grey[500],
  border: grey[100],

  surface: {
    background: grey[50],
    backgroundHover: grey[100],
    backgroundActive: grey[200],

    backgroundSelected: blue[500],
    backgroundSelectedHover: blue[700],
    backgroundSelectedActive: blue[800],

    text: '#ffffff',
  },

  barStyle: 'dark-content' as StatusBarStyle,
};

const darkTheme: Theme = {
  primary: blue[500],
  background: grey[900],

  text: '#ffffff',
  textSecondary: grey[400],
  border: grey[800],

  surface: {
    background: grey[700],
    backgroundHover: grey[800],
    backgroundActive: grey[900],

    backgroundSelected: blue[500],
    backgroundSelectedHover: blue[700],
    backgroundSelectedActive: blue[800],

    text: '#ffffff',
  },

  barStyle: 'light-content' as StatusBarStyle,
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
