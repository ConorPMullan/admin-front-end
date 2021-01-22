import React from 'react';
import { PageMain, PageContentContainer, PageToolbar } from './styled';

const PageContainer: React.FC = ({ children }) => (
  <PageMain>
    <PageToolbar />
    <PageContentContainer> {children} </PageContentContainer>
  </PageMain>
);

export default PageContainer;
