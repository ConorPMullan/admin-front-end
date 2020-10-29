import React from 'react';
import { PageContentContainer } from './styled';

const PageContainer: React.FC = ({ children }) => (
  <PageContentContainer> {children} </PageContentContainer>
);

export default PageContainer;
