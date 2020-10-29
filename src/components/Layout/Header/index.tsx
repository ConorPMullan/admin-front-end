import React from 'react';
import PFELogo from '@assets/pet-food-logo.png';
import { HeaderContainer, Logo } from './styled';

const Header: React.FC = () => (
  <HeaderContainer>
    <Logo data-testid="Logo" src={PFELogo} alt="Pet Food Experts Logo" />
  </HeaderContainer>
);

export default Header;
