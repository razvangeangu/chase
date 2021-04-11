import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

export default function SettingsPage() {
  const theme = useTheme();

  return (
    <SafeAreaView>
      <StatusBar barStyle={theme.barStyle} />
    </SafeAreaView>
  );
}
