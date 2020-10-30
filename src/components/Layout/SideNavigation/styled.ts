import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-right: 1px solid ${({ theme }) => theme.colors.borderMain};
  height: 90vh;
`;

export const NavigationList = styled.ul`
  padding-inline-start: 0px;
  margin-bottom: 0px;
`;
