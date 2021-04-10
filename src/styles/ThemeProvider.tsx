import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components/native';
import { themes } from './themes';

export default function ThemeProvider(props: { children: React.ReactChild }) {
  const theme = themes[useColorScheme() || 'light'];

  const { children } = props;

  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(children)}
    </OriginalThemeProvider>
  );
}
