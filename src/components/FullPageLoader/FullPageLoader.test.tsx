import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRouter } from '@test-utils';
import FullPageLoader from './index';

afterEach(cleanup);

describe('FullPageLoader Tests', () => {
  test('renders the full page loader component', () => {
    const pageLoaderId = 'full-page-loader-progress';
    const { getByTestId } = renderWithRouter(<FullPageLoader />);
    expect(getByTestId(pageLoaderId)).toBeInTheDocument();
  });
});
