import { createStackNavigator } from '@react-navigation/stack';
import 'moment/locale/ro';
import React from 'react';
import { useTheme } from 'styled-components';
// Import languages
import '../locales/i18n';
import StyledNavigationContainer from '../styles/StyledNavigationContainer';
import ThemeProvider from '../styles/ThemeProvider';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <StyledNavigationContainer>
        <StyledNavigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        />
      </StyledNavigationContainer>
    </ThemeProvider>
  );
}

type ExtractProps<P> = P extends React.ComponentType<infer T> ? T : never;
const StyledNavigator: React.FC<
  Omit<ExtractProps<typeof Stack.Navigator>, 'children'>
> = ({ screenOptions, ...props }) => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      {...{
        ...props,
        screenOptions: {
          ...screenOptions,
          cardStyle: {
            backgroundColor: theme?.background,
          },
          headerStyle: {
            shadowColor: 'transparent',
          },
          headerTintColor: theme?.text,
        },
      }}>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ cardStyle: { backgroundColor: theme?.surface?.background } }}
      />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen
        name="Settings"
        component={SettingsPage}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
