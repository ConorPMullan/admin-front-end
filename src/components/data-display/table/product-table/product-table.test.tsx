import React from 'react';
import { cleanup, waitFor } from '@testing-library/react';
import ProductTable from './index';
import { ProductService } from '@services';
import { TestUtils } from '@test-utils';

afterEach(cleanup);

const productTableContainerId = 'product-table-container';
const productTableId = 'product-table';
const productTableLoadingId = 'product-table-loading';
const productPageLoadingId = 'product-table-page-loading';

describe('ProductTableComponent Tests', () => {
  test('default rendering of the ProductTable', () => {
    const mockFunc = jest.fn();
    const { getByTestId, queryByTestId } = TestUtils.render(
      <ProductTable productFilter={{}} setProductLoading={mockFunc} />
    );
    expect(getByTestId(productTableContainerId)).toBeInTheDocument;
    expect(getByTestId(productTableId)).toBeInTheDocument();
    expect(queryByTestId(productTableLoadingId)).toBeNull();
    expect(queryByTestId(productPageLoadingId)).toBeInTheDocument();
  });

  test('ProductTable displays Product Data when retrieval finishes', async () => {
    const mockFunc = jest.fn();

    const promise = Promise.reject();
    const mockResponse = jest.fn(() => promise);
    ProductService.getProducts = mockResponse;

    const { getByTestId, queryByTestId } = TestUtils.render(
      <ProductTable productFilter={{}} setProductLoading={mockFunc} />
    );

    await waitFor(() => {
      expect(getByTestId(productTableId)).toBeInTheDocument;
    });

    expect(getByTestId(productTableContainerId)).toBeInTheDocument;
    expect(getByTestId(productTableId)).toBeInTheDocument();
    expect(queryByTestId(productTableLoadingId)).toBeNull();
    expect(queryByTestId(productPageLoadingId)).toBeNull();
  });
});
