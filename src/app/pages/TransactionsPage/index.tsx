import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { translations } from '../../../locales/translations';
import index from '../../../utils/get-index';
import StyledSurfaceText from '../../components/StyledSurfaceText';
import StyledText from '../../components/StyledText';
import NavigationProps from '../../router';
import { transactions } from '../CardPage/constants';
import { currentTransactions } from './constants';

export interface TransactionsProps extends NavigationProps<'Transactions'> {
  title: Array<
    (typeof transactions extends Array<infer T> ? T : never)['name']
  >;
}

export default function SettingsPage({ route: { params } }: TransactionsProps) {
  const { title } = params!;

  const { i18n, t } = useTranslation();
  return (
    <StyledView
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
        paddingBottom: 80,
      }}>
      <Header>{t(index(translations, title))}</Header>
      {currentTransactions.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Row key={i}>
          <MerchantLogo
            source={{
              uri: `https://logo.clearbit.com/${item.merchantUrl}`,
            }}
            resizeMode="contain"
          />
          <MerchantText numberOfLines={1}>{item.merchant}</MerchantText>
          <ValueText>
            {Intl.NumberFormat(i18n.language, {
              style: 'currency',
              currency: item.currency,
            }).format(item.value)}
          </ValueText>
        </Row>
      ))}
    </StyledView>
  );
}

const StyledView = styled(ScrollView)`
  height: 100%;
  padding: 20px;
`;

const Header = styled(StyledText)`
  flex: 1;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Row = styled.View`
  align-items: center;
  background-color: ${p => p.theme.surface.background};
  border-radius: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 20px 10px;
`;

const ValueText = styled(StyledSurfaceText)`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;

const MerchantText = styled(StyledSurfaceText)`
  flex: 1;
`;

const MerchantLogo = styled.Image`
  background-color: ${p => p.theme.border};
  border-radius: 36px;
  height: 36px;
  margin-right: 8px;
  width: 36px;
`;
