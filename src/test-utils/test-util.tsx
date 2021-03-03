/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// This function takes test-librarys's render function and inserts the styled-components theme provider for testing purposes
import React from 'react';
import { render as testRender, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Auth } from '@contexts';
import { AxiosResponse } from 'axios';
import { IPageable, IResponseBase, IResponsePage } from '@interfaces';

const Providers: React.FC = ({ children }) => {
  const theme = createMuiTheme();
  return (
    <>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <Auth.AuthProvider>{children}</Auth.AuthProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
};

const render = (
  ui: JSX.Element,
  options?: Record<string, unknown>
): RenderResult => testRender(ui, { wrapper: Providers, ...options });

const renderWithRouter = (
  ui: JSX.Element,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
};

// Generic functions and TSX files don't play well together...
// eslint-disable-next-line func-names
const buildPaginatedData = function <T>(
  content: T[],
  selectedPage: number,
  totalElements: number,
  totalPages: number,
  pageSize: number
): IResponseBase<T> {
  const pageable: IPageable = {
    pageNumber: selectedPage,
    pageSize,
  };
  const page: IResponsePage<T> = {
    content,
    empty: false,
    first: false,
    last: false,
    number: selectedPage,
    numberOfElements: pageSize,
    pageable,
    size: pageSize,
    totalElements,
    totalPages,
  };
  const base: IResponseBase<T> = {
    page,
  };
  return base;
};

// eslint-disable-next-line func-names
const buildAxiosResponse = function <T>(data: T | T[], status: number) {
  const axiosResponse: AxiosResponse<T> = {
    data,
    status,
    statusText: status.toString(),
    headers: {},
    config: {},
  };
  return axiosResponse;
};

const TestUtils = {
  buildAxiosResponse,
  buildPaginatedData,
  render,
  renderWithRouter,
};

export default TestUtils;
