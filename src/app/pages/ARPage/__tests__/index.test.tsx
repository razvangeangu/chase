import { render } from '@testing-library/react-native';
import React from 'react';
import ARPage from '../index';

describe('ARPage', () => {
  it('should build', () => {
    const { container } = render(<ARPage />);
    expect(container).toBeTruthy();
  });
});
