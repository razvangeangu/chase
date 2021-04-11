import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { useTheme } from 'styled-components/native';

type ExtractProps<P> = P extends React.ForwardRefExoticComponent<infer T>
  ? T
  : never;

const StyledNavigationContainer: React.FC<
  ExtractProps<typeof NavigationContainer>
> = props => {
  const theme = useTheme();

  return (
    <NavigationContainer
      {...{
        ...props,
        theme: {
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
        },
      }}
    />
  );
};

export default StyledNavigationContainer;
