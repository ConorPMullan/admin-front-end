import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from '@components';
import { Navigation } from '@constants';
import {
  Login,
  Home,
  Address,
  RatingsAndReview,
  WebAccess,
  ManageHome,
  ManageShopProducts,
  ManageProductDetails,
} from '@pages';

import { PageTitle } from '@utils/page';

const authenticatedRoutes = (
  <Layout>
    <Switch>
      <Route path={Navigation.NAVIGATION_ROUTES.HOME}>
        <PageTitle title={Navigation.PAGE_TITLES.HOME}>
          <Home />
        </PageTitle>
      </Route>
      <Route path={Navigation.NAVIGATION_ROUTES.ADDRESS}>
        <PageTitle title={Navigation.PAGE_TITLES.ADDRESS}>
          <Address />
        </PageTitle>
      </Route>
      <Route path={Navigation.NAVIGATION_ROUTES.WEB_ACCESS}>
        <PageTitle title={Navigation.PAGE_TITLES.WEB_ACCESS}>
          <WebAccess />
        </PageTitle>
      </Route>
      <Route path={Navigation.NAVIGATION_ROUTES.RATINGS_AND_REVIEWS}>
        <PageTitle title={Navigation.PAGE_TITLES.RATINGS_AND_REVIEWS}>
          <RatingsAndReview />
        </PageTitle>
      </Route>
      <Route path={Navigation.NAVIGATION_ROUTES.MANAGE_SHOP_PRODUCTS}>
        <PageTitle title={Navigation.PAGE_TITLES.MANAGE_SHOP_PRODUCTS}>
          <ManageShopProducts />
        </PageTitle>
      </Route>
      <Route path={Navigation.NAVIGATION_ROUTES.MANAGE_PRODUCT_DETAILS}>
        <PageTitle title={Navigation.PAGE_TITLES.MANAGE_PRODUCT_DETAILS}>
          <ManageProductDetails />
        </PageTitle>
      </Route>
      <Route path={Navigation.NAVIGATION_ROUTES.MANAGE_HOME}>
        <PageTitle title={Navigation.PAGE_TITLES.MANAGE_HOME}>
          <ManageHome />
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
    <Route>
      <Redirect to={Navigation.NAVIGATION_ROUTES.LOGIN} />
    </Route>
  </Switch>
);

const App: React.FC = () => {
  // Authentication hook goes here
  const isAuthenticated = true;

  if (isAuthenticated) {
    return authenticatedRoutes;
  }

  return routes;
};

export default App;
