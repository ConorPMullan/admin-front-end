import React from 'react';
import { PrimaryStyle, PrimaryLinkStyle } from './styled';

interface Props {
  dataTestId: string;
  to?: string;
  disabled: boolean;
  icon: string;
  label: string;
  width?: string;
  height?: string;
  inverted: boolean;
  // TODO: find the most appropriate type for the onClick
  onClick?: any;
}

const CallToActionButton: React.FC<Props> = ({
  dataTestId,
  to,
  disabled = false,
  icon = null,
  label = 'Label',
  width,
  height,
  inverted,
  onClick,
}) => {
  if (to && !disabled) {
    return (
      <PrimaryLinkStyle
        data-testid={dataTestId}
        to={to}
        disabled={disabled}
        width={width}
        height={height}
        $inverted={inverted}
        onClick={onClick}
      >
        {icon}
        {label}
      </PrimaryLinkStyle>
    );
  }

  return (
    <PrimaryStyle
      data-testid={dataTestId}
      disabled={disabled}
      width={width}
      height={height}
      $inverted={inverted}
      onClick={onClick}
    >
      {icon}
      {label}
    </PrimaryStyle>
  );
};

export default CallToActionButton;
