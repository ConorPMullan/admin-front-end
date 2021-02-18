import React from 'react';
import { Login } from '@constants';
import { Auth } from '@contexts';
import { IAuthContext } from '@interfaces';
import PFXLogoWhite from '@assets/images/pfx-logo-white.png';
import {
  HeaderAppBar,
  HeaderIconButton,
  HeaderMenuIcon,
  HeaderToolbar,
  HeaderContentArea,
  HeaderImage,
  LogoutButton,
  LogoutButtonIcon,
} from './styled';

interface HeaderProps {
  isDrawerOpen: boolean;
  handleDrawerOpen(isOpen: boolean): void;
}

const HeaderBar: React.FC<HeaderProps> = ({
  isDrawerOpen,
  handleDrawerOpen,
}) => {
  const { clearUserSession } = React.useContext(
    Auth.AuthContext
  ) as IAuthContext;

  const onOpenDrawer = () => {
    handleDrawerOpen(true);
  };

  const handleLogout = () => {
    clearUserSession();
  };

  return (
    <>
      <HeaderAppBar position="fixed" $isOpen={isDrawerOpen}>
        <HeaderToolbar>
          <HeaderIconButton
            data-testid="open-drawer-button"
            $isOpen={isDrawerOpen}
            aria-label="open drawer"
            edge="start"
            onClick={onOpenDrawer}
          >
            <HeaderMenuIcon />
          </HeaderIconButton>
          <HeaderContentArea>
            <HeaderImage
              data-testid="Logo"
              src={PFXLogoWhite}
              alt="Pet Food Experts Logo"
              $isOpen={isDrawerOpen}
            />
          </HeaderContentArea>
          <LogoutButton
            onClick={handleLogout}
            size="small"
            endIcon={<LogoutButtonIcon />}
          >
            {Login.LOGOUT}
          </LogoutButton>
        </HeaderToolbar>
      </HeaderAppBar>
    </>
  );
};

export default HeaderBar;
