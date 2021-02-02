import React from 'react';
import {
  BackdropContainer,
  MuiCircularProgress as CircularProgress,
} from './styled';

const FullPageLoader: React.FC = () => {
  return (
    <BackdropContainer open>
      <CircularProgress color="secondary" />
    </BackdropContainer>
  );
};

export default FullPageLoader;
