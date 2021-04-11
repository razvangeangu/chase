import creditCardType from 'credit-card-type';
import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { translations } from '../../../locales/translations';
import Mastercard from './assets/mastercard.svg';
import Undefined from './assets/undefined.svg';
import Visa from './assets/visa.svg';

const screenWidth = Dimensions.get('window').width;

const cardTypes = {
  visa: Visa,
  mastercard: Mastercard,
  undefined: Undefined,
};

export const kCardWidth = screenWidth / 1.32;
export const kCardHeight = screenWidth / 2.05;

export interface CreditCardProps {
  id?: number;
  balance: number;
  number: string;
  code: number;
  holderName: string;
  holderTitle: string;
  expirationDate: moment.Moment;
  currency: string;
}

export default function CreditCard({
  number,
  balance,
  expirationDate,
  currency,
}: CreditCardProps) {
  let { type } = creditCardType(number)[0];

  if (!Object.keys(cardTypes).includes(type)) {
    type = 'undefined';
  }

  const { i18n, t } = useTranslation();

  return (
    <StyledView>
      <InfoContainer>
        <InfoText>{`•••• ${number.slice(number.length - 4)}`}</InfoText>
        <InfoText>{expirationDate.format('MM/YY')}</InfoText>
      </InfoContainer>
      <StyledText>{t(translations.creditCard.balance)}</StyledText>
      <Balance numberOfLines={1}>
        {Intl.NumberFormat(i18n.language, {
          style: 'currency',
          currency,
        }).format(balance)}
      </Balance>
      <CardType as={cardTypes[type]} preserveAspectRatio="xMinYMin" />
    </StyledView>
  );
}

const CardType = styled.View<{ svgWidth: number }>`
  aspect-ratio: 1;
  bottom: 0;
  position: absolute;
  right: 20px;
  width: 40px;
`;

const StyledView = styled.View`
  background-color: ${p => p.theme.surface.background};
  border-radius: 20px;
  box-shadow: 0 32px 64px ${p => p.theme.shadow};
  display: flex;
  height: ${kCardHeight}px;
  justify-content: center;
  padding: 20px;
  width: ${kCardWidth}px;
`;

const StyledText = styled.Text`
  color: ${p => p.theme.surface.text};
`;

const Balance = styled(StyledText)`
  font-size: 24px;
  font-weight: bold;
`;

const InfoText = styled(StyledText)`
  font-size: 12px;
  font-weight: bold;
`;

const InfoContainer = styled.View`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 20px;
  position: absolute;
  top: 20px;
  width: 100%;
`;
