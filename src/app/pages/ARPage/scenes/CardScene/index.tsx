import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import {
  ViroARImageMarker,
  ViroARScene,
  ViroARTrackingTargets,
  ViroText,
} from 'react-viro';
import { translations } from '../../../../../locales/translations';
import CardContext from '../../../../../utils/card-context';

export default function CardScene() {
  const { i18n, t } = useTranslation();

  const rotation = [-90, 0, 0];

  const x0 = 0.1;
  const y0 = 0;
  const z0 = 0;

  const width = 2;

  const { card } = useContext(CardContext);

  return (
    <ViroARScene>
      <ViroARImageMarker target="targetOne">
        <ViroText
          text={t(translations.cardScene.totalBalance)}
          width={width}
          scale={[0.05, 0.05, 0.05]}
          position={[x0, y0, z0]}
          rotation={rotation}
          style={sceneStyles.title}
        />

        <ViroText
          text={Intl.NumberFormat(i18n.language, {
            style: 'currency',
            currency: 'GBP',
          }).format(card?.balance || 0)}
          width={width}
          scale={[0.05, 0.05, 0.05]}
          position={[x0, y0, z0 + 0.005]}
          rotation={rotation}
          style={sceneStyles.balance}
        />

        <ViroText
          text={t(translations.cardScene.thisMonth)}
          width={width}
          scale={[0.05, 0.05, 0.05]}
          position={[x0, y0, z0 + 0.0125 * 2]}
          rotation={rotation}
          style={sceneStyles.title}
        />

        <ViroText
          text={t(translations.cardScene.income)}
          width={width}
          scale={[0.05, 0.05, 0.05]}
          position={[x0, y0, z0 + 0.0125 * 3]}
          rotation={rotation}
          style={sceneStyles.inOutLabel}
        />
        <ViroText
          text={`+${Intl.NumberFormat(i18n.language, {
            style: 'currency',
            currency: 'GBP',
          }).format((card?.balance || 0) * (Math.random() + 2))}`}
          width={width}
          scale={[0.05, 0.05, 0.05]}
          position={[x0, y0, z0 + 0.015 * 3]}
          rotation={rotation}
          style={sceneStyles.subtitle}
        />

        <ViroText
          text={t(translations.cardScene.outcome)}
          width={width}
          scale={[0.05, 0.05, 0.05]}
          position={[x0 + 0.0125 * 4, y0, z0 + 0.0125 * 3]}
          rotation={rotation}
          style={sceneStyles.inOutLabel}
        />
        <ViroText
          text={Intl.NumberFormat(i18n.language, {
            style: 'currency',
            currency: 'GBP',
          }).format((card?.balance || 0) / (2 + Math.random()))}
          width={width}
          scale={[0.05, 0.05, 0.05]}
          position={[x0 + 0.0125 * 4, y0, z0 + 0.015 * 3]}
          rotation={rotation}
          style={sceneStyles.subtitle}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
}

ViroARTrackingTargets.createTargets({
  targetOne: {
    // eslint-disable-next-line global-require
    source: require('./res/targetOne.jpg'),
    orientation: 'Up',
    physicalWidth: 0.1, // real world width in meters
  },
});

const sceneStyles = StyleSheet.create({
  title: {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 10,
    fontWeight: 'bold',
  },
  balance: {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 12,
    fontWeight: 'bold',
  },
  inOutLabel: {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 8,
    fontWeight: 'bold',
  },
});
