import { render } from '@testing-library/react-native';
import * as React from 'react';
import { Text, useColorScheme } from 'react-native';
import { useTheme } from 'styled-components/native';
import ThemeProvider from '../ThemeProvider';
import { themes } from '../themes';

describe('ThemeProvider', () => {
  it('should render its children', () => {
    const text = 'Test';
    const { queryByText } = render(
      <ThemeProvider>
        <Text>{text}</Text>
      </ThemeProvider>,
    );
    expect(queryByText(text)).toBeDefined();
  });

  it('should render selected theme', () => {
    let theme: any;

    const Children = () => {
      theme = useTheme();

      return <Text>a</Text>;
    };

    render(
      <ThemeProvider>
        <Children />
      </ThemeProvider>,
    );

    expect(theme).toBe(themes.light);
  });

  it('should render another theme', () => {
    let theme: any;

    (useColorScheme as jest.Mock).mockImplementation(() => 'dark');

    const Children = () => {
      theme = useTheme();

      return <Text>a</Text>;
    };

    render(
      <ThemeProvider>
        <Children />
      </ThemeProvider>,
    );

    expect(theme).toBe(themes.dark);
  });
});
