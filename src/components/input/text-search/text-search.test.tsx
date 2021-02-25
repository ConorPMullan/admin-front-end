import React from 'react';
import { cleanup } from '@testing-library/react';
import TextSearch from './index';
import { TestUtils } from '@test-utils';

afterEach(cleanup);

const textSearchInputId = 'text-search-input';
const textSearchClearId = 'text-search-clear';

describe('TextSearch Tests', () => {
  test('renders the TextSearch component as default', () => {
    const onChange = jest.fn();
    const { getByTestId } = TestUtils.render(
      <TextSearch onChangeValue={onChange} />
    );
    expect(getByTestId(textSearchInputId)).toBeInTheDocument();
    expect(getByTestId(textSearchClearId)).toBeInTheDocument();
  });
});
