import { render } from '@testing-library/react-native';
import React from 'react';
import ThemeProvider from '../../../../styles/ThemeProvider';
import TransactionsPage from '../index';

describe('TransactionsPage', () => {
  it('should build', () => {
    const { container } = render(
      <ThemeProvider>
        <TransactionsPage
          route={{ params: { title: 'transactions.bills' } } as any}
          navigation={{} as any}
          title="transactions.bills"
        />
      </ThemeProvider>,
    );
    expect(container).toBeTruthy();
  });
});
