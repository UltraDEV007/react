import React, { PropTypes } from 'react';
import { Accounts as AccountsBase } from '@accounts/react';
import { merge } from 'lodash';
import _loginComponents from './loginComponents';
import _signupComponents from './signupComponents';
import _DefaultLayout from './DefaultLayout';

const Accounts = ({ DefaultLayout, loginComponents, signupComponents, ...otherProps }) =>
  <AccountsBase
    DefaultLayout={DefaultLayout}
    loginComponents={merge({}, _loginComponents, loginComponents)}
    signupComponents={merge({}, _signupComponents, signupComponents)}
    {...otherProps}
  />;

Accounts.propTypes = {
  DefaultLayout: PropTypes.node,
  loginComponents: PropTypes.object,
  signupComponents: PropTypes.object,
};

Accounts.defaultProps = {
  DefaultLayout: _DefaultLayout,
};

export default Accounts;
