import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLink, LinkContainer, TotalPendingItems } from './styled';

export interface NavigationLinkProps {
  children: string;
  to: string;
  isSubNavLink?: boolean;
  pendingItems?: boolean;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  children,
  to,
  isSubNavLink = false,
  pendingItems = true,
}) => {
  const { pathname } = useLocation();

  const isActive = pathname.toUpperCase() === to.toUpperCase();

  // Mock function to return a value which represents the pending total of things that need approved (addresses, ratings, reviews)
  function returnPending() {
    return Math.floor(to.length / 3);
  }

  return (
    <LinkContainer
      data-testid="nav-link-container"
      $isActive={isActive}
      $isSubNavLink={isSubNavLink}
    >
      <StyledLink $isActive={isActive} to={to} $isSubNavLink={isSubNavLink}>
        {children}{' '}
        {pendingItems && (
          <TotalPendingItems $isActive={isActive}>
            ({returnPending()})
          </TotalPendingItems>
        )}
      </StyledLink>
    </LinkContainer>
  );
};

export default NavigationLink;
