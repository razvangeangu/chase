import { render } from '@testing-library/react-native';
import React from 'react';
import CardScene from '../index';

describe('CardScene', () => {
  it('should build', () => {
    const { container } = render(<CardScene />);
    expect(container).toBeTruthy();
  });
});
