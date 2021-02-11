import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { render } from '@test-utils';
import TablePaginationActions from './index';

afterEach(cleanup);

const firstPageButtonId = 'pagination-first-page-button';
const previousPageButtonId = 'pagination-previous-page-button';
const nextPageButtonId = 'pagination-next-page-button';
const lastPageButtonId = 'pagination-last-page-button';

describe('TablePaginationActions Tests', () => {
  test('renders the TablePaginationActions component as default', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <TablePaginationActions
        count={0}
        page={0}
        rowsPerPage={25}
        onChangePage={mockCallBack}
      />
    );
    expect(getByTestId(firstPageButtonId)).toBeInTheDocument();
    expect(getByTestId(previousPageButtonId)).toBeInTheDocument();
    expect(getByTestId(nextPageButtonId)).toBeInTheDocument();
    expect(getByTestId(lastPageButtonId)).toBeInTheDocument();
  });

  test('First and previous page buttons disabled TablePaginationActions when on first page', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <TablePaginationActions
        count={100}
        page={0}
        rowsPerPage={25}
        onChangePage={mockCallBack}
      />
    );
    const firstPageButtonButton = getByTestId(firstPageButtonId);
    fireEvent.click(firstPageButtonButton);
    expect(mockCallBack.mock.calls.length).toBe(0);

    const previousPageButtonButton = getByTestId(previousPageButtonId);
    fireEvent.click(firstPageButtonButton);
    expect(mockCallBack.mock.calls.length).toBe(0);
  });

  test('Next and last page buttons disabled TablePaginationActions when on last page', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <TablePaginationActions
        count={100}
        page={3}
        rowsPerPage={25}
        onChangePage={mockCallBack}
      />
    );
    const lastPageButtonButton = getByTestId(lastPageButtonId);
    fireEvent.click(lastPageButtonButton);
    expect(mockCallBack.mock.calls.length).toBe(0);

    const nextPageButtonButton = getByTestId(nextPageButtonId);
    fireEvent.click(nextPageButtonButton);
    expect(mockCallBack.mock.calls.length).toBe(0);
  });

  test('Testing Next and Last TablePaginationActions buttons', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <TablePaginationActions
        count={100}
        page={0}
        rowsPerPage={25}
        onChangePage={mockCallBack}
      />
    );

    const nextPageButtonButton = getByTestId(nextPageButtonId);
    fireEvent.click(nextPageButtonButton);
    expect(mockCallBack.mock.calls.length).toBe(1);
    expect(mockCallBack.mock.calls[0][1]).toBe(1);

    const lastPageButtonButton = getByTestId(lastPageButtonId);
    fireEvent.click(lastPageButtonButton);
    expect(mockCallBack.mock.calls.length).toBe(2);
    expect(mockCallBack.mock.calls[1][1]).toBe(3);
  });

  test('Testing Previous and First TablePaginationActions buttons', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <TablePaginationActions
        count={100}
        page={3}
        rowsPerPage={25}
        onChangePage={mockCallBack}
      />
    );

    const previousPageButtonButton = getByTestId(previousPageButtonId);
    fireEvent.click(previousPageButtonButton);
    expect(mockCallBack.mock.calls.length).toBe(1);
    expect(mockCallBack.mock.calls[0][1]).toBe(2);

    const firstPageButtonButton = getByTestId(firstPageButtonId);
    fireEvent.click(firstPageButtonButton);
    expect(mockCallBack.mock.calls.length).toBe(2);
    expect(mockCallBack.mock.calls[1][1]).toBe(0);
  });
});
