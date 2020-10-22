import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.78em;
  padding-left: 2em;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.deepBlue};
  font-weight: ${({ theme, $isActive }) =>
    $isActive ? theme.fontWeights.bold : theme.fontWeights.normal};
  letter-spacing: 0.025em;

  :visited {
    color: ${({ theme }) => theme.colors.deepBlue};
  }

  :hover {
    opacity: ${({ theme }) => theme.opacity.link};
  }
`;

export const LinkContainer = styled.li<{ $isActive: boolean }>`
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.grey : theme.colors.lightGrey};
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;

  :first-child {
    margin-top: 20px;
  }
`;

export const TotalPendingItems = styled.span<{ $isActive: boolean }>`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: ${({ theme, $isActive }) =>
    $isActive ? theme.fontWeights.bold : theme.fontWeights.normal};
`;
