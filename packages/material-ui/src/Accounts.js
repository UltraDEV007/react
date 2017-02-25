import React, { PropTypes } from 'react';
import { Accounts as AccountsBase } from '@accounts/react';
import { merge } from 'lodash';
import _loginComponents from './loginComponents';
import _signupComponents from './signupComponents';
import _resetPasswordComponents from './resetPasswordComponents';

const Accounts = ({ loginComponents, signupComponents, resetPasswordComponents, ...otherProps }) =>
  <AccountsBase
    loginComponents={merge({}, _loginComponents, loginComponents)}
    signupComponents={merge({}, _signupComponents, signupComponents)}
    resetPasswordComponents={merge({}, _resetPasswordComponents, resetPasswordComponents)}
    {...otherProps}
  />;

Accounts.propTypes = {
  loginComponents: PropTypes.object,
  signupComponents: PropTypes.object,
  resetPasswordComponents: PropTypes.object,
};

Accounts.defaultProps = {
  loginComponents: {},
  signupComponents: {},
  resetPasswordComponents: {},
};

export default Accounts;
