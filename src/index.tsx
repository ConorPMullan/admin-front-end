import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import palette from '@styled/theme';

import App from './App';

const Application: React.FC = (): ReactElement => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const type = prefersDarkMode ? 'dark' : 'light';

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          ...palette,
          type,
        },
      }),
    [type]
  );

  return (
    <React.StrictMode>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Application />, document.getElementById('root'));
