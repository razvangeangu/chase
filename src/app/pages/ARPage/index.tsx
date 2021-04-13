import React from 'react';
import { ViroARSceneNavigator } from 'react-viro';
import CardScene from './scenes/CardScene';

export interface ARPageProps {}

export default function ARPage() {
  return <ViroARSceneNavigator initialScene={{ scene: CardScene }} />;
}
