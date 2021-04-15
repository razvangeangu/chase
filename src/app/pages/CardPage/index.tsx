import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ColorValue,
  Dimensions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { isEmulator } from 'react-native-device-info';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { translations } from '../../../locales/translations';
import CardContext from '../../../utils/card-context';
import index from '../../../utils/get-index';
import CreditCard, {
  CreditCardProps,
  kCardWidth,
} from '../../components/CreditCard';
import StyledSurfaceText from '../../components/StyledSurfaceText';
import { cards, transactions } from './constants';

const screenWidth = Dimensions.get('window').width;

const kCreditCardMarginRight = screenWidth / 19.5;

interface CardPageProps {
  minHeight: number;
}

export default function CardPage({ minHeight }: CardPageProps) {
  const { i18n, t } = useTranslation();

  const { navigate } = useNavigation();

  const { setCard } = useContext(CardContext);

  const handleCardPress = (card: CreditCardProps) => {
    setCard(card);

    isEmulator().then(isEmu => {
      if (!isEmu && (Platform.OS === 'android' || Platform.OS === 'ios')) {
        navigate(t(translations.routes.ar));
      }
    });
  };

  const handleMoreTransactionsPress = (title: string) => {
    navigate(t(translations.routes.transactions), { title });
  };

  return (
    <StyledView minHeight={minHeight}>
      <ScrollLine />

      <Row>
        <Header numberOfLines={2}>{t(translations.cardPage.cards)}</Header>
      </Row>
      <StyledScrollView
        horizontal
        centerContent
        decelerationRate={0}
        snapToInterval={kCardWidth + kCreditCardMarginRight}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          paddingLeft: 47,
          paddingRight: 47 - kCreditCardMarginRight,
        }}>
        {cards.map(card => (
          <CreditCardView key={card.id}>
            <TouchableOpacity
              activeOpacity={0.5}
              testID={`creditCard-${card.id}`}
              onPress={() => handleCardPress(card)}>
              <CreditCard {...card} />
            </TouchableOpacity>
          </CreditCardView>
        ))}
      </StyledScrollView>

      <Row>
        <Header>{t(translations.cardPage.transactions)}</Header>
      </Row>
      {transactions.map(({ name, icon, color }) => (
        <TransactionCategory
          key={name}
          testID={`transactionCategory-${name}`}
          onPress={() => handleMoreTransactionsPress(name)}>
          <TransactionInfo>
            <TransactionIconContainer color={color}>
              <TransactionIcon as={icon} />
            </TransactionIconContainer>
            <TransactionLabel numberOfLines={1}>
              {t(index(translations, name))}
            </TransactionLabel>
          </TransactionInfo>

          <TransactionCost>
            {Intl.NumberFormat(i18n.language, {
              style: 'currency',
              currency: 'GBP',
            }).format(Math.random() * 1000)}
          </TransactionCost>
        </TransactionCategory>
      ))}
    </StyledView>
  );
}

const Row = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 30px 20px;
`;

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

const TransactionCategory = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 30px;
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
`;
