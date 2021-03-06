import AppBar, { AppBarProps } from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles';
import { IPropsImage } from '@interfaces';

const drawerWidth = 240;

const materialStyles = (theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
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

interface HeaderImageProps extends IPropsImage {
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
  visibility: ${({ $isOpen }) => ($isOpen ? 'hidden' : 'visible')};
  opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
  width: ${({ $isOpen }) => ($isOpen ? '0px' : '48px')};
  transition: visibility 0s, opacity 0.2s, width 0.2s;
`;

export const HeaderMenuIcon = styled(MenuIcon)``;

export const HeaderToolbar = styled(Toolbar)`
  display: flex;
`;

export const HeaderContentArea = styled.div`
  flex-grow: 1;
`;

export const HeaderImage = styled.img<HeaderImageProps>`
  margin-left: ${({ $isOpen }) => ($isOpen ? '0px' : '36px')};
  max-width: 150px;
  transition: all 0.2s ease-in-out;
`;

export const LogoutButton = styled(Button)``;
export const LogoutButtonIcon = styled(ExitToAppIcon)``;
