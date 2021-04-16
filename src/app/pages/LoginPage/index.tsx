import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Linking,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Video from 'react-native-video';
import styled, { useTheme } from 'styled-components/native';
import { translations } from '../../../locales/translations';
import AuthContext from '../../../utils/auth-context';
import FilledButton from '../../components/FilledButton';
import FlatButton from '../../components/FlatButton';
import Input from '../../components/Input';
import SvgLogo from '../HomePage/assets/logo.svg';
import backgroundVideo from './assets/london-aerial.mp4';

const { height, width } = Dimensions.get('window');

const logoHeight = width / 14;

export default function LoginPage() {
  const theme = useTheme();

  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useContext(AuthContext);

  const { t } = useTranslation();

  const [paused, setPaused] = useState<boolean>(false);

  const handleLogin = () => {
    setPaused(true);
    signIn(userId, password);
  };

  const handleChangeUserId = (text: string) => {
    setUserId(text);
  };

  const handleChangePassword = (text: string) => {
    setPassword(text);
  };

  const handleForgotPassword = () => {
    // TODO: add in-app functionality
    Linking.openURL(
      'https://secure03b.chase.com/web/auth/#/logon/forgotLoginDetails/identifyCustomer/index',
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            <Logo as={SvgLogo} />
            <LoginContainer>
              <StyledInput
                testID="userIdInput"
                label={t(translations.loginPage.userId)}
                onChangeText={handleChangeUserId}
              />
              <StyledInput
                testID="passwordInput"
                label={t(translations.loginPage.password)}
                onChangeText={handleChangePassword}
                secureTextEntry
              />
              <FilledButton
                onPress={handleLogin}
                title={t(translations.loginPage.signIn)}
              />
              <FlatButton
                onPress={handleForgotPassword}
                title={t(translations.loginPage.forgot)}
              />
            </LoginContainer>
          </KeyboardAvoidingView>
        </LoginView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
