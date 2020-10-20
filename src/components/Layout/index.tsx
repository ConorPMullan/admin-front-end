import React from 'react';
import { RouteProps } from 'react-router';
import { PageContainer, SiteContainer } from './styled';

import Header from './Header';
import SideNavigation from './SideNavigation';

interface Props {
  children: RouteProps['children'];
}

const Layout: React.FC<Props> = ({ children }) => (
  <SiteContainer>
    <Header />
    <SideNavigation />
    <PageContainer>{children}</PageContainer>
  </SiteContainer>
);

export default Layout;
