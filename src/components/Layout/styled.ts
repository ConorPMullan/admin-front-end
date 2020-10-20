import styled from 'styled-components';

export const SiteContainer = styled.main`
  display: grid;
  grid-template-columns: 240px auto;
  grid-template-rows: 1fr;
  grid-template-areas:
    'header header'
    'sideNavigation pageContainer'
    'footer footer';
`;

export const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  grid-area: pageContainer;
  padding: 30px;
`;
