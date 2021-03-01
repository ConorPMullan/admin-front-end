import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import TextSearch from './index';
import { TestUtils } from '@test-utils';

afterEach(cleanup);

const textSearchInputId = 'text-search-input';
const textSearchClearId = 'text-search-clear';

describe('TextSearch Tests', () => {
  test('renders the TextSearch component as default', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = TestUtils.render(
      <TextSearch onChangeValue={mockCallBack} />
    );
    expect(getByTestId(textSearchInputId)).toBeInTheDocument();
    expect(getByTestId(textSearchClearId)).toBeInTheDocument();
  });

  test('TextSearch changing input triggers callback', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = TestUtils.render(
      <TextSearch onChangeValue={mockCallBack} />
    );
    expect(getByTestId(textSearchInputId)).toBeInTheDocument();
    const inputField = getByTestId(textSearchInputId);

    const inputText = 'testInput';
    fireEvent.change(inputField, { target: { value: inputText } });
    expect(mockCallBack).toHaveBeenCalledWith(inputText);
  });

  test('TextSearch empty input returns undefined', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = TestUtils.render(
      <TextSearch onChangeValue={mockCallBack} />
    );
    expect(getByTestId(textSearchInputId)).toBeInTheDocument();

    const inputField = getByTestId(textSearchInputId);
    fireEvent.change(inputField, { target: { value: 'x' } });
    fireEvent.change(inputField, { target: { value: '' } });
    expect(mockCallBack).toHaveBeenCalledWith(undefined);
  });

  test('TextSearch clearing input returns undefined', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = TestUtils.render(
      <TextSearch onChangeValue={mockCallBack} />
    );
    expect(getByTestId(textSearchInputId)).toBeInTheDocument();

    const inputField = getByTestId(textSearchInputId);
    fireEvent.change(inputField, { target: { value: 'x' } });

    const clearButton = getByTestId(textSearchClearId);
    fireEvent.click(clearButton);

    expect(mockCallBack).toHaveBeenCalledWith(undefined);
  });
});
