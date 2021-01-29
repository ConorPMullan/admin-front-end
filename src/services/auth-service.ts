import { ApiUrls, Instance } from '@integration';
import { StorageUtils } from '@utils';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { IUserCredentials, IUserSession } from '@interfaces';

const login = async ({
  email,
  password,
}: IUserCredentials): Promise<IUserSession | undefined> => {
  const response = await Instance.post<IUserSession>(
    ApiUrls.AUTHENTICATION_BASE_URL,
    {
      email,
      password,
    }
  );
  const userSession = response.data;
  StorageUtils.setUserTokens(userSession);
  return userSession;
};

export const getUserDetails = (token: string): void => {
  const decodedToken = jwtDecode<JwtPayload>(token);
  console.log('decodedToken', decodedToken);
};

export const logout = (): void => {
  StorageUtils.clearUserTokens();
};

export const refreshUser = async (): Promise<IUserSession | undefined> => {
  const refreshUrl =
    ApiUrls.AUTHENTICATION_BASE_URL + ApiUrls.AUTHENTICATION_REFRESH;
  const response = await Instance.post<IUserSession>(refreshUrl);
  const userSession = response.data;
  StorageUtils.setUserTokens(userSession);
  return userSession;
};

const AuthService = {
  getUserDetails,
  refreshUser,
  login,
};

export default AuthService;
