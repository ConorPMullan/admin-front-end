import React from 'react';
import { cleanup } from '@testing-library/react';
import { TestUtils } from '@test-utils';
import ProductDetails from './index';

afterEach(cleanup);

const pageTitleId = 'manage-products-title';

describe('ManageProductDetails Tests', () => {
  test('renders the ManageProductDetails page', () => {
    const { getByTestId } = TestUtils.render(<ProductDetails />);
    expect(getByTestId(pageTitleId)).toBeInTheDocument();
  });
});
