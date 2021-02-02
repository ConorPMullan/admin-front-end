/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// This function takes test-librarys's render function and inserts the styled-components theme provider for testing purposes
// test-utils.js
import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Auth } from '@contexts';

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

const customRender = (
  ui: JSX.Element,
  options?: Record<string, unknown>
): RenderResult => render(ui, { wrapper: Providers, ...options });

export const renderWithRouter = (
  ui: JSX.Element,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return {
    ...customRender(<Router history={history}>{ui}</Router>),
    history,
  };
};

export * from '@testing-library/react';
export { customRender as render };
