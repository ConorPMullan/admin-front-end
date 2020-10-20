import styled from 'styled-components';

const NavigationContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-right: 1px solid ${({ theme }) => theme.colors.borderMain};
  height: 90vh;
`;

export default NavigationContainer;
