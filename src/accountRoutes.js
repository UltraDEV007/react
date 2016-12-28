import React from 'react';
import { Route } from 'react-router';
import { AccountsClient } from '@accounts/accounts';

const accountRoutes = ({
  component,
}) =>
  <Route>
    <Route path={AccountsClient.ui._options.loginPath} component={AccountsClient.ui.LoginForm} />
  </Route>;

accountRoutes.propTypes = {
  component: React.PropTypes.node,
};

export default accountRoutes;
