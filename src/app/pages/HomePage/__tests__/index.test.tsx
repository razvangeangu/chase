import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import ThemeProvider from '../../../../styles/ThemeProvider';
import HomePage from '../index';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe('HomePage', () => {
  it('should build', () => {
    const { container } = render(
      <ThemeProvider>
        <HomePage
          navigation={{ navigate: jest.fn() } as any}
          route={{} as any}
        />
      </ThemeProvider>,
    );
    expect(container).toBeTruthy();
  });

  it('should navigate to settings', () => {
    const localNavigateMock = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider>
        <HomePage
          navigation={{ navigate: localNavigateMock } as any}
          route={{} as any}
        />
      </ThemeProvider>,
    );

    fireEvent(getByTestId('settingsButton'), 'press');

    expect(localNavigateMock).toHaveBeenCalled();
  });

  it('should click data point in chart', () => {
    const { container, getByTestId } = render(
      <ThemeProvider>
        <HomePage
          navigation={{ navigate: jest.fn() } as any}
          route={{} as any}
        />
      </ThemeProvider>,
    );

    fireEvent(container.findByType(LineChart), 'dataPointClick', {
      x: 0,
      y: 0,
      value: 'Legendary',
    });

    fireEvent(container.findByType(LineChart), 'dataPointClick', {
      x: 5,
      y: 5,
      value: 'Legendary',
    });

    expect(getByTestId('tooltip')).toBeDefined();
  });
});
