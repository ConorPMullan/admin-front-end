import React from 'react';
import { Navigation } from '@constants';
import { NavigationContainer, NavigationList } from './styled';
import NavigationLink from './NavigationLink';
import NavigationDropdown from './NavigationDropdown';

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
    <NavigationDropdown title="Manage Content" rootUrl="manage">
      <NavigationLink
        isSubNavLink
        pendingItems={false}
        to={`${Navigation.NAVIGATION_ROUTES.MANAGE_HOME}`}
      >
        Home
      </NavigationLink>
      <NavigationLink
        isSubNavLink
        pendingItems={false}
        to={`${Navigation.NAVIGATION_ROUTES.MANAGE_SHOP_PRODUCTS}`}
      >
        Shop Products
      </NavigationLink>
      <NavigationLink
        isSubNavLink
        pendingItems={false}
        to={`${Navigation.NAVIGATION_ROUTES.MANAGE_PRODUCT_DETAILS}`}
      >
        Product Details
      </NavigationLink>
    </NavigationDropdown>
  </NavigationContainer>
);

export default SideNavigation;
