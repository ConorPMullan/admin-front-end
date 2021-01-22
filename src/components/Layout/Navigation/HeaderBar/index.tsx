import React from 'react';
import {
  HeaderAppBar,
  HeaderIconButton,
  HeaderMenuIcon,
  HeaderToolbar,
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
            $isOpen={isDrawerOpen}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onOpenDrawer}
          >
            <HeaderMenuIcon />
          </HeaderIconButton>
        </HeaderToolbar>
      </HeaderAppBar>
    </>
  );
};

export default HeaderBar;
