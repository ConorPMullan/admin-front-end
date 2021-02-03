import { ApiUrls, Instance } from '@integration';
import { IUserCredentials, IUserSession } from '@interfaces';
import { AxiosResponse } from 'axios';

const login = ({
  email,
  password,
}: IUserCredentials): Promise<AxiosResponse<IUserSession>> => {
  return Instance.post<IUserSession>(ApiUrls.AUTHENTICATION_BASE_URL, {
    email,
    password,
  });
};

const refreshUser = (): Promise<AxiosResponse<IUserSession>> => {
  const refreshUrl =
    ApiUrls.AUTHENTICATION_BASE_URL + ApiUrls.AUTHENTICATION_REFRESH;
  return Instance.post<IUserSession>(refreshUrl);
};

const AuthService = {
  refreshUser,
  login,
};

export default AuthService;
