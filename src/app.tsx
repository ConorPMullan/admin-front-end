import React from 'react';
import { Auth } from '@contexts';
import { IAuthContext } from '@interfaces';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { FullPageLoader, Layout } from '@components';
import { Login, Home, ManageProductDetails, PageTitle } from '@pages';
import { Navigation } from '@constants';

const App: React.FC = (): React.ReactElement => {
  const { isAuthLoading, userSession } = React.useContext(
    Auth.AuthContext
  ) as IAuthContext;

  const authenticatedRoutes = (
    <Layout>
      <Switch>
        <Route path={Navigation.NAVIGATION_ROUTES.MANAGE_PRODUCTS}>
          <PageTitle title={Navigation.PAGE_TITLES.MANAGE_PRODUCTS}>
            <ManageProductDetails />
          </PageTitle>
        </Route>
        <Route exact path={Navigation.NAVIGATION_ROUTES.HOME}>
          <PageTitle title={Navigation.PAGE_TITLES.HOME}>
            <Home />
          </PageTitle>
        </Route>
      </Switch>
    </Layout>
  );

  const unauthenticatedRoutes = (
    <Switch>
      <Route exact path={Navigation.NAVIGATION_ROUTES.LOGIN}>
        <Login />
      </Route>
      <Redirect to={Navigation.NAVIGATION_ROUTES.LOGIN} />
    </Switch>
  );

  const isAuthenticated = userSession.accessToken;
  return isAuthLoading ? (
    <FullPageLoader />
  ) : (
    <Router>
      {isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes}
    </Router>
  );
};

export default App;
