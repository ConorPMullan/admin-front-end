import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '@test-utils';
import ProductDetails from './index';

afterEach(cleanup);

const pageTitleId = 'manage-products-title';
const productTableId = 'product-table-title';

describe('ManageProductDetails Tests', () => {
  test('renders the ManageProductDetails page', () => {
    const { getByTestId } = render(<ProductDetails />);
    expect(getByTestId(pageTitleId)).toBeInTheDocument();
    expect(getByTestId(productTableId)).toBeInTheDocument();
  });
});