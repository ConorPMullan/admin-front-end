import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Navigation } from '@constants';
import { Login } from '@pages';

const UnauthenticatedApp: React.FC = (): React.ReactElement => {
  return (
    <Switch>
      <Route path={Navigation.NAVIGATION_ROUTES.LOGIN}>
        <Login />
      </Route>
      <Redirect to={Navigation.NAVIGATION_ROUTES.LOGIN} />
    </Switch>
  );
};

export default UnauthenticatedApp;
