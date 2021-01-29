import { ApiUrls, Instance } from '@integration';
import { StorageUtils } from '@utils';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { UserCredentials, UserSession } from '@interfaces';

const login = async ({
  email,
  password,
}: UserCredentials): Promise<string | undefined> => {
  const response = await Instance.post<UserSession>(
    ApiUrls.AUTHENTICATION_BASE_URL,
    {
      email,
      password,
    }
  );
  return StorageUtils.setUserTokens(response.data);
};

export const getUserDetails = (token: string): void => {
  const decodedToken = jwtDecode<JwtPayload>(token);
  console.log('decodedToken', decodedToken);
};

export const logout = (): void => {
  StorageUtils.clearUserTokens();
};

export const refreshUser = async (): Promise<string | undefined> => {
  const refreshUrl =
    ApiUrls.AUTHENTICATION_BASE_URL + ApiUrls.AUTHENTICATION_REFRESH;
  const response = await Instance.post<UserSession>(refreshUrl);
  return StorageUtils.setUserTokens(response.data);
};

const AuthService = {
  getUserDetails,
  refreshUser,
  login,
};

export default AuthService;
