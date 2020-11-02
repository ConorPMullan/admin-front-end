import React from 'react';
import { PrimaryStyle, PrimaryLinkStyle } from './styled';

interface Props {
  to: string;
  disabled: string;
  dataTestId: string;
  icon: string;
  label: string;
}

const CallToActionButton: React.FC<Props> = ({
  to,
  disabled = false,
  dataTestId,
  icon = null,
  label = 'Label',
}) => {
  if (to && !disabled) {
    return (
      <PrimaryLinkStyle data-testid={dataTestId}>
        {icon}
        {label}
      </PrimaryLinkStyle>
    );
  }

  return (
    <PrimaryStyle data-testid={dataTestId}>
      {icon}
      {label}
    </PrimaryStyle>
  );
};

export default CallToActionButton;
