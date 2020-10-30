import styled from 'styled-components';
import { SharedLinkStyle } from '../NavigationLink/styled';

export const NavigationDropdownContainer = styled.div`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.78em;
  padding-left: 2em;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.deepBlue};
  letter-spacing: 0.025em;

  :visited {
    color: ${({ theme }) => theme.colors.deepBlue};
  }

  :hover {
    opacity: ${({ theme }) => theme.opacity.link};
  }
`;

export const NavigationDropdownTitle = styled.div<{ $isOpen: boolean }>`
  ${SharedLinkStyle}
  color: ${({ theme }) => theme.colors.deepBlue};
  font-weight: ${({ theme, $isOpen }) =>
    $isOpen ? theme.fontWeights.bold : theme.fontWeights.semibold};
  background-color: ${({ theme, $isOpen }) =>
    $isOpen ? theme.colors.grey : theme.colors.lightGrey};
  cursor: pointer;
  margin-bottom: 0px;
  padding-top: 12.5px;
  padding-bottom: 12.5px;
`;

export const NavigationLinkContainer = styled.ul`
  padding-inline-start: 0px;
  margin-top: 5px;
`;

export const NavigationCaret = styled.span<{ $isOpen: boolean }>`
  width: 0;
  height: 0;
  display: inline-block;
  border: ${({ $isOpen }) =>
    $isOpen ? '3.25px solid transparent' : '3px solid transparent'};
  border-top-color: ${({ theme }) => theme.colors.deepBlue};
  position: relative;
  left: 15px;
`;
