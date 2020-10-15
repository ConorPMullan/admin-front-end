import React from 'react';
import { RouteProps } from 'react-router';

interface Props {
  children: RouteProps['children'];
}

const Layout: React.FC<Props> = ({ children }) => (
  <div>{children}</div>
);

export default Layout;
