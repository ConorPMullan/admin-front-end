import styled from 'styled-components';

export const SiteContainer = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  grid-template-rows: 1fr;
  grid-template-areas:
    'header header'
    'sideNavigation pageContainer'
    'footer footer';
`;
