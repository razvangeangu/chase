import moment from 'moment';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, StatusBar, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Rect, Svg, Text as TextSVG } from 'react-native-svg';
import BottomSheet from 'reanimated-bottom-sheet';
import styled, { useTheme } from 'styled-components/native';
import { translations } from '../../../locales/translations';
import StyledText from '../../components/StyledText';
import NavigationProps from '../../router';
import CardPage from '../CardPage';
import SvgLogo from './assets/logo.svg';
import Settings from './assets/settings.svg';

const { width, height } = Dimensions.get('window');

const logoHeight = width / 14;

export interface HomePageProps extends NavigationProps<'Home'> {}

export default function HomePage({ navigation: { navigate } }: HomePageProps) {
  const { i18n, t } = useTranslation();

  const insets = useSafeAreaInsets();
  const sheetHeight =
    height - insets.top - logoHeight - 10 - 30 - 14 - 4 - 24 - 30;

  moment.locale(i18n.language);

  const theme = useTheme();

  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

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
    navigate(t(translations.routes.settings) as 'Settings');
  };

  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle={theme.barStyle} />
        <StyledView>
          <HeaderView>
            <SettingsButton
              testID="settingsButton"
              onPress={handlePressSettings}>
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
                decorator={() => {
                  const rectWidth =
                    tooltipPos.value.toString().length * 14 + 20;
                  const rectHeight = 40;

                  const x = tooltipPos.x - rectWidth / 2;
                  const y = tooltipPos.y + rectHeight / 2;

                  return tooltipPos.visible ? (
                    <View testID="tooltip">
                      <Svg>
                        <Rect
                          x={x}
                          y={y}
                          width={rectWidth}
                          height={rectHeight}
                          fill={theme.surface.background}
                          rx={20}
                        />
                        <TextSVG
                          x={tooltipPos.x}
                          y={y + rectHeight - 14}
                          fill={theme.surface.text}
                          fontSize="16"
                          fontWeight="bold"
                          textAnchor="middle">
                          {Intl.NumberFormat(i18n.language, {
                            style: 'currency',
                            currency: 'GBP',
                          }).format(tooltipPos.value)}
                        </TextSVG>
                      </Svg>
                    </View>
                  ) : null;
                }}
                onDataPointClick={chartData => {
                  const isSamePoint =
                    tooltipPos.x === chartData.x &&
                    tooltipPos.y === chartData.y;

                  isSamePoint
                    ? setTooltipPos(previousState => {
                        return {
                          ...previousState,
                          value: chartData.value,
                          visible: !previousState.visible,
                        };
                      })
                    : setTooltipPos({
                        x: chartData.x,
                        value: chartData.value,
                        y: chartData.y,
                        visible: true,
                      });
                }}
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
  left: 30px;
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

const Logo = styled(SvgLogo)<{ svgHeight: number }>`
  aspect-ratio: 5.35;
  height: ${p => p.svgHeight}px;
  margin-top: 10px;
`;

const StyledView = styled.View`
  align-items: center;
  display: flex;
  justify-content: center;
`;
