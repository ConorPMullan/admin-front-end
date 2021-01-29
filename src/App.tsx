import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from '@components';
import { Navigation } from '@constants';
import { Login, Home, ManageProductDetails, PageTitle } from '@pages';
import { Auth } from './contexts';

const authenticatedRoutes = (
  <Layout>
    <Switch>
      <Route path={Navigation.NAVIGATION_ROUTES.HOME}>
        <PageTitle title={Navigation.PAGE_TITLES.HOME}>
          <Home />
        </PageTitle>
      </Route>
      <Route path={Navigation.NAVIGATION_ROUTES.MANAGE_PRODUCTS}>
        <PageTitle title={Navigation.PAGE_TITLES.MANAGE_PRODUCTS}>
          <ManageProductDetails />
        </PageTitle>
      </Route>
      <Route>
        <Redirect to={Navigation.NAVIGATION_ROUTES.HOME} />
      </Route>
    </Switch>
  </Layout>
);

const routes = (
  <Switch>
    <Route path={Navigation.NAVIGATION_ROUTES.LOGIN}>
      <Login />
    </Route>
    <Redirect to={Navigation.NAVIGATION_ROUTES.LOGIN} />
  </Switch>
);

const App: React.FC = (): React.ReactElement => {
  // Authentication hook goes here
  const isAuthenticated = false;
  return (
    <Auth.AuthProvider>
      {isAuthenticated ? authenticatedRoutes : routes}
    </Auth.AuthProvider>
  );
};

export default App;
