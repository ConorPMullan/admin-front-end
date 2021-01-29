import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from '@components';
import { Navigation } from '@constants';
import { Home, ManageProductDetails, PageTitle } from '@pages';

const AuthenticatedApp: React.FC = (): React.ReactElement => {
  return (
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
};

export default AuthenticatedApp;
