import { createContext } from 'react';
import { CreditCardProps } from '../app/components/CreditCard/index';

export interface CardContextType {
  card?: CreditCardProps;
  setCard: (card: CreditCardProps) => void;
}

const CardContext = createContext({} as CardContextType);

export default CardContext;
