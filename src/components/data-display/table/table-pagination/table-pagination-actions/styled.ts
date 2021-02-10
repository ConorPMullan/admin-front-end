import { IPropsMaterial } from '@interfaces';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

const materialStyles = (theme: Theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
});

export const TablePaginationActionContainer = styled.div`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.root;
  }};
`;
export const MuiFirstPageIcon = styled(FirstPageIcon)<IPropsMaterial>``;
export const MuiIconButton = styled(IconButton)<IPropsMaterial>``;
export const MuiLastPageIcon = styled(LastPageIcon)<IPropsMaterial>``;
export const MuiLeftArrow = styled(KeyboardArrowLeft)<IPropsMaterial>``;
export const MuiRightArrow = styled(KeyboardArrowRight)<IPropsMaterial>``;
