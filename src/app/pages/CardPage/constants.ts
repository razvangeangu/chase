import moment from 'moment';
import { transactions as transactionColors } from '../../../styles/colors';
import { CreditCardProps } from '../../components/CreditCard';
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

export const transactions = [
  {
    name: 'transactions.bills' as const,
    icon: Bills,
    color: transactionColors.bills,
  },
  {
    name: 'transactions.business' as const,
    icon: Business,
    color: transactionColors.business,
  },
  {
    name: 'transactions.cash' as const,
    icon: Cash,
    color: transactionColors.cash,
  },
  {
    name: 'transactions.charity' as const,
    icon: Charity,
    color: transactionColors.charity,
  },
  {
    name: 'transactions.eatingOut' as const,
    icon: EatingOut,
    color: transactionColors.eatingOut,
  },
  {
    name: 'transactions.education' as const,
    icon: Education,
    color: transactionColors.education,
  },
  {
    name: 'transactions.entertainment' as const,
    icon: Entertainment,
    color: transactionColors.entertainment,
  },
  {
    name: 'transactions.family' as const,
    icon: Family,
    color: transactionColors.family,
  },
  {
    name: 'transactions.general' as const,
    icon: General,
    color: transactionColors.general,
  },
  {
    name: 'transactions.groceries' as const,
    icon: Groceries,
    color: transactionColors.groceries,
  },
  {
    name: 'transactions.holidays' as const,
    icon: Holidays,
    color: transactionColors.holidays,
  },
  {
    name: 'transactions.housing' as const,
    icon: Housing,
    color: transactionColors.housing,
  },
  {
    name: 'transactions.investments' as const,
    icon: Investments,
    color: transactionColors.investments,
  },
  {
    name: 'transactions.personalCare' as const,
    icon: PersonalCare,
    color: transactionColors.personalCare,
  },
  {
    name: 'transactions.shopping' as const,
    icon: Shopping,
    color: transactionColors.shopping,
  },
  {
    name: 'transactions.transport' as const,
    icon: Transport,
    color: transactionColors.transport,
  },
];

export const cards: CreditCardProps[] = [
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
    number: '342874460842607',
    code: 123,
    holderName: 'R G GEANGU',
    holderTitle: 'MR',
    expirationDate: moment().add({ years: 3 }),
    balance: 3000 - Math.random() * 1500,
    currency: 'GBP',
  },
];
