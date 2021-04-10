import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { useTheme } from 'styled-components/native';
import { translations } from '../../../locales/translations';
import StyledText from '../../components/Text';
import ChaseLogo from './assets/chase-logo.svg';

export default function HomePage() {
  const { i18n, t } = useTranslation();

  moment.locale(i18n.language);

  const theme = useTheme();

  return (
    <SafeAreaView>
      <StatusBar barStyle={theme.barStyle} />
      <StyledView>
        <Logo />
        <StyledText>Hello {t(translations.appName)}</StyledText>
        <Button
          title="Change language"
          onPress={() =>
            i18n.changeLanguage(i18n.language === 'en' ? 'ro' : 'en')
          }
        />
      </StyledView>
    </SafeAreaView>
  );
}

const Logo = styled(ChaseLogo)`
  height: 56px;
  width: 299px;
`;

const StyledView = styled.View`
  align-items: center;
  display: flex;
  justify-content: center;
`;
