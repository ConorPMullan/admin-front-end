import React from 'react';
import { Auth } from '@contexts';
import { IAuthContext } from '@interfaces';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from '@components';
import { Login, Home, ManageProductDetails, PageTitle } from '@pages';
import { Navigation } from '@constants';

const App: React.FC = (): React.ReactElement => {
  const { userSession } = React.useContext(Auth.AuthContext) as IAuthContext;

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
    </Switch>
  );
  // Authentication hook goes here
  const isAuthenticated = userSession.accessToken;
  return (
    <Router>
      {isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes}
    </Router>
  );
};

export default App;
