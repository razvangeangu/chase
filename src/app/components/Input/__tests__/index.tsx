import { render } from '@testing-library/react-native';
import React from 'react';
import ThemeProvider from '../../../../styles/ThemeProvider';
import StyledSurfaceText from '../index';

describe('StyledSurfaceText', () => {
  it('should build', () => {
    const { container } = render(
      <ThemeProvider>
        <StyledSurfaceText />
      </ThemeProvider>,
    );
    expect(container).toBeTruthy();
  });
});
