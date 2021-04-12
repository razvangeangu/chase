import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ColorValue, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { translations } from '../../../locales/translations';
import { transactions as transactionColors } from '../../../styles/colors';
import CreditCard, {
  CreditCardProps,
  kCardWidth,
} from '../../components/CreditCard';
import StyledSurfaceText from '../../components/StyledSurfaceText';
import Bills from './assets/bills.svg';
import Business from './assets/business.svg';
import Cash from './assets/cash.svg';
import Charity from './assets/charity.svg';
import EatingOut from './assets/eating-out.svg';
import Education from './assets/education.svg';
import Entertainment from './assets/entertainment.svg';
import Family from './assets/family.svg';
import General from './assets/general.svg';
import Groceries from './assets/groceries.svg';
import Holidays from './assets/holidays.svg';
import Housing from './assets/housing.svg';
import Investments from './assets/investments.svg';
import PersonalCare from './assets/personal-care.svg';
import Shopping from './assets/shopping.svg';
import Transport from './assets/transport.svg';

const screenWidth = Dimensions.get('window').width;

const kCreditCardMarginRight = screenWidth / 19.5;

interface CardPageProps {
  minHeight: number;
}

export default function CardPage({ minHeight }: CardPageProps) {
  const { i18n, t } = useTranslation();

  const cards: CreditCardProps[] = [
    {
      id: 0,
      number: '4024007190495639',
      code: 123,
      holderName: 'R G GEANGU',
      holderTitle: 'MR',
      expirationDate: moment().add({ years: 3 }),
      balance: 3000 - Math.random() * 1500,
      currency: 'GBP',
    },
    {
      id: 1,
      number: '5539000999018772',
      code: 123,
      holderName: 'R G GEANGU',
      holderTitle: 'MR',
      expirationDate: moment().add({ years: 3 }),
      balance: 3000 - Math.random() * 1500,
      currency: 'USD',
    },
    {
      id: 2,
      number: '4024007190495639',
      code: 123,
      holderName: 'R G GEANGU',
      holderTitle: 'MR',
      expirationDate: moment().add({ years: 3 }),
      balance: 3000 - Math.random() * 1500,
      currency: 'GBP',
    },
    {
      id: 3,
      number: '5539000999018772',
      code: 123,
      holderName: 'R G GEANGU',
      holderTitle: 'MR',
      expirationDate: moment().add({ years: 3 }),
      balance: 3000 - Math.random() * 1500,
      currency: 'GBP',
    },
  ];

  const transactions = [
    {
      name: t(translations.transactions.bills),
      icon: Bills,
      color: transactionColors.bills,
    },
    {
      name: t(translations.transactions.business),
      icon: Business,
      color: transactionColors.business,
    },
    {
      name: t(translations.transactions.cash),
      icon: Cash,
      color: transactionColors.cash,
    },
    {
      name: t(translations.transactions.charity),
      icon: Charity,
      color: transactionColors.charity,
    },
    {
      name: t(translations.transactions.eatingOut),
      icon: EatingOut,
      color: transactionColors.eatingOut,
    },
    {
      name: t(translations.transactions.education),
      icon: Education,
      color: transactionColors.education,
    },
    {
      name: t(translations.transactions.entertainment),
      icon: Entertainment,
      color: transactionColors.entertainment,
    },
    {
      name: t(translations.transactions.family),
      icon: Family,
      color: transactionColors.family,
    },
    {
      name: t(translations.transactions.general),
      icon: General,
      color: transactionColors.general,
    },
    {
      name: t(translations.transactions.groceries),
      icon: Groceries,
      color: transactionColors.groceries,
    },
    {
      name: t(translations.transactions.holidays),
      icon: Holidays,
      color: transactionColors.holidays,
    },
    {
      name: t(translations.transactions.housing),
      icon: Housing,
      color: transactionColors.housing,
    },
    {
      name: t(translations.transactions.investments),
      icon: Investments,
      color: transactionColors.investments,
    },
    {
      name: t(translations.transactions.personalCare),
      icon: PersonalCare,
      color: transactionColors.personalCare,
    },
    {
      name: t(translations.transactions.shopping),
      icon: Shopping,
      color: transactionColors.shopping,
    },
    {
      name: t(translations.transactions.transport),
      icon: Transport,
      color: transactionColors.transport,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleCardPress = (card: CreditCardProps) => {
    // TODO: implement
  };

  return (
    <StyledView minHeight={minHeight}>
      <ScrollLine />

      <Header numberOfLines={2}>{t(translations.cardPage.cards)}</Header>
      <StyledScrollView
        horizontal
        centerContent
        decelerationRate={0}
        snapToInterval={kCardWidth + kCreditCardMarginRight}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          paddingLeft: 47,
          paddingRight: 47 - kCreditCardMarginRight,
        }}>
        {cards.map(card => (
          <CreditCardView key={card.id}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => handleCardPress(card)}>
              <CreditCard {...card} />
            </TouchableOpacity>
          </CreditCardView>
        ))}
      </StyledScrollView>

      <Header>{t(translations.cardPage.transactions)}</Header>
      <Transactions>
        {transactions.map(({ name, icon, color }) => (
          <TransactionCategory key={name}>
            <TransactionInfo>
              <TransactionIconContainer color={color}>
                <TransactionIcon as={icon} />
              </TransactionIconContainer>
              <TransactionLabel numberOfLines={1}>{name}</TransactionLabel>
            </TransactionInfo>

            <TransactionCost>
              {Intl.NumberFormat(i18n.language, {
                style: 'currency',
                currency: 'GBP',
              }).format(Math.random() * 1000)}
            </TransactionCost>
          </TransactionCategory>
        ))}
      </Transactions>
    </StyledView>
  );
}

const ScrollLine = styled.View`
  background-color: ${p => p.theme.border};
  border-radius: 6px;
  height: 6px;
  left: 50%;
  margin: 20px 0 0 -20px;
  position: absolute;
  right: 50%;
  top: 0;
  width: 40px;
`;

const TransactionIcon = styled.View`
  aspect-ratio: 1;
  width: 24px;
`;

const TransactionCost = styled(StyledSurfaceText)`
  font-size: 16px;
  font-weight: bold;
`;

const TransactionInfo = styled.View`
  align-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const TransactionLabel = styled(StyledSurfaceText)`
  flex: 1;
  font-size: 16px;
  margin-right: 14px;
`;

const TransactionIconContainer = styled.View<{ color: ColorValue }>`
  background-color: ${p => p.color as string};
  border-radius: 36px;
  margin-right: 14px;
  padding: 12px;
`;

const Transactions = styled.View`
  margin: 0 40px;
`;

const TransactionCategory = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CreditCardView = styled.View`
  margin-right: 20px;
`;

const StyledScrollView = styled(ScrollView)`
  overflow: visible;
`;

const StyledView = styled.View<{ minHeight?: number }>`
  background-color: ${p => p.theme.surface.background};
  min-height: ${p => p.minHeight}px;
  padding-bottom: 40px;
`;

const Header = styled(StyledSurfaceText)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 40px 40px 0;
`;
