import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '@utils/test';
import Header from './index';

afterEach(cleanup);

describe('Testing Header Component', () => {
  test('renders the PFE logo', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('Logo')).toBeInTheDocument();
  });

  test('PFE logo has correct alt text', () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('Pet Food Experts Logo')).toBeInTheDocument();
  });
});
