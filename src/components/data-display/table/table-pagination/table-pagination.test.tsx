import React from 'react';
import { cleanup } from '@testing-library/react';
import { TestUtils } from '@test-utils';
import TablePagination from './index';

afterEach(cleanup);

const paginationContainerId = 'pagination-container';

describe('TablePagination Tests', () => {
  test('renders the TablePagination component as default', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = TestUtils.render(
      <TablePagination onPageChange={mockCallBack} />
    );
    expect(getByTestId(paginationContainerId)).toBeInTheDocument();
  });
});
