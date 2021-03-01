import React from 'react';
import { cleanup } from '@testing-library/react';
import ProductTableComponent from './index';
import {
  IProduct,
  IProductLineItem,
  IProductUnitMeasurement,
} from '@interfaces';
import { TestUtils } from '@test-utils';

afterEach(cleanup);

const productTableContainerId = 'product-table-container';
const productTableId = 'product-table';
const productTableLoadingId = 'product-table-loading';
const productPageLoadingId = 'product-table-page-loading';
const productTableRowId = 'product-table-row-';

describe('ProductTableComponent Tests', () => {
  test('default rendering of the ProductTableComponent', async () => {
    const mockFunc = jest.fn();
    const { getByTestId, queryByTestId } = TestUtils.render(
      <ProductTableComponent
        pageNumber={0}
        pageSize={5}
        productData={[]}
        totalElements={0}
        onChangePage={mockFunc}
      />
    );
    expect(getByTestId(productTableContainerId)).toBeInTheDocument;
    expect(getByTestId(productTableId)).toBeInTheDocument();
    expect(queryByTestId(productTableLoadingId)).toBeNull();
    expect(queryByTestId(productPageLoadingId)).toBeNull();
  });

  test('progress bar displays with isTableLoading true', async () => {
    const mockFunc = jest.fn();
    const { getByTestId, queryByTestId } = TestUtils.render(
      <ProductTableComponent
        pageNumber={0}
        pageSize={5}
        productData={[]}
        totalElements={0}
        onChangePage={mockFunc}
        isTableLoading
      />
    );
    expect(getByTestId(productTableContainerId)).toBeInTheDocument;
    expect(getByTestId(productTableLoadingId)).toBeInTheDocument();
    expect(queryByTestId(productTableId)).toBeNull();
    expect(queryByTestId(productPageLoadingId)).toBeNull();
  });

  test('page loading animation displays with isPageLoading true', async () => {
    const mockFunc = jest.fn();
    const { getByTestId, queryByTestId } = TestUtils.render(
      <ProductTableComponent
        pageNumber={0}
        pageSize={5}
        productData={[]}
        totalElements={0}
        onChangePage={mockFunc}
        isPageLoading
      />
    );
    expect(getByTestId(productTableContainerId)).toBeInTheDocument;
    expect(getByTestId(productPageLoadingId)).toBeInTheDocument();
    expect(queryByTestId(productTableId)).toBeInTheDocument();
    expect(queryByTestId(productTableLoadingId)).toBeNull();
  });

  test('Product Table shows Table Row for returned Product data', async () => {
    const productId = 123;
    const productOne = buildMockProduct(productId, '2', 'Test');
    const productData: IProduct[] = [productOne];

    const mockFunc = jest.fn();

    const { getByTestId } = TestUtils.render(
      <ProductTableComponent
        pageNumber={0}
        pageSize={5}
        productData={productData}
        totalElements={productData.length}
        onChangePage={mockFunc}
      />
    );
    expect(getByTestId(productTableRowId + 0)).toBeInTheDocument;
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
      brand: 'testBrand',
    };

    const product: IProduct = {
      productLineItem,
    };
    return product;
  };
});
