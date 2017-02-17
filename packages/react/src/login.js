import React from 'react';
import Accounts from '@accounts/client';

if (!Accounts.ui.login) {
  Accounts.ui.login = {};
}

const Form = ({ style, ...otherProps }) =>
  <div className="accounts-login-form" style={style}>
    <Accounts.ui.login.Fields {...otherProps} />
    <Accounts.ui.login.Buttons {...otherProps} />
  </div>;

export { Form };
Accounts.ui.login.Form = Form;

const Fields = ({ style, ...otherProps }) =>
  <div className="accounts-login-fields" style={style}>
    <Accounts.ui.login.UserField {...otherProps} />
    <Accounts.ui.login.PasswordField {...otherProps} />
  </div>;

export { Fields };
Accounts.ui.login.Fields = Fields;

const PasswordField = ({ style, ...otherProps }) =>
  <input type="text" className="accounts-login-fields-password" style={style} />;

export { PasswordField };
Accounts.ui.login.PasswordField = PasswordField;

const UserField = ({ style, ...otherProps }) =>
  <input type="text" className="accounts-login-fields-user" style={style} />;

export { UserField };
Accounts.ui.login.UserField = UserField;

const Buttons = ({ style, ...otherProps }) =>
  <div className="accounts-login-buttons" style={style}>
    <Accounts.ui.login.LoginButton {...otherProps} />
    <Accounts.ui.login.SignupButton {...otherProps} />
  </div>;

export { Buttons };
Accounts.ui.login.Buttons = Buttons;

const LoginButton = ({ style, ...otherProps }) =>
  <button className="accounts-login-buttons-login" style={style}>
    Login
  </button>;

export { LoginButton };
Accounts.ui.login.LoginButton = LoginButton;

const SignupButton = ({ style, ...otherProps }) =>
  <button className="accounts-login-buttons-signup" style={style}>
    Signup
  </button>;

Accounts.ui.login.SignupButton = SignupButton;
