import React from 'react';
import { Auth } from '@contexts';
import { IAuthContext } from '@interfaces';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const App: React.FC = (): React.ReactElement => {
  const { userSession } = React.useContext(Auth.AuthContext) as IAuthContext;

  // Authentication hook goes here
  const isAuthenticated = userSession.accessToken;
  return isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
