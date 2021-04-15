import { render } from '@testing-library/react-native';
import React from 'react';
import ThemeProvider from '../../../../styles/ThemeProvider';
import FilledButton from '../index';

describe('FilledButton', () => {
  it('should build', () => {
    const { container } = render(
      <ThemeProvider>
        <FilledButton title="Test" />
      </ThemeProvider>,
    );
    expect(container).toBeTruthy();
  });
});
