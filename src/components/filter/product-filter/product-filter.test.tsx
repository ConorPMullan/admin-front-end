import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import ProductFilter from './index';
import { TestUtils } from '@test-utils';

afterEach(cleanup);

const productFilterContainerId = 'product-filter-container';
const productFilterApplyButtonId = 'product-filter-apply-button';
const productFilterTitleId = 'product-table-title';
const productFilterToggleButtonId = 'product-filter-toggle-button';
const textSearchInputId = 'text-search-input';

describe('ProductTableComponent Tests', () => {
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
    const { getByTestId, queryByTestId } = TestUtils.render(
      <ProductFilter onChangeProductFilter={mockCallBack} />
    );

    const toggleButton = getByTestId(productFilterToggleButtonId);
    fireEvent.click(toggleButton);

    const applyButton = getByTestId(productFilterApplyButtonId);
    expect(applyButton).toBeDisabled();

    const inputText = '123';
    const inputField = getByTestId(textSearchInputId);
    fireEvent.change(inputField, { target: { value: inputText } });

    expect(applyButton).not.toBeDisabled();
    fireEvent.click(applyButton);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
