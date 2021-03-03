import React from 'react';
import { cleanup, fireEvent, waitFor } from '@testing-library/react';
import { Groups, Product, HttpStatusCodes } from '@constants';
import ProductFilter from './index';
import { ProductService } from '@services';
import { TestUtils } from '@test-utils';
import {
  IProductLineGroup,
  IProductLineGroupData,
  IProductLineGroupOption,
} from '@interfaces';

afterEach(cleanup);

const searchAutocompleteId = 'select-autocomplete-vendor';
const productFilterContainerId = 'product-filter-container';
const productFilterApplyButtonId = 'product-filter-apply-button';
const productFilterTitleId = 'product-table-title';
const productFilterToggleButtonId = 'product-filter-toggle-button';
const textSearchInputId = 'text-search-input';

describe('ProductTableComponent Tests', () => {
  beforeEach(() => {
    ProductService.getProductLineGroupOptions = jest.fn(() => Promise.reject());
  });

  test('default rendering of the ProductFilter', async () => {
    const mockFunc = jest.fn();
    const { getByTestId, queryByTestId } = TestUtils.render(
      <ProductFilter onChangeProductFilter={mockFunc} />
    );
    expect(getByTestId(productFilterContainerId)).toBeInTheDocument;
    expect(queryByTestId(productFilterTitleId)).toBeInTheDocument();
    expect(queryByTestId(productFilterApplyButtonId)).toBeNull();
    expect(queryByTestId(productFilterToggleButtonId)).toBeInTheDocument();
  });

  test('ProductFilter displays Filter form when toggle clicked', async () => {
    const mockFunc = jest.fn();
    const { getByTestId, queryByTestId } = TestUtils.render(
      <ProductFilter onChangeProductFilter={mockFunc} />
    );
    expect(queryByTestId(productFilterApplyButtonId)).toBeNull();

    const toggleButton = getByTestId(productFilterToggleButtonId);
    fireEvent.click(toggleButton);

    expect(queryByTestId(productFilterApplyButtonId)).toBeInTheDocument();
    expect(queryByTestId(productFilterTitleId)).toBeNull();
  });

  test('ProductFilter Filter form apply click triggers callback when valid', async () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = TestUtils.render(
      <ProductFilter onChangeProductFilter={mockCallBack} />
    );

    const toggleButton = getByTestId(productFilterToggleButtonId);
    fireEvent.click(toggleButton);

    const inputField = getByTestId(textSearchInputId);

    fireEvent.change(inputField, { target: { value: '12' } });
    const applyButton = getByTestId(productFilterApplyButtonId);
    expect(applyButton).toBeDisabled();

    fireEvent.change(inputField, { target: { value: '123' } });

    expect(applyButton).not.toBeDisabled();
    fireEvent.click(applyButton);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  test('Integration - ProductFilter Get Prodcut Line Options updates VendorOptions and is Selectable', async () => {
    const vendorName = 'testvendor';
    const vendorOptions: IProductLineGroupOption[] = [
      {
        productLineGroupOptionId: 100,
        productLineGroupOptionName: vendorName,
      },
    ];

    const productLineGroups: IProductLineGroup[] = [
      { ...Groups.VENDOR_GROUP, productLineGroupOptions: vendorOptions },
    ];
    const groupData: IProductLineGroupData = { productLineGroups };

    const response = TestUtils.buildAxiosResponse<IProductLineGroupData>(
      groupData,
      HttpStatusCodes.OK
    );

    ProductService.getProductLineGroupOptions = () => Promise.resolve(response);

    const mockCallBack = jest.fn();

    const { getByLabelText, getByTestId } = TestUtils.render(
      <ProductFilter onChangeProductFilter={mockCallBack} />
    );

    // show filter
    const toggleButton = getByTestId(productFilterToggleButtonId);
    fireEvent.click(toggleButton);

    // Get Autocomplete and input components
    const label = Product.PRODUCT_VENDOR_SELECTION;
    const autocomplete = getByTestId(searchAutocompleteId);
    const input = getByLabelText(label) as HTMLInputElement;
    expect(input).toBeInTheDocument();

    // Navigate to the first item in the dropdown and select
    fireEvent.change(input, {
      target: { value: vendorName },
    });
    fireEvent.keyDown(autocomplete, { key: 'ArrowDown' });
    fireEvent.keyDown(autocomplete, { key: 'Enter' });
    await waitFor(() => {
      expect(input.value).toEqual(vendorName);
    });
  });

  test('Integration - ProductFilter Get Prodcut Line Options updates BrandOptions and is Selectable', async () => {
    const brandName = 'testBrand';
    const brandOptions: IProductLineGroupOption[] = [
      {
        productLineGroupOptionId: 200,
        productLineGroupOptionName: brandName,
      },
    ];

    const productLineGroups: IProductLineGroup[] = [
      { ...Groups.BRAND_GROUP, productLineGroupOptions: brandOptions },
    ];
    const groupData: IProductLineGroupData = { productLineGroups };

    const response = TestUtils.buildAxiosResponse<IProductLineGroupData>(
      groupData,
      HttpStatusCodes.OK
    );

    ProductService.getProductLineGroupOptions = () => Promise.resolve(response);

    const mockCallBack = jest.fn();

    const { getByLabelText, getByTestId } = TestUtils.render(
      <ProductFilter onChangeProductFilter={mockCallBack} />
    );

    // show filter
    const toggleButton = getByTestId(productFilterToggleButtonId);
    fireEvent.click(toggleButton);

    // Get Autocomplete and input components
    const label = Product.PRODUCT_BRAND_SELECTION;
    const autocomplete = getByTestId(searchAutocompleteId);
    const input = getByLabelText(label) as HTMLInputElement;
    expect(input).toBeInTheDocument();

    // Navigate to the first item in the dropdown and select
    fireEvent.change(input, {
      target: { value: brandName },
    });
    fireEvent.keyDown(autocomplete, { key: 'ArrowDown' });
    fireEvent.keyDown(autocomplete, { key: 'Enter' });
    await waitFor(() => {
      expect(input.value).toEqual(brandName);
    });
  });
});
