import { StatusBarStyle } from 'react-native';
import { blue, grey } from './colors';

const lightTheme = {
  primary: blue[500],
  background: grey[900],

  text: '#fff',
  textSecondary: grey[500],
  border: grey[200],
  shadow: grey[300],

  surface: {
    background: grey[50],
    shadow: 'rgba(0, 0, 0, 0.15)',
    text: grey[900],
  },

  barStyle: 'light-content' as StatusBarStyle,
};

const darkTheme: Theme = {
  primary: blue[500],
  background: grey[950],

  text: '#fff',
  textSecondary: grey[500],
  border: grey[700],
  shadow: grey[950],

  surface: {
    background: grey[900],
    shadow: 'rgba(0, 0, 0, 0.35)',
    text: '#ffffff',
  },

  barStyle: 'light-content' as StatusBarStyle,
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
