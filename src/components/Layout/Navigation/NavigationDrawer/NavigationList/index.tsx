import React, { ReactElement } from 'react';
import { Navigation } from '@constants';
import NavigationItem from './NavigationItem';
import { NavList, IconHome, IconManageProducts } from './styled';

const NavigationList: React.FC = (): ReactElement => {
  return (
    <>
      <NavList data-testid="nav-list" aria-label="main dashboard pages">
        <NavigationItem
          dataTestId="nav-item-home"
          to={Navigation.NAVIGATION_ROUTES.HOME}
          text={Navigation.PAGE_TITLES.HOME}
          icon={<IconHome data-testid="nav-item-home-icon" />}
        />
        <NavigationItem
          dataTestId="nav-item-manage-products"
          to={Navigation.NAVIGATION_ROUTES.MANAGE_PRODUCTS}
          text={Navigation.PAGE_TITLES.MANAGE_PRODUCTS}
          icon={
            <IconManageProducts data-testid="nav-item-manage-products-icon" />
          }
        />
      </NavList>
    </>
  );
};

export default NavigationList;
