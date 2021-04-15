import { render } from '@testing-library/react-native';
import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import AuthContext from '../../utils/auth-context';
import CardContext from '../../utils/card-context';
import App from '../index';
import LoginPage from '../pages/LoginPage';

jest.mock('../pages/LoginPage', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('App', () => {
  beforeEach(() => {
    (LoginPage as any).mockImplementation(() => {
      return <View />;
    });
  });

  it('should build', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  it('should login', async () => {
    (LoginPage as any).mockImplementation(() => {
      const { signIn } = useContext(AuthContext);

      useEffect(() => {
        signIn('userId', 'password');
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return <View />;
    });

    render(<App />);

    // TODO: check routes
  });

  it('should log out', async () => {
    (LoginPage as any).mockImplementation(() => {
      const { signOut } = useContext(AuthContext);

      useEffect(() => {
        signOut();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return <View />;
    });

    render(<App />);

    // TODO: check routes
  });

  it('should sign up', async () => {
    (LoginPage as any).mockImplementation(() => {
      const { signUp } = useContext(AuthContext);

      useEffect(() => {
        signUp('userId', 'password');
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return <View />;
    });

    render(<App />);

    // TODO: check routes
  });

  it('should set card props', async () => {
    (LoginPage as any).mockImplementation(() => {
      const { setCard } = useContext(CardContext);

      useEffect(() => {
        setCard({} as any);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return <View />;
    });

    render(<App />);

    // TODO: check context card
  });
});
