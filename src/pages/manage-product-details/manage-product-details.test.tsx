import React from 'react';
import { cleanup, waitFor } from '@testing-library/react';
import { TestUtils } from '@test-utils';
import { ProductService } from '@services';
import ProductDetails from './index';

afterEach(cleanup);

const pageTitleId = 'manage-products-title';

describe('ManageProductDetails Tests', () => {
  beforeEach(() => {
    ProductService.getProducts = jest.fn(() => Promise.reject());
    ProductService.getProductLineGroupOptions = jest.fn(() => Promise.reject());
  });

  test('renders the ManageProductDetails page', async () => {
    const { getByTestId } = TestUtils.render(<ProductDetails />);
    await waitFor(() => {
      expect(getByTestId(pageTitleId)).toBeInTheDocument();
    });
  });
});
