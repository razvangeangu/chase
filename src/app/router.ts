import { StackScreenProps } from '@react-navigation/stack';
import { ARPageProps } from './pages/ARPage';
import { HomePageProps } from './pages/HomePage';
import { SettingsPageProps } from './pages/SettingsPage';
import { TransactionsProps } from './pages/TransactionsPage';

type ParamList = {
  Home?: HomePageProps;
  Settings?: SettingsPageProps;
  Transactions?: TransactionsProps;
  ARPageProps?: ARPageProps;
};

type NavigationProps<RouteName extends keyof ParamList> = StackScreenProps<
  ParamList,
  RouteName
>;

export default NavigationProps;
