import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Application: React.FunctionComponent = (): ReactElement => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
