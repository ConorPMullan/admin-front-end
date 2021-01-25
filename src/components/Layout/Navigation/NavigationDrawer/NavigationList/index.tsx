import React, { ReactElement } from 'react';
import { Navigation } from '@constants';
import NavigationItem from './NavigationItem';
import { NavList, IconHome } from './styled';

const NavigationList: React.FC = (): ReactElement => {
  return (
    <>
      <NavList data-testid="nav-list" aria-label="main dashboard pages">
        <NavigationItem
          dataTestId="nav-item-home"
          to={Navigation.NAVIGATION_ROUTES.HOME}
          text="Home"
          icon={<IconHome data-testid="nav-item-home-icon" />}
        />
      </NavList>
    </>
  );
};

export default NavigationList;
