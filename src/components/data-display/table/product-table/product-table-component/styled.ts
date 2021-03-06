import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Skeleton from '@material-ui/lab/Skeleton';
import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

const materialStyles = (theme: Theme) => ({
  paper: {
    margin: theme.spacing(4, 2),
  },
});

export const MuiCircularProgress = styled(CircularProgress)`
  position: absolute;
  top: 40%;
  left: 45%;
`;

export const TableContainer = styled.div`
  position: relative;
`;

export const ModalTitleWrapper = styled.div`
  text-align: center;
  width: 147px;
`;

export const MuiProgress = styled(LinearProgress)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.paper;
  }};
`;
export const MuiButton = styled(Button)``;
export const MuiSkeleton = styled(Skeleton)``;
export const MuiTable = styled(Table)``;
export const MuiTableBody = styled(TableBody)``;
export const MuiTableCell = styled(TableCell)``;
export const MuiFirstHeaderTableCell = styled(TableCell)`
  padding-left: 24px;
`;
export const MuiTableHead = styled(TableHead)``;
export const MuiTableRow = styled(TableRow)``;
export const MuiTypography = styled(Typography)``;
