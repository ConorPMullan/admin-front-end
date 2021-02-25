import { Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

const materialStyles = (theme: Theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

export const MuiCloseIcon = styled(CloseIcon)``;

export const MuiIconButton = styled(IconButton)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.iconButton;
  }};
`;

export const MuiInputAdornment = styled(InputAdornment)``;

export const MuiInputBase = styled(InputBase)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.input;
  }};
`;

export const MuiPaper = styled(Paper)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.root;
  }};
`;
export const MuiSearchIcon = styled(SearchIcon)``;
