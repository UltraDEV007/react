import React from 'react';
import { Accounts } from '@accounts/react';
import Login from './Login';
import Signup from './Signup';

export default ({ ...otherProps }) =>
  <Accounts
    Login={loginProps => <Login {...loginProps} {...otherProps} />}
    Signup={() => <Signup {...otherProps} />}
    {...otherProps}
  />;
