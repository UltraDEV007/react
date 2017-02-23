import React, { PropTypes } from 'react';

const Login = ({
  DefaultLayout,
  Avatar,
  LoginFields,
  LoginUserField,
  LoginPasswordField,
  LoginButton,
  RecoverButton,
  ...otherProps
}) =>
  <DefaultLayout>
    <Avatar />
    <LoginFields>
      <LoginUserField {...otherProps} />
      <LoginPasswordField {...otherProps} />
    </LoginFields>
    <LoginButton {...otherProps} />
    <RecoverButton {...otherProps} />
  </DefaultLayout>;

Login.propTypes = {
  DefaultLayout: PropTypes.node,
  Avatar: PropTypes.node,
  LoginFields: PropTypes.node,
  LoginUserField: PropTypes.node,
  LoginPasswordField: PropTypes.node,
  RecoverButton: PropTypes.node,
  LoginButton: PropTypes.node,
  SignupButton: PropTypes.node,
  Header: PropTypes.node,
  Footer: PropTypes.node,
};

export default Login;
