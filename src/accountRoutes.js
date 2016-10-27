import React from 'react';
import { Route } from 'react-router';
import Accounts from './Accounts';

const accountRoutes = ({
  component,
}) =>
  <Route component={component}>
    <Route path="/login" component={Accounts} />
  </Route>;

accountRoutes.propTypes = {
  component: React.PropTypes.node,
};

export default accountRoutes;
