import React from 'react';
import { cleanup } from '@testing-library/react';
import { TestUtils } from '@test-utils';
import Navigation from './index';

afterEach(cleanup);

describe('Navigation Tests', () => {
  test('renders the Navigation container', () => {
    const { getByTestId } = TestUtils.renderWithRouter(<Navigation />);
    expect(getByTestId('navigation-container')).toBeInTheDocument();
  });
});
