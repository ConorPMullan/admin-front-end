import React from 'react';
import { cleanup } from '@testing-library/react';
import SelectAutocomplete from './index';
import { TestUtils } from '@test-utils';

afterEach(cleanup);

const searchAutocompleteId = 'select-autocomplete';

describe('SelectAutocomplete Tests', () => {
  test('renders the SelectAutocomplete component as default', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = TestUtils.render(
      <SelectAutocomplete
        initialValue={null}
        label={''}
        options={[]}
        onChangeValue={mockCallBack}
      />
    );
    expect(getByTestId(searchAutocompleteId)).toBeInTheDocument();
  });
});
