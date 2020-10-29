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
        to={`${Navigation.NAVIGATION_ROUTES.RATINGS_AND_REVIEWS}`}
      >
        Ratings And Reviews
      </NavigationLink>
      <NavigationLink to={`${Navigation.NAVIGATION_ROUTES.ADDRESS}`}>
        Address
      </NavigationLink>
      <NavigationLink to={`${Navigation.NAVIGATION_ROUTES.WEB_ACCESS}`}>
        Web Access
      </NavigationLink>
    </NavigationList>
  </NavigationContainer>
);

export default SideNavigation;
