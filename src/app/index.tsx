import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'moment/locale/ro';
import React from 'react';
// Import languages
import '../locales/i18n';
import StyledNavigationContainer from '../styles/StyledNavigationContainer';
import ThemeProvider from '../styles/ThemeProvider';
import HomePage from './pages/HomePage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <StyledNavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomePage} />
        </Tab.Navigator>
      </StyledNavigationContainer>
    </ThemeProvider>
  );
}
