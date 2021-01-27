import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRouter } from '@utils/test';
import Navigation from './index';

afterEach(cleanup);

describe('Navigation Tests', () => {
  test('renders the Navigation container', () => {
    const { getByTestId } = renderWithRouter(<Navigation />);
    expect(getByTestId('navigation-container')).toBeInTheDocument();
  });
});