import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const SharedLinkStyle = css`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.78em;
  padding-left: 2em;
  letter-spacing: 0.025em;
  :visited {
    color: ${({ theme }) => theme.colors.deepBlue};
  }

  :hover {
    opacity: ${({ theme }) => theme.opacity.link};
  }
`;

export const StyledLink = styled(Link)<{
  $isActive: boolean;
  $isSubNavLink?: boolean;
}>`
  ${SharedLinkStyle}

  ${({ theme, $isActive, $isSubNavLink }) => {
    let styles = '';

    if ($isActive) {
      styles += `font-weight: ${theme.fontWeights.bold};`;
    }

    if ($isSubNavLink) {
      styles += `
        color: ${theme.colors.black};
        font-size: 1em;  
        padding-left: 1.5em;
        text-transform: capitalize; 
        font-weight: ${theme.fontWeights.semibold};
        margin-top: 5px;

        :visited {
          color: ${theme.colors.black};
        }
      `;

      if ($isActive) {
        styles += `
        color: ${theme.colors.orange};
        :visited {
          color: ${theme.colors.orange};
        }
        `;
      }
    }

    return styles;
  }};
`;

export const LinkContainer = styled.li<{
  $isActive: boolean;
  $isSubNavLink?: boolean;
}>`
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;

  :first-child {
    margin-top: 20px;
  }

  ${({ theme, $isActive, $isSubNavLink }) => {
    let styles = '';

    if ($isActive) {
      styles += `background-color: ${theme.colors.grey};`;
    }

    if ($isSubNavLink) {
      styles += `
        height: 30px;
        background-color: ${theme.colors.lightGrey};
        :first-child {
          margin-top: 0px;
        }
      `;
    }

    return styles;
  }};
`;

export const TotalPendingItems = styled.span<{ $isActive: boolean }>`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: ${({ theme, $isActive }) =>
    $isActive ? theme.fontWeights.bold : theme.fontWeights.normal};
`;
