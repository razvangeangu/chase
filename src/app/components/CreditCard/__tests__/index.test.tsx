import { render } from '@testing-library/react-native';
import React from 'react';
import ThemeProvider from '../../../../styles/ThemeProvider';
import { cards } from '../../../pages/CardPage/constants';
import CreditCard from '../index';

describe('CreditCard', () => {
  it('should build', () => {
    const { container } = render(
      <ThemeProvider>
        <CreditCard {...cards[0]} />
      </ThemeProvider>,
    );
    expect(container).toBeTruthy();
  });
});
