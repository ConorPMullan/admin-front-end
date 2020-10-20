import React from 'react';
import { HeaderContainer, Logo } from './styled';
import PFELogo from '../../../assets/pet-food-logo.png';

const Header: React.FC = () => (
  <HeaderContainer>
    <Logo src={PFELogo} alt="Pet Foods Experts Logo" />
  </HeaderContainer>
);

export default Header;
