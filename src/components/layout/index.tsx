import React from 'react';
import { RouteProps } from 'react-router-dom';
import Navigation from './navigation';
import PageContainer from './page-container';
import { LayoutContainer } from './styled';

interface Props {
  children: RouteProps['children'];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutContainer>
      <Navigation />
      <PageContainer>{children}</PageContainer>
    </LayoutContainer>
  );
};

export default Layout;
