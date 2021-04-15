import { render } from '@testing-library/react-native';
import React from 'react';
import ThemeProvider from '../../../../styles/ThemeProvider';
import Input from '../index';

describe('Input', () => {
  it('should build', () => {
    const { container } = render(
      <ThemeProvider>
        <Input />
      </ThemeProvider>,
    );
    expect(container).toBeTruthy();
  });
});
