import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import { Theme } from '@styles';
import { Auth } from './contexts';

import App from './App';

const Application: React.FC = (): ReactElement => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const type = prefersDarkMode ? 'dark' : 'light';

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          ...Theme.palette,
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
            <CssBaseline>
              <Auth.AuthProvider>
                <App />
              </Auth.AuthProvider>
            </CssBaseline>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Application />, document.getElementById('root'));
