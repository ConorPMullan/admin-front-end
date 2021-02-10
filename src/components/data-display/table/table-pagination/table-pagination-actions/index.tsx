import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { TablePaginationActionsProps } from '@material-ui/core/TablePagination/TablePaginationActions';
import {
  TablePaginationActionContainer,
  MuiFirstPageIcon as FirstPageIcon,
  MuiIconButton as IconButton,
  MuiLastPageIcon as LastPageIcon,
  MuiLeftArrow as LeftArrowIcon,
  MuiRightArrow as RightArrowIcon,
} from './styled';

const TablePaginationActions: React.FC<TablePaginationActionsProps> = ({
  count,
  page,
  rowsPerPage,
  nextIconButtonProps,
  backIconButtonProps,
  onChangePage,
}) => {
  const theme = useTheme();

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  const isNextDisabled = nextIconButtonProps?.disabled;
  const isBackDisabled = backIconButtonProps?.disabled;

  return (
    <TablePaginationActionContainer>
      <IconButton
        data-testid="pagination-first-page-button"
        onClick={handleFirstPageButtonClick}
        disabled={isBackDisabled || page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        data-testid="pagination-previous-page-button"
        onClick={handleBackButtonClick}
        disabled={isBackDisabled || page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <RightArrowIcon /> : <LeftArrowIcon />}
      </IconButton>
      <IconButton
        data-testid="pagination-next-page-button"
        onClick={handleNextButtonClick}
        disabled={isNextDisabled || page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <LeftArrowIcon /> : <RightArrowIcon />}
      </IconButton>
      <IconButton
        data-testid="pagination-last-page-button"
        onClick={handleLastPageButtonClick}
        disabled={isNextDisabled || page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </TablePaginationActionContainer>
  );
};

export default TablePaginationActions;
