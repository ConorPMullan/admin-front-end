import React from 'react';
import PFXLogoWhite from '@assets/images/pfx-logo-white.png';
import {
  HeaderAppBar,
  HeaderIconButton,
  HeaderMenuIcon,
  HeaderToolbar,
  HeaderImage,
} from './styled';

interface HeaderProps {
  isDrawerOpen: boolean;
  handleDrawerOpen(isOpen: boolean): void;
}

const HeaderBar: React.FC<HeaderProps> = ({
  isDrawerOpen,
  handleDrawerOpen,
}) => {
  const onOpenDrawer = () => {
    handleDrawerOpen(true);
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
          <HeaderImage
            data-testid="Logo"
            src={PFXLogoWhite}
            alt="Pet Food Experts Logo"
            $isOpen={isDrawerOpen}
          />
        </HeaderToolbar>
      </HeaderAppBar>
    </>
  );
};

export default HeaderBar;
