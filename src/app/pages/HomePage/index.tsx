import { StackNavigationProp } from '@react-navigation/stack';
import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, StatusBar } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import BottomSheet from 'reanimated-bottom-sheet';
import styled, { useTheme } from 'styled-components/native';
import { translations } from '../../../locales/translations';
import StyledText from '../../components/StyledText';
import CardPage from '../CardPage';
import ChaseLogo from './assets/chase-logo.svg';
import Settings from './assets/settings.svg';

const { width, height } = Dimensions.get('window');

const logoHeight = width / 14;

export interface HomePageProps {
  navigation: StackNavigationProp<
    { Home: undefined; Settings: undefined },
    'Home'
  >;
}

export default function HomePage({ navigation }: HomePageProps) {
  const { i18n, t } = useTranslation();

  const insets = useSafeAreaInsets();
  const sheetHeight =
    height - insets.top - logoHeight - 10 - 30 - 14 - 4 - 24 - 30;

  moment.locale(i18n.language);

  const theme = useTheme();

  const data: LineChartData = {
    labels: [1, 2, 3, 4, 5, 6].map(month =>
      moment().subtract({ months: month }).format('MMM'),
    ),
    datasets: [
      {
        data: [13454.11, 19644.22, 21456.53, 18443.53, 16433.53, 14694.53],
        color: () => theme.primary,
        strokeWidth: 3,
      },
    ],
  };

  const chartConfig: AbstractChartConfig = {
    backgroundColor: theme.background,
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    fillShadowGradient: theme.primary,
    fillShadowGradientOpacity: 0.3,
    color: () => theme.border,
    propsForDots: {
      r: 6,
      fill: theme.primary,
      strokeWidth: 3,
      stroke: theme.text,
    },
  };

  const handlePressSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle={theme.barStyle} />
        <StyledView>
          <HeaderView>
            <SettingsButton onPress={handlePressSettings}>
              <SettingsIcon />
            </SettingsButton>
            <Logo svgHeight={logoHeight} />
          </HeaderView>

          <StatsView>
            <TotalBalanceContainer>
              <TotalBalanceText>
                {t(translations.homePage.totalBalance)}
              </TotalBalanceText>
              <BalanceText numberOfLines={1}>
                {Intl.NumberFormat(i18n.language, {
                  style: 'currency',
                  currency: 'GBP',
                }).format(14694.53)}
              </BalanceText>

              <StyledLineChart
                withHorizontalLines={false}
                data={data}
                width={width + 20}
                height={height / 3}
                withHorizontalLabels={false}
                chartConfig={chartConfig}
                bezier
              />
            </TotalBalanceContainer>
          </StatsView>
        </StyledView>
      </SafeAreaView>
      <BottomSheet
        snapPoints={[sheetHeight, height / 2.5]}
        borderRadius={60}
        initialSnap={1}
        renderContent={() => <CardPage minHeight={sheetHeight} />}
      />
    </>
  );
}

const HeaderView = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 40px;
  width: 100%;
`;

const SettingsButton = styled.TouchableOpacity`
  left: 40px;
  padding: 10px;
  position: absolute;
  top: 2px;
`;

const SettingsIcon = styled(Settings)`
  height: 24px;
  line-height: ${logoHeight}px;
`;

const StyledLineChart = styled(LineChart)`
  margin-top: 30px;
`;

const StatsView = styled.View`
  align-items: center;
  display: flex;
  margin: 30px 30px 0;
`;

const BalanceText = styled(StyledText)`
  font-size: 24px;
  font-weight: bold;
`;

const TotalBalanceText = styled(StyledText)`
  font-size: 14px;
  margin-bottom: 4px;
  opacity: 0.5;
`;

const TotalBalanceContainer = styled.View`
  align-items: center;
  display: flex;
`;

const Logo = styled(ChaseLogo)<{ svgHeight: number }>`
  aspect-ratio: 5.35;
  height: ${p => p.svgHeight}px;
  margin-top: 10px;
`;

const StyledView = styled.View`
  align-items: center;
  display: flex;
  justify-content: center;
`;
