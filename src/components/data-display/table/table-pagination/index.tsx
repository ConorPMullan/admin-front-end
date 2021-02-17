import React from 'react';
import { TablePagination as MuiTablePagination } from '@material-ui/core';
import TablePaginationActions from './table-pagination-actions';
import { TablePaginationContainer } from './styled';

interface PaginationProps {
  onPageChange(page: number, rowsPerPage: number): void;
  disabled?: boolean;
  rowsPerPage?: number;
  selectedPage?: number;
  totalRowCount?: number;
}

const TablePagination: React.FC<PaginationProps> = ({
  disabled,
  rowsPerPage = 25,
  selectedPage = 0,
  totalRowCount = -1,
  onPageChange,
}) => {
  const [pageSize, setRowsPerPage] = React.useState(rowsPerPage);

  const handleChangePage = (event: unknown, newPage: number) => {
    onPageChange(newPage, pageSize);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(updatedRowsPerPage);
    onPageChange(0, updatedRowsPerPage);
  };

  return (
    <TablePaginationContainer data-testid="pagination-container">
      <MuiTablePagination
        ActionsComponent={TablePaginationActions}
        backIconButtonProps={{ disabled }}
        component="div"
        count={totalRowCount}
        nextIconButtonProps={{ disabled }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        page={selectedPage}
        rowsPerPage={pageSize}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </TablePaginationContainer>
  );
};

export default TablePagination;
