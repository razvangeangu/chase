import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StatusBar } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { translations } from '../../../locales/translations';
import AuthContext from '../../../utils/auth-context';
import FilledButton from '../../components/FilledButton';

export default function SettingsPage() {
  const theme = useTheme();

  const { t } = useTranslation();

  const { signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut();
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={theme.barStyle} />
      <StyledView>
        <FilledButton
          title={t(translations.settingsPage.signOut)}
          onPress={handleSignOut}
        />
      </StyledView>
    </SafeAreaView>
  );
}

const StyledView = styled.View`
  padding: 40px;
`;
