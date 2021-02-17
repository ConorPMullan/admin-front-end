import React from 'react';
import { cleanup, waitFor } from '@testing-library/react';
import { ProductService } from '@services';
import ProductTable from './index';
import {
  IProduct,
  IProductLineItem,
  IProductUnitMeasurement,
  IResponseBase,
} from '@interfaces';
import { TestUtils } from '@test-utils';

afterEach(cleanup);

const productTableTitleId = 'product-table-title';
const productTableId = 'product-table';
const productTableLoadingId = 'product-table-loading';
const productTableRowId = 'product-table-row-';

describe('ProductTable Tests', () => {
  test('renders the ProductTable page as default', () => {
    const { getByTestId, queryByTestId } = TestUtils.render(<ProductTable />);
    expect(getByTestId(productTableTitleId)).toBeInTheDocument();
    expect(getByTestId(productTableLoadingId)).toBeInTheDocument();
    expect(queryByTestId(productTableId)).toBeNull();
  });

  test('Product Table shows after loading completes', async () => {
    const promise = Promise.reject();
    const mockResponse = jest.fn(() => promise);
    ProductService.getProducts = mockResponse;
    const { findByTestId, queryByTestId } = TestUtils.render(<ProductTable />);
    await findByTestId(productTableId);
    expect(queryByTestId(productTableLoadingId)).toBeNull();
  });

  test('Product Table shows Table Row for returned Product data', async () => {
    const productId = 123;
    const productOne = buildMockProduct(productId, '2', 'Test');
    const productData: IProduct[] = [productOne];
    const paginatedData = TestUtils.buildPaginatedData(
      productData,
      0,
      productData.length,
      1,
      productData.length
    );
    const axiosResponse = TestUtils.buildAxiosResponse(paginatedData, 200);
    const promise = Promise.resolve(axiosResponse);
    const mockResponse = jest.fn(() => promise);
    ProductService.getProducts = mockResponse;

    const { getByTestId } = TestUtils.render(<ProductTable />);
    await waitFor(() => {
      expect(getByTestId(productTableRowId + 0)).toBeInTheDocument;
    });
  });

  const buildMockProduct = (
    id: number,
    itemNumber: string,
    name: string
  ): IProduct => {
    const unitOfMeasurement: IProductUnitMeasurement = {
      id: 1,
      description: 'testUM',
    };

    const productLineItem: IProductLineItem = {
      id,
      name,
      itemNumber,
      upc: itemNumber,
      price: 1,
      imageUrl: 'test',
      unitOfMeasurement,
    };

    const product: IProduct = {
      productLineItem,
    };
    return product;
  };
});
