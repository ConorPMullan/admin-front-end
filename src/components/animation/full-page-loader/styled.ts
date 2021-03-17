import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

const materialStyles = (theme: Theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
});

export const BackdropContainer = styled(Backdrop)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return {
      ...classes.backdrop,
    };
  }};
`;
export const MuiCircularProgress = styled(CircularProgress)``;
