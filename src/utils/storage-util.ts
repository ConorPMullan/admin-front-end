import { User as UserConstants } from '@constants';
import { IUserSession } from '@interfaces';

const clearUserTokens = (): void => {
  localStorage.removeItem(UserConstants.USER_AUTH_TOKEN);
  localStorage.removeItem(UserConstants.USER_REFRESH_TOKEN);
};

const getUserSession = (): IUserSession => {
  const accessToken = getFromLocalStorageByKey(UserConstants.USER_AUTH_TOKEN);
  const refreshToken = getFromLocalStorageByKey(
    UserConstants.USER_REFRESH_TOKEN
  );

  const userSession: IUserSession = { accessToken, refreshToken };
  return userSession;
};

const getFromLocalStorageByKey = (key: string): string | undefined => {
  try {
    return window.localStorage.getItem(key) || undefined;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('localStorage error', error);
    return undefined;
  }
};

const setLocalStorage = (key: string, value: string): void => {
  window.localStorage.setItem(key, value);
};

const setUserSession = (userSession: IUserSession): void => {
  const { accessToken, refreshToken } = userSession;
  if (accessToken) {
    setLocalStorage(UserConstants.USER_AUTH_TOKEN, accessToken);
  }
  if (refreshToken) {
    setLocalStorage(UserConstants.USER_REFRESH_TOKEN, refreshToken);
  }
};

const StorageUtils = {
  clearUserTokens,
  getFromLocalStorageByKey,
  getUserSession,
  setLocalStorage,
  setUserSession,
};

export default StorageUtils;
