import React, { ReactElement } from 'react';
import { Div, MuiTypography as Typography } from './styled';

interface TitleProps {
  dataTestId: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  dataTestId,
}): ReactElement => {
  return (
    <Div>
      <Typography
        data-testid={dataTestId}
        component="h2"
        variant="h6"
        color="primary"
        gutterBottom
      >
        {children}
      </Typography>
    </Div>
  );
};

export default Title;
