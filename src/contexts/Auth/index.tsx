import React, { useEffect } from 'react';
import { IUserSession, IAuthContext } from '@interfaces';
import { StorageUtils } from '@utils';

const AuthContext = React.createContext<IAuthContext | null>(null);

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
  const initialUser: IUserSession = { accessToken: '', refreshToken: '' };
  const [userSession, setUserSession] = React.useState<IUserSession>(
    initialUser
  );

  useEffect(() => {
    const localUserSession: IUserSession = StorageUtils.getUserSession();
    setUserSession(localUserSession);
  }, []);

  const updateUserSession = (userUpdate: IUserSession) => {
    setUserSession(userUpdate);
    StorageUtils.setUserSession(userUpdate);
  };

  const clearUserSession = () => {
    setUserSession(initialUser);
    StorageUtils.clearUserTokens();
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
