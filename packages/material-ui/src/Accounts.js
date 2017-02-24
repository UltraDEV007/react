import React, { PropTypes } from 'react';
import { Accounts as AccountsBase } from '@accounts/react';
import { merge } from 'lodash';
import _loginComponents from './loginComponents';
import _signupComponents from './signupComponents';

const Accounts = ({ loginComponents, signupComponents, ...otherProps }) =>
  <AccountsBase
    loginComponents={merge({}, _loginComponents, loginComponents)}
    signupComponents={merge({}, _signupComponents, signupComponents)}
    {...otherProps}
  />;

Accounts.propTypes = {
  loginComponents: PropTypes.object,
  signupComponents: PropTypes.object,
};

Accounts.defaultProps = {
  loginComponents: {},
  signupComponents: {},
};

export default Accounts;
