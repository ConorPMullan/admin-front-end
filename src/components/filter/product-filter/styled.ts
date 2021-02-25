import { Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';

const materialStyles = (theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
  },
  wrapper: {
    paddingRight: theme.spacing(2),
  },
});

export const ProductFilterContainer = styled.div`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.root;
  }};
`;

export const ProductFilterComponentWrapper = styled.div`
  flex-grow: 1;
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.wrapper;
  }};
`;

export const MuiFilterListIcon = styled(FilterListIcon)``;
export const MuiGrid = styled(Grid)``;
export const MuiButton = styled(Button)``;
export const MuiIconButton = styled(IconButton)`
  margin-left: auto;
`;
export const MuiFade = styled(Fade)``;
