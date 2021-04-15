import { render } from '@testing-library/react-native';
import React from 'react';
import ThemeProvider from '../../../../styles/ThemeProvider';
import StyledText from '../index';

describe('StyledText', () => {
  it('should build', () => {
    const { container } = render(
      <ThemeProvider>
        <StyledText />
      </ThemeProvider>,
    );
    expect(container).toBeTruthy();
  });
});
