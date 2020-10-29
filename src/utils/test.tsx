/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// This function takes test-librarys's render function and inserts the styled-components theme provider for testing purposes
// test-utils.js
import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styled/theme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
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
