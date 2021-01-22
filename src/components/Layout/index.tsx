import React from 'react';
import { RouteProps } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './Navigation';
import PageContainer from './PageContainer';
import { LayoutContainer } from './styled';

interface Props {
  children: RouteProps['children'];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutContainer>
      <CssBaseline />
      <Navigation />
      <PageContainer>{children}</PageContainer>
    </LayoutContainer>
  );
};

export default Layout;
