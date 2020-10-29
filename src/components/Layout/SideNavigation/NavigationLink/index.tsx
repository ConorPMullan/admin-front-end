import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLink, LinkContainer, TotalPendingItems } from './styled';

interface Props {
  children: string;
  to: string;
  pendingItems?: boolean;
}

const NavigationLink: React.FC<Props> = ({
  children,
  to,
  pendingItems = true,
}) => {
  const { pathname } = useLocation();

  const isActive = pathname.toUpperCase() === to.toUpperCase();

  // Mock function to return a value which represents the pending total of things that need approved (addresses, ratings, reviews)
  function returnPending() {
    return Math.floor(to.length / 3);
  }

  return (
    <LinkContainer data-testid="nav-link-container" $isActive={isActive}>
      <StyledLink $isActive to={to}>
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
