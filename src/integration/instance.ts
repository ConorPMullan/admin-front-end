/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios, { AxiosRequestConfig } from 'axios';
import { StorageUtils } from '@utils';
import ApiUrls from './api-urls';

const Instance = axios.create({ baseURL: ApiUrls.BASE_URL });

Instance.interceptors.request.use(
  (config): AxiosRequestConfig => {
    const refreshUrl =
      ApiUrls.AUTHENTICATION_BASE_URL + ApiUrls.AUTHENTICATION_REFRESH;
    const userSession = StorageUtils.getUserSession();
    if (config.url === refreshUrl && userSession.refreshToken) {
      config.headers.Authorization = `Bearer ${userSession.refreshToken}`;
    }
    return config;
  }
);

export default Instance;
