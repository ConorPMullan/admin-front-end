import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

const materialStyles = (theme: Theme) => ({
  paper: {
    margin: theme.spacing(4, 2),
  },
});

export const TableContainer = styled.div``;
export const MuiProgress = styled(LinearProgress)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.paper;
  }};
`;
export const MuiTable = styled(Table)``;
export const MuiTableBody = styled(TableBody)``;
export const MuiTableCell = styled(TableCell)``;
export const MuiTableHead = styled(TableHead)``;
export const MuiTableRow = styled(TableRow)``;
export const MuiTypography = styled(Typography)``;
