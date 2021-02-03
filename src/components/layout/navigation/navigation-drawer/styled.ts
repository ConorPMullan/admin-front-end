import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styled from 'styled-components';
import { Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

const materialStyles = (theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
});

interface NavDrawerProps extends DrawerProps {
  $isOpen: boolean;
}

export const NavDrawer = styled(Drawer)<NavDrawerProps>`
  ${({ theme, $isOpen }) => {
    const classes = materialStyles(theme);
    let styles = {};
    styles = {
      ...classes.drawer,
      ...($isOpen ? classes.drawerOpen : classes.drawerClose),
    };
    return styles;
  }};

  .MuiDrawer-paper {
    ${({ theme, $isOpen }) => {
      const classes = materialStyles(theme);
      return $isOpen ? classes.drawerOpen : classes.drawerClose;
    }}

    &::-webkit-scrollbar {
      width: 2px;
    }
    &:hover {
      &::-webkit-scrollbar-thumb {
        display: none;
      }
    }
    &::-webkit-scrollbar-thumb {
      display: none;
    }
    &::-webkit-scrollbar-track {
      display: none;
    }
  }
`;

export const ChevronLeft = styled(ChevronLeftIcon)``;
export const ChevronRight = styled(ChevronRightIcon)``;
export const Button = styled(IconButton)``;

export const DrawerToolbar = styled.div`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    let styles = {};
    styles = {
      ...classes.toolbar,
    };
    return styles;
  }}
`;
