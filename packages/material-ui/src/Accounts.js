import React, { PropTypes } from 'react';
import { Accounts as AccountsBase } from '@accounts/react';
import { merge } from 'lodash';
import _loginComponents from './loginComponents';
import _signupComponents from './signupComponents';
import _forgotPasswordComponents from './forgotPasswordComponents';

const Accounts = ({ loginComponents, signupComponents, forgotPasswordComponents, ...otherProps }) =>
  <AccountsBase
    loginComponents={merge({}, _loginComponents, loginComponents)}
    signupComponents={merge({}, _signupComponents, signupComponents)}
    forgotPasswordComponents={merge({}, _forgotPasswordComponents, forgotPasswordComponents)}
    {...otherProps}
  />;

Accounts.propTypes = {
  loginComponents: PropTypes.object,
  signupComponents: PropTypes.object,
  forgotPasswordComponents: PropTypes.object,
};

Accounts.defaultProps = {
  loginComponents: {},
  signupComponents: {},
  forgotPasswordComponents: {},
};

export default Accounts;
