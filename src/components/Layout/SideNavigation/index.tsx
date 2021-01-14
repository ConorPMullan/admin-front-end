import React from 'react';
import { Navigation } from '@constants';
import { NavigationContainer, NavigationList } from './styled';
import NavigationLink from './NavigationLink';

const SideNavigation: React.FC = () => (
  <NavigationContainer role="navigation" aria-label="main">
    <NavigationList>
      <NavigationLink
        pendingItems={false}
        to={`${Navigation.NAVIGATION_ROUTES.HOME}`}
      >
        Home
      </NavigationLink>
      <NavigationLink
        isSubNavLink
        pendingItems={false}
        to={`${Navigation.NAVIGATION_ROUTES.MANAGE_PRODUCTS}`}
      >
        Product Details
      </NavigationLink>
    </NavigationList>
  </NavigationContainer>
);

export default SideNavigation;
