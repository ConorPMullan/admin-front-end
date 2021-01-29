import React from 'react';
import { IUserSession, IAuthContext } from '@interfaces';

const AuthContext = React.createContext<IAuthContext | null>(null);

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const initialUser: IUserSession = { accessToken: '', refreshToken: '' };
  const [userSession, setUserSession] = React.useState<IUserSession>(
    initialUser
  );

  const updateUserSession = (userUpdate: IUserSession) => {
    setUserSession(userUpdate);
  };

  const clearUserSession = () => {
    setUserSession(initialUser);
  };

  return (
    <AuthContext.Provider
      value={{ userSession, updateUserSession, clearUserSession }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default { AuthContext, AuthProvider };
