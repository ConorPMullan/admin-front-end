import React from 'react';
import { RouteProps } from 'react-router-dom';
import { SiteContainer } from './styled';

import Header from './Header';
import SideNavigation from './SideNavigation';
import PageContainer from './PageContainer';

interface Props {
  children: RouteProps['children'];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <SiteContainer>
      <Header />
      <SideNavigation />
      <PageContainer>{children}</PageContainer>
    </SiteContainer>
  );
};

export default Layout;
