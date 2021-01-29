import React from 'react';
import { UserSession } from '@interfaces';
import { AuthContextType } from './type';

const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const initialUser: UserSession = { accessToken: '', refreshToken: '' };
  const [userSession, setUserSession] = React.useState<UserSession>(
    initialUser
  );

  const updateUserSession = (userUpdate: UserSession) => {
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
