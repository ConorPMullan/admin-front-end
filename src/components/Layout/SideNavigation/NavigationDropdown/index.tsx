import React from 'react';
import { useToggle } from '@hooks';
import { useLocation } from 'react-router-dom';
import {
  NavigationDropdownContainer,
  NavigationDropdownTitle,
  NavigationLinkContainer,
  NavigationCaret,
} from './styled';

interface Props {
  title: string;
  children: React.ReactNode; // TODO - Try to specify type of NavigationLink
  rootUrl: string;
}

const NavigationDropdown: React.FC<Props> = ({ title, children, rootUrl }) => {
  const { pathname } = useLocation();
  // Are we currently on any of the manage pages?
  const isActive = pathname.toLowerCase().includes(rootUrl.toLowerCase());

  const [isOpen, setIsOpen] = useToggle(isActive);

  return (
    <>
      <NavigationDropdownTitle
        onClick={setIsOpen}
        aria-haspopup="true"
        aria-expanded={isOpen}
        $isOpen={isOpen}
      >
        {title}
        <NavigationCaret $isOpen={isOpen} />
      </NavigationDropdownTitle>
      {isOpen && (
        <NavigationDropdownContainer>
          <NavigationLinkContainer>{children}</NavigationLinkContainer>
        </NavigationDropdownContainer>
      )}
    </>
  );
};

export default NavigationDropdown;
