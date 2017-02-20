import React from 'react';
import { Accounts } from '@accounts/react';
import Login from './Login';
import Signup from './Signup';

export default ({ ...otherProps }) =>
  <Accounts
    Login={() => <Login {...otherProps} />}
    Signup={() => <Signup {...otherProps} />}
    {...otherProps}
  />;
