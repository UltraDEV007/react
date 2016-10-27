import React from 'react';
import { Route } from 'react-router';
import AccountsClient from 'graphql-accounts';
import Accounts from './Accounts';

const accountRoutes = ({
  component,
}) =>
  <Route component={component}>
    <Route path={AccountsClient.ui._options.loginPath} component={Accounts} />
  </Route>;

accountRoutes.propTypes = {
  component: React.PropTypes.node,
};

export default accountRoutes;
