import React from 'react';
import { TextField } from 'material-ui';

const UserField = props =>
  <TextField
    fullWidth
    hintText="Username or email"
    floatingLabelText="Username or email"
    {...props}
  />;

export { UserField };

const PasswordField = props =>
  <TextField
    fullWidth
    type="password"
    hintText="Password"
    floatingLabelText="Password"
    {...props}
  />;

export { PasswordField };

const PasswordConfirmField = props =>
  <TextField
    fullWidth
    type="password"
    hintText="Confirm Password"
    floatingLabelText="Confirm Password"
    {...props}
  />;

export { PasswordConfirmField };


const EmailField = props =>
  <TextField
    fullWidth
    hintText="Email"
    floatingLabelText="Email"
    {...props}
  />;

export { EmailField };

const UsernameField = props =>
  <TextField
    fullWidth
    hintText="Username"
    floatingLabelText="Username"
    {...props}
  />;

export { UsernameField };

const EmailOptionalField = props =>
  <TextField
    fullWidth
    hintText="Email (optional)"
    floatingLabelText="Email (optional)"
    {...props}
  />;

export { EmailOptionalField };
