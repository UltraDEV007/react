import { TextField } from 'material-ui';
import React from 'react';
import Accounts from '@accounts/client';

const UserField = (props) => {
  console.log(props);
  return (<TextField
    fullWidth
    hintText="Username or email"
    floatingLabelText="Username or email"
    {...props}
  />);
};

export { UserField };
Accounts.ui.login.UserField = UserField;
