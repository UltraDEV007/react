import React from 'react';
import { Route } from 'react-router';
import { AccountsClient } from '@accounts/accounts';
import FormTypes from './FormTypes';

const accountRoutes = () =>
  <Route>
    <Route
      path={AccountsClient.options().loginPath}
      component={() => <AccountsClient.ui.Accounts formType={FormTypes.LOGIN} />}
    />
    <Route
      path={AccountsClient.options().signUpPath}
      component={() => <AccountsClient.ui.Accounts formType={FormTypes.SIGNUP} />}
    />
  </Route>;

accountRoutes.propTypes = {
  component: React.PropTypes.node,
};

export default accountRoutes;
