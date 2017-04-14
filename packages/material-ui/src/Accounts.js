import PropTypes from 'prop-types';
import React from 'react';
import { Accounts as AccountsBase } from '@accounts/react';
import merge from 'lodash/merge';
import _loginComponents from './loginComponents';
import _signupComponents from './signupComponents';
import _forgotPasswordComponents from './forgotPasswordComponents';
import _resetPasswordComponents from './resetPasswordComponents';

const Accounts = ({ loginComponents, signupComponents, forgotPasswordComponents,
  resetPasswordComponents, ...otherProps }) =>
    <AccountsBase
      loginComponents={merge({}, _loginComponents, loginComponents)}
      signupComponents={merge({}, _signupComponents, signupComponents)}
      forgotPasswordComponents={merge({}, _forgotPasswordComponents, forgotPasswordComponents)}
      resetPasswordComponents={merge({}, _resetPasswordComponents, resetPasswordComponents)}
      {...otherProps}
    />;

Accounts.propTypes = {
  loginComponents: PropTypes.object,
  signupComponents: PropTypes.object,
  forgotPasswordComponents: PropTypes.object,
  resetPasswordComponents: PropTypes.object,
};

Accounts.defaultProps = {
  loginComponents: {},
  signupComponents: {},
  forgotPasswordComponents: {},
  resetPasswordComponents: {},
};

export default Accounts;
