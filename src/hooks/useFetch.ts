/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-param-reassign */
import { useState, useEffect } from 'react';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { StorageUtils } from '@utils';
import { ApiUrls } from '@integration';

interface IFetch<T> {
  response?: AxiosResponse<T>;
  error: unknown;
  isLoading: boolean;
}

type BasicMethod = 'get' | 'delete' | 'head' | 'options';
type PayloadMethod = 'post' | 'put' | 'patch';

const isBasicMethod = (arg: string): arg is BasicMethod => {
  return (
    arg === 'get' || arg === 'delete' || arg === 'options' || arg === 'head'
  );
};

const isPayloadMethod = (arg: string): arg is PayloadMethod => {
  return arg === 'post' || arg === 'put' || arg === 'patch';
};

const useFetch = <T>(
  api: AxiosInstance,
  method: BasicMethod | PayloadMethod,
  url: string,
  config?: AxiosRequestConfig,
  data?: unknown
): IFetch<T> => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      if (isPayloadMethod(method)) {
        api[method]<T>(url, data, config)
          .then((res) => {
            setResponse(res);
          })
          .catch((err) => {
            setError(err);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else if (isBasicMethod(method)) {
        console.log(config);
        api[method]<T>(url, config)
          .then((res) => {
            setResponse(res);
          })
          .catch((err) => {
            setError(err);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    };

    fetchData();
  }, [api, method, url, data, config]);

  api.interceptors.request.use(
    (requestConfig: AxiosRequestConfig): AxiosRequestConfig => {
      const refreshUrl =
        ApiUrls.AUTHENTICATION_BASE_URL + ApiUrls.AUTHENTICATION_REFRESH;
      const userSession = StorageUtils.getUserSession();
      if (requestConfig.url === refreshUrl && userSession.refreshToken) {
        requestConfig.headers.Authorization = `Bearer ${userSession.refreshToken}`;
      } else if (userSession.accessToken) {
        requestConfig.headers.Authorization = `Bearer ${userSession.accessToken}`;
      }
      return requestConfig;
    }
  );

  return { response, error, isLoading };
};

export default useFetch;
