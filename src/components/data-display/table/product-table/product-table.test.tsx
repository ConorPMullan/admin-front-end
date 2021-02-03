import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '@test-utils';
import { ProductService } from '@services';
import ProductTable from './index';

afterEach(cleanup);

const productTableTitleId = 'product-table-title';
const productTableId = 'product-table';
const productTableLoadingId = 'product-table-loading';

describe('ProductTable Tests', () => {
  test('renders the ProductTable page as default', () => {
    const { getByTestId, queryByTestId } = render(<ProductTable />);
    expect(getByTestId(productTableTitleId)).toBeInTheDocument();
    expect(getByTestId(productTableLoadingId)).toBeInTheDocument();
    expect(queryByTestId(productTableId)).toBeNull();
  });

  test('Table shows after loading', async () => {
    const { findByTestId } = render(<ProductTable />);

    const promise = Promise.reject();
    const mockResponse = jest.fn(() => promise);
    ProductService.getProducts = mockResponse;

    await expect(findByTestId(productTableId)).toBeInTheDocument;
  });
});
