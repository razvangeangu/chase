import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import ThemeProvider from '../../../../styles/ThemeProvider';
import AuthContext from '../../../../utils/auth-context';
import SettingsPage from '../index';

describe('SettingsPage', () => {
  it('should build', () => {
    const { container } = render(
      <ThemeProvider>
        <SettingsPage />
      </ThemeProvider>,
    );

    expect(container).toBeTruthy();
  });

  it('should sign out', () => {
    const mockSignOut = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider>
        <AuthContext.Provider value={{ signOut: mockSignOut } as any}>
          <SettingsPage />
        </AuthContext.Provider>
      </ThemeProvider>,
    );

    fireEvent(getByTestId('signOutButton'), 'press');

    expect(mockSignOut).toHaveBeenCalled();
  });
});
