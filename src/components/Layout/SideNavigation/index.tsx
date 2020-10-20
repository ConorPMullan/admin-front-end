import React from 'react';
import NavigationLink from './NavigationLink';
import NavigationContainer from './styled';
import { Navigation } from '../../../constants';

const SideNavigation: React.FC = () => (
  <NavigationContainer>
    <NavigationLink
      pendingItems={false}
      to={`${Navigation.NAVIGATION_ROUTES.HOME}`}
    >
      Home
    </NavigationLink>
    <NavigationLink to={`${Navigation.NAVIGATION_ROUTES.RATINGS_AND_REVIEWS}`}>
      Ratings And Reviews
    </NavigationLink>
    <NavigationLink to={`${Navigation.NAVIGATION_ROUTES.ADDRESS}`}>
      Address
    </NavigationLink>
    <NavigationLink to={`${Navigation.NAVIGATION_ROUTES.WEB_ACCESS}`}>
      Web Access
    </NavigationLink>
  </NavigationContainer>
);

export default SideNavigation;
