import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login, Home } from './pages';
import { Layout } from './components';
import { NavigationRoutes } from './constants';

const authenticatedRoutes = (
  <Layout>
    <Switch>
      <Route path={`${NavigationRoutes.HOME}`}>
        <Home />
      </Route>
      <Route>
        <Redirect to={`${NavigationRoutes.HOME}`} />
      </Route>
    </Switch>
  </Layout>
);

const routes = (
  <Switch>
    <Route path={`${NavigationRoutes.LOGIN}`}>
      <Login />
    </Route>
    <Route>
      <Redirect to={`${NavigationRoutes.LOGIN}`} />
    </Route>
  </Switch>
);

const App: React.FunctionComponent = () => {
  // Authentication hook goes here
  const isAuthenticated = false;

  if (isAuthenticated) {
    return authenticatedRoutes;
  }

  return routes;
};

export default App;
