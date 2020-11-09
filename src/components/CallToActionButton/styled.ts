import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const sharedStyling = css<{
  disabled: boolean;
  width?: string;
  height?: string;
  $inverted: boolean;
}>`
  disabled: disabled;
  display: flex;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  line-height: 24px;
  padding: 10px 27px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ $inverted, theme }) =>
    $inverted ? `${theme.colors.orange}` : 'white'};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.main};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: ${({ $inverted, theme }) =>
    $inverted ? `2px solid ${theme.colors.orange}` : 'none'};
  background-color: ${({ $inverted, theme }) => {
    if ($inverted) {
      return 'transparent';
    }
    return theme.colors.orange;
  }};
  outline: none;
  cursor: pointer;
  :hover {
    background-color: ${({ $inverted, theme }) => {
      if ($inverted) {
        return 'transparent';
      }
      return theme.colors.darkOrange;
    }};
    color: ${({ $inverted, theme }) =>
      $inverted ? `${theme.colors.darkOrange}` : `${theme.colors.white}`};
    border-color: ${({ $inverted, theme }) =>
      $inverted ? `${theme.colors.darkOrange}` : 'none'};
  }
  :disabled {
    color: ${({ theme }) => theme.colors.mediumGrey};
    background-color: ${({ theme }) => theme.colors.disabled};
    border-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
  & > svg {
    margin-right: 8px;
  }
`;

export const PrimaryStyle = styled.button`
  ${sharedStyling}
`;

export const PrimaryLinkStyle = styled(Link)`
  ${sharedStyling}
  text-decoration: none;
`;
