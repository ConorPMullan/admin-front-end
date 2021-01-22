import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

const materialStyles = (theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
});

interface HeaderProps extends AppBarProps {
  $isOpen: boolean;
}

export const HeaderAppBar = styled(AppBar)<HeaderProps>`
  ${({ theme, $isOpen }) => {
    const classes = materialStyles(theme);
    return {
      ...classes.appBar,
      ...($isOpen && classes.appBarShift),
    };
  }};
`;

export const HeaderIconButton = styled(IconButton)<HeaderProps>`
  margin-right: 36px;
  display: ${({ $isOpen }) => ($isOpen ? 'none' : 'visible')};
`;

export const HeaderMenuIcon = styled(MenuIcon)``;

export const HeaderToolbar = styled(Toolbar)``;
