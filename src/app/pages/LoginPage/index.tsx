import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import Video from 'react-native-video';
import styled, { useTheme } from 'styled-components/native';
import FilledButton from '../../components/FilledButton';
import FlatButton from '../../components/FlatButton';
import Input from '../../components/Input';
import ChaseLogo from '../HomePage/assets/chase-logo.svg';
import backgroundVideo from './assets/london-aerial.mp4';

const { height, width } = Dimensions.get('window');

const logoHeight = width / 14;

export interface LoginPageProps {
  navigation: StackNavigationProp<
    { Home: undefined; Forgot: undefined },
    'Home'
  >;
}

export default function LoginPage({ navigation }: LoginPageProps) {
  const theme = useTheme();

  const [paused, setPaused] = useState<boolean>(false);

  const handleLogin = () => {
    setPaused(true);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={theme.barStyle} />
      <StyledVideo
        source={backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode="cover"
        paused={paused}
        rate={1.0}
        ignoreSilentSwitch="obey"
      />
      <StyledView as={View} />
      <LoginView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={40}>
          <Logo as={ChaseLogo} />
          <LoginContainer>
            <StyledInput label="Enter your user ID" />
            <StyledInput label="Enter your password" secureTextEntry />
            <FilledButton onPress={handleLogin} title="Sign In" />
            <FlatButton title="Forgot User ID or Password?" />
          </LoginContainer>
        </KeyboardAvoidingView>
      </LoginView>
    </SafeAreaView>
  );
}

const Logo = styled.View`
  height: ${logoHeight}px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 20px;
`;

const LoginContainer = styled.View`
  background-color: ${p => p.theme.surface.background};
  border-radius: 20px;
  box-shadow: 0 4px 16px ${p => p.theme.surface.shadow};
  margin: 40px;
  padding: 40px;
`;

const LoginView = styled.View`
  height: 100%;
  justify-content: flex-end;
`;

const StyledVideo = styled(Video)`
  align-items: stretch;
  bottom: 0;
  height: ${height * 0.75}px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledView = styled(StyledVideo)`
  background-color: rgba(0, 0, 0, 0.5);
`;
