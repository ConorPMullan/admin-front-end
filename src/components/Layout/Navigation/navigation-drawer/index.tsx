import React from 'react';
import NavigationList from './navigation-list';
import { NavDrawer, ChevronLeft, Button, DrawerToolbar } from './styled';

interface NavigationDrawerProps {
  isDrawerOpen: boolean;
  handleDrawerClose(isOpen: boolean): void;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isDrawerOpen,
  handleDrawerClose,
}) => {
  const onCloseDrawer = () => {
    handleDrawerClose(false);
  };

  return (
    <>
      <NavDrawer variant="permanent" $isOpen={isDrawerOpen}>
        <DrawerToolbar>
          <Button data-testid="close-drawer-button" onClick={onCloseDrawer}>
            <ChevronLeft />
          </Button>
        </DrawerToolbar>
        <NavigationList />
      </NavDrawer>
    </>
  );
};

export default NavigationDrawer;
