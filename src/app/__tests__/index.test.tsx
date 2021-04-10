import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import App from '../index';

it('should build', () => {
  const { container } = render(<App />);
  expect(container).toBeTruthy();
});
