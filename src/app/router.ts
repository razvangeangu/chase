import { StackScreenProps } from '@react-navigation/stack';
import { HomePageProps } from './pages/HomePage/index';
import { SettingsPageProps } from './pages/SettingsPage';
import { TransactionsProps } from './pages/TransactionsPage';

type ParamList = {
  Home?: HomePageProps;
  Settings?: SettingsPageProps;
  Transactions?: TransactionsProps;
};

type NavigationProps<RouteName extends keyof ParamList> = StackScreenProps<
  ParamList,
  RouteName
>;

export default NavigationProps;
