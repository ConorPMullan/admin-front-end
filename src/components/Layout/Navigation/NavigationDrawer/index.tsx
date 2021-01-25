import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {
  NavDrawer,
  ChevronLeft,
  ChevronRight,
  Button,
  DrawerToolbar,
} from './styled';

interface NavigationDrawerProps {
  isDrawerOpen: boolean;
  handleDrawerClose(isOpen: boolean): void;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isDrawerOpen,
  handleDrawerClose,
}) => {
  const theme = useTheme();

  const onCloseDrawer = () => {
    handleDrawerClose(false);
  };

  return (
    <>
      <NavDrawer variant="permanent" $isOpen={isDrawerOpen}>
        <DrawerToolbar>
          <Button data-testid="close-drawer-button" onClick={onCloseDrawer}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </DrawerToolbar>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                data-testid="navigation-list-item-text"
                primary={text}
              />
            </ListItem>
          ))}
        </List>
      </NavDrawer>
    </>
  );
};

export default NavigationDrawer;
