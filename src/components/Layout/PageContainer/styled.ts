import styled from 'styled-components';

export const PageContentContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.grey};
  grid-area: pageContainer;
  padding: 30px;
`;
