import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { isEmulator } from 'react-native-device-info';
import ThemeProvider from '../../../../styles/ThemeProvider';
import CardContext from '../../../../utils/card-context';
import CardPage from '../index';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe('CardPage', () => {
  it('should build', () => {
    const { container } = render(
      <ThemeProvider>
        <CardPage minHeight={42} />
      </ThemeProvider>,
    );
    expect(container).toBeTruthy();
  });

  it('should navigate to full transactions page', () => {
    const { getAllByTestId } = render(
      <ThemeProvider>
        <CardPage minHeight={42} />
      </ThemeProvider>,
    );

    fireEvent(getAllByTestId(/transactionCategory-*/)[0], 'press');
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  it('should navigate to ar experience', () => {
    const mockSetCard = jest.fn();
    (isEmulator as jest.Mock).mockImplementation(
      () => new Promise(resolve => resolve(false)),
    );

    const { getAllByTestId } = render(
      <ThemeProvider>
        <CardContext.Provider value={{ setCard: mockSetCard }}>
          <CardPage minHeight={42} />
        </CardContext.Provider>
      </ThemeProvider>,
    );

    fireEvent(getAllByTestId(/creditCard-*/)[0], 'press');
    jest.runAllTimers();

    expect(mockNavigate).toHaveBeenCalledTimes(2);
    expect(mockSetCard).toHaveBeenCalled();
  });

  it('should not navigate to ar experience if emulator', () => {
    const mockSetCard = jest.fn();
    (isEmulator as jest.Mock).mockImplementation(
      () => new Promise(resolve => resolve(true)),
    );

    const { getAllByTestId } = render(
      <ThemeProvider>
        <CardContext.Provider value={{ setCard: mockSetCard }}>
          <CardPage minHeight={42} />
        </CardContext.Provider>
      </ThemeProvider>,
    );

    fireEvent(getAllByTestId(/creditCard-*/)[0], 'press');
    jest.runAllTimers();

    expect(mockNavigate).toHaveBeenCalledTimes(2);
    expect(mockSetCard).toHaveBeenCalled();
  });
});
