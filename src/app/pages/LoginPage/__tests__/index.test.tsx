import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Linking,
  Platform,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ThemeProvider from '../../../../styles/ThemeProvider';
import AuthContext from '../../../../utils/auth-context';
import FilledButton from '../../../components/FilledButton';
import FlatButton from '../../../components/FlatButton';
import LoginPage from '../index';

const Wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

describe('LoginPage', () => {
  it('should build', () => {
    const { container } = render(
      <Wrapper>
        <LoginPage />
      </Wrapper>,
    );

    expect(container).toBeTruthy();
  });

  it('should have ios padding', () => {
    Platform.OS = 'ios';
    const { container } = render(
      <Wrapper>
        <LoginPage />
      </Wrapper>,
    );

    expect(container.findByType(KeyboardAvoidingView).props.behavior).toBe(
      'padding',
    );
  });

  it('should have android height', () => {
    Platform.OS = 'android';

    const { container } = render(
      <Wrapper>
        <LoginPage />
      </Wrapper>,
    );

    expect(container.findByType(KeyboardAvoidingView).props.behavior).toBe(
      'height',
    );
  });

  it('should dismiss keyboard on press first container', () => {
    const { container } = render(
      <Wrapper>
        <LoginPage />
      </Wrapper>,
    );

    Keyboard.dismiss = jest.fn();

    fireEvent(container.findByType(TouchableWithoutFeedback), 'press');

    expect(Keyboard.dismiss).toHaveBeenCalled();
  });

  it('should handle login', () => {
    const authContext = {
      signIn: jest.fn(),
      signOut: jest.fn(),
      signUp: jest.fn(),
    };
    const { container } = render(
      <Wrapper>
        <AuthContext.Provider value={authContext}>
          <LoginPage />
        </AuthContext.Provider>
      </Wrapper>,
    );

    fireEvent(container.findByType(FilledButton), 'press');

    expect(authContext.signIn).toHaveBeenCalled();
  });

  it('should handle forgot password', () => {
    const { container } = render(
      <Wrapper>
        <LoginPage />
      </Wrapper>,
    );

    Linking.openURL = jest.fn().mockReturnValue({ catch: jest.fn() });

    fireEvent(container.findByType(FlatButton), 'press');

    expect(Linking.openURL).toHaveBeenCalled();
  });

  it('should handle change of inputs', () => {
    const { getByTestId } = render(
      <Wrapper>
        <LoginPage />
      </Wrapper>,
    );

    fireEvent(getByTestId('userIdInput'), 'changeText');
    fireEvent(getByTestId('passwordInput'), 'changeText');
  });
});
