import { createStackNavigator } from '@react-navigation/stack';
import 'moment/locale/ro';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
// Import languages
import '../locales/i18n';
import { translations } from '../locales/translations';
import StyledNavigationContainer from '../styles/StyledNavigationContainer';
import ThemeProvider from '../styles/ThemeProvider';
import AuthContext, { AuthContextType } from '../utils/auth-context';
import CardContext, { CardContextType } from '../utils/card-context';
import { CreditCardProps } from './components/CreditCard';
import ARPage from './pages/ARPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import TransactionsPage from './pages/TransactionsPage';

export const Stack = createStackNavigator();

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

  const [cardProps, setCardProps] = useState<CreditCardProps>();

  const authContext = useMemo<AuthContextType>(
    () => ({
      signIn: () => {
        // TODO: sanitisation of userId and password
        setUser({});
      },
      signOut: () => {
        setUser(null);
      },
      signUp: () => {
        // TODO: sanitisation of userId and password
        setUser({});
      },
    }),
    [],
  );

  const cardContext = useMemo<CardContextType>(
    () => ({
      card: cardProps,
      setCard: card => {
        setCardProps(card);
      },
    }),
    [cardProps],
  );

  const theme = useTheme();

  const { t } = useTranslation();

  return (
    <AuthContext.Provider value={authContext}>
      <CardContext.Provider value={cardContext}>
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
              <Stack.Screen
                name={t(translations.routes.home)}
                component={HomePage}
              />
              <Stack.Screen
                name={t(translations.routes.settings)}
                component={SettingsPage}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name={t(translations.routes.transactions)}
                component={TransactionsPage}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name={t(translations.routes.ar)}
                component={ARPage}
                options={{ headerShown: true }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name={t(translations.routes.login)}
                component={LoginPage}
                options={{
                  cardStyle: { backgroundColor: theme?.surface?.background },
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </CardContext.Provider>
    </AuthContext.Provider>
  );
};
