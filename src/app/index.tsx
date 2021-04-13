import { createStackNavigator } from '@react-navigation/stack';
import 'moment/locale/ro';
import React, { useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
// Import languages
import '../locales/i18n';
import StyledNavigationContainer from '../styles/StyledNavigationContainer';
import ThemeProvider from '../styles/ThemeProvider';
import AuthContext, { AuthContextType } from '../utils/auth-context';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import TransactionsPage from './pages/TransactionsPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <StyledNavigationContainer>
        <StyledNavigator screenOptions={{ headerShown: false }} />
      </StyledNavigationContainer>
    </ThemeProvider>
  );
}

const StyledNavigator: React.FC<
  Omit<
    typeof Stack.Navigator extends React.ComponentType<infer T> ? T : never,
    'children'
  >
> = ({ screenOptions, ...props }) => {
  const [user, setUser] = useState<any>(null);

  const authContext = useMemo<AuthContextType>(
    () => ({
      signIn: () => {
        setUser({});
      },
      signOut: () => {
        setUser(null);
      },
      signUp: () => {
        setUser({});
      },
    }),
    [],
  );

  const theme = useTheme();

  return (
    <AuthContext.Provider value={authContext}>
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
        {user != null ? (
          <>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen
              name="Settings"
              component={SettingsPage}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Transactions"
              component={TransactionsPage}
              options={{ headerShown: true }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{
                cardStyle: { backgroundColor: theme?.surface?.background },
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};
