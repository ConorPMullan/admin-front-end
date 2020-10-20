import styled from 'styled-components';
import ImageProps from '../../../interfaces/image';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderMain};
  grid-area: header;
  height: 10vh;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img<ImageProps>`
  width: 310px;
  height: 52px;
  padding-left: 20px;
`;
