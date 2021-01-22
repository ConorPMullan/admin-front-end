import React, { useState } from 'react';

import HeaderBar from './HeaderBar';
// import SideNavigation from './SideNavigation';
import NavigationDrawer from './NavigationDrawer';
import { NavigationContainer } from './styled';

const Navigation: React.FC = () => {
  const [isDrawerOpen, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <NavigationContainer>
      <HeaderBar isDrawerOpen={isDrawerOpen} handleDrawerOpen={toggleDrawer} />
      <NavigationDrawer
        isDrawerOpen={isDrawerOpen}
        handleDrawerClose={toggleDrawer}
      />
    </NavigationContainer>
  );
};

export default Navigation;
