import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { useTheme } from 'styled-components/native';

const StyledNavigationContainer: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        dark: useColorScheme() === 'dark',
        colors: {
          ...DefaultTheme.colors,
          primary: theme.primary,
          background: theme.background,
          card: theme.background,
          text: theme.text,
          border: theme.border,
        },
      }}>
      {children}
    </NavigationContainer>
  );
};

export default StyledNavigationContainer;
