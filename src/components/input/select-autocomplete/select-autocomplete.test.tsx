import React from 'react';
import { cleanup, fireEvent, waitFor } from '@testing-library/react';
import SelectAutocomplete from './index';
import { TestUtils } from '@test-utils';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ISelectOption } from '@interfaces';

afterEach(cleanup);

const searchAutocompleteId = 'select-autocomplete';

describe('SelectAutocomplete Tests', () => {
  test('renders the SelectAutocomplete component as default', () => {
    const mockCallBack = jest.fn();
    const label = 'testing';
    const { getByTestId, getByLabelText } = TestUtils.render(
      <SelectAutocomplete
        initialValue={null}
        label={label}
        options={[]}
        onChangeValue={mockCallBack}
      />
    );
    const autocomplete = getByTestId(searchAutocompleteId);
    const input = getByLabelText(label);
    expect(autocomplete).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('SelectAutocomplete allows for selection of matching value', async () => {
    const mockCallBack = jest.fn();
    const label = 'testing';
    const options: ISelectOption[] = [
      {
        label: label,
        value: 'value',
      },
    ];
    const { getByTestId, getByLabelText } = TestUtils.render(
      <SelectAutocomplete
        initialValue={null}
        label={label}
        options={options}
        onChangeValue={mockCallBack}
      />
    );
    const autocomplete = getByTestId(searchAutocompleteId);
    const input = getByLabelText(label) as HTMLInputElement;
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: label } });
    fireEvent.keyDown(autocomplete, { key: 'ArrowDown' });
    fireEvent.keyDown(autocomplete, { key: 'Enter' });
    await waitFor(() => {
      expect(input.value).toEqual(label);
      expect(mockCallBack).toHaveBeenCalledWith(options[0]);
    });
  });
});
