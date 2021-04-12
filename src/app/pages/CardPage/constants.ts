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
    name: 'transactions.bills',
    icon: Bills,
    color: transactionColors.bills,
  },
  {
    name: 'transactions.business',
    icon: Business,
    color: transactionColors.business,
  },
  {
    name: 'transactions.cash',
    icon: Cash,
    color: transactionColors.cash,
  },
  {
    name: 'transactions.charity',
    icon: Charity,
    color: transactionColors.charity,
  },
  {
    name: 'transactions.eatingOut',
    icon: EatingOut,
    color: transactionColors.eatingOut,
  },
  {
    name: 'transactions.education',
    icon: Education,
    color: transactionColors.education,
  },
  {
    name: 'transactions.entertainment',
    icon: Entertainment,
    color: transactionColors.entertainment,
  },
  {
    name: 'transactions.family',
    icon: Family,
    color: transactionColors.family,
  },
  {
    name: 'transactions.general',
    icon: General,
    color: transactionColors.general,
  },
  {
    name: 'transactions.groceries',
    icon: Groceries,
    color: transactionColors.groceries,
  },
  {
    name: 'transactions.holidays',
    icon: Holidays,
    color: transactionColors.holidays,
  },
  {
    name: 'transactions.housing',
    icon: Housing,
    color: transactionColors.housing,
  },
  {
    name: 'transactions.investments',
    icon: Investments,
    color: transactionColors.investments,
  },
  {
    name: 'transactions.personalCare',
    icon: PersonalCare,
    color: transactionColors.personalCare,
  },
  {
    name: 'transactions.shopping',
    icon: Shopping,
    color: transactionColors.shopping,
  },
  {
    name: 'transactions.transport',
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
    number: '5539000999018772',
    code: 123,
    holderName: 'R G GEANGU',
    holderTitle: 'MR',
    expirationDate: moment().add({ years: 3 }),
    balance: 3000 - Math.random() * 1500,
    currency: 'GBP',
  },
];
