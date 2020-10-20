import React from 'react';
import { useLocation } from 'react-router';
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

  // Mock function to simulate returning pending total of things needing approved (addresses, ratings, reviews)
  function returnPending() {
    return Math.floor(to.length / 3);
  }

  return (
    <LinkContainer isActive={isActive}>
      <StyledLink isActive={isActive} to={to}>
        {children}{' '}
        {pendingItems && (
          <TotalPendingItems isActive={isActive}>
            ({returnPending()})
          </TotalPendingItems>
        )}
      </StyledLink>
    </LinkContainer>
  );
};

export default NavigationLink;
