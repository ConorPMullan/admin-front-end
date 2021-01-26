import React, { useState } from 'react';
import HeaderBar from './HeaderBar';
import NavigationDrawer from './NavigationDrawer';
import { NavigationContainer } from './styled';

const Navigation: React.FC = () => {
  const [isDrawerOpen, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <NavigationContainer data-testid="navigation-container">
      <HeaderBar
        data-testid="header-bar"
        isDrawerOpen={isDrawerOpen}
        handleDrawerOpen={toggleDrawer}
      />
      <NavigationDrawer
        data-testid="navigation-drawer"
        isDrawerOpen={isDrawerOpen}
        handleDrawerClose={toggleDrawer}
      />
    </NavigationContainer>
  );
};

export default Navigation;
