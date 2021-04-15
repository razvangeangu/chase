import { render } from '@testing-library/react-native';
import React from 'react';
import ThemeProvider from '../../../../styles/ThemeProvider';
import FlatButton from '../index';

describe('FlatButton', () => {
  it('should build', () => {
    const { container } = render(
      <ThemeProvider>
        <FlatButton title="Test" />
      </ThemeProvider>,
    );
    expect(container).toBeTruthy();
  });
});
