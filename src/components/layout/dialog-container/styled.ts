import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

const materialStyles = (theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  title: {
    paddingRight: theme.spacing(2),
  },
  subtitle: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  closeButton: {
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

export const MuiDialog = styled(Dialog)`
  .MuiPaper-root {
    min-height: calc(100% - 200px);
  }
`;
export const MuiDivider = styled(Divider)``;
export const MuiGrid = styled(Grid)``;

export const DialogTitleWrapper = styled(MuiDialogTitle)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.root;
  }};
`;

export const DialogTitle = styled(Typography)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.title;
  }};
`;

export const DialogSubTitle = styled(Typography)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.subtitle;
  }};
`;

export const DialogContent = styled(MuiDialogContent)`
  display: flex;
`;

export const MuiCloseIcon = styled(CloseIcon)``;
export const CloseIconButton = styled(IconButton)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.closeButton;
  }};
  position: absolute;
`;
