import { TypographyVariant } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Div, MuiTypography as Typography } from './styled';

interface TitleProps {
  dataTestId: string;
  color?:
    | 'initial'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error';
  variant?: TypographyVariant;
}

const Title: React.FC<TitleProps> = ({
  color,
  children,
  dataTestId,
  variant = 'h6',
}): ReactElement => {
  return (
    <Div>
      <Typography
        data-testid={dataTestId}
        variant={variant}
        color={color}
        gutterBottom
      >
        {children}
      </Typography>
    </Div>
  );
};

export default Title;
