import { User as UserConstants } from '@constants';
import { IUserSession } from '@interfaces';

const clearUserTokens = (): void => {
  localStorage.removeItem(UserConstants.USER_SESSION_CONSTANTS.USER_AUTH_TOKEN);
  localStorage.removeItem(
    UserConstants.USER_SESSION_CONSTANTS.USER_REFRESH_TOKEN
  );
};

const getLocalStorageByKey = (key: string): string | null => {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('localStorage error', error);
    return null;
  }
};

const setLocalStorage = (key: string, value: string): void => {
  window.localStorage.setItem(key, value);
};

const setUserTokens = (userSession: IUserSession): void => {
  const { accessToken, refreshToken } = userSession;
  if (accessToken) {
    localStorage.setItem(
      UserConstants.USER_SESSION_CONSTANTS.USER_AUTH_TOKEN,
      accessToken
    );
  }
  if (refreshToken) {
    localStorage.setItem(
      UserConstants.USER_SESSION_CONSTANTS.USER_REFRESH_TOKEN,
      refreshToken
    );
  }
};

const StorageUtils = {
  clearUserTokens,
  getLocalStorageByKey,
  setLocalStorage,
  setUserTokens,
};

export default StorageUtils;
