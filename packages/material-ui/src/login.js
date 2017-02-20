/* eslint-disable no-shadow */
import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import { getContext } from 'recompose';
import {
  Avatar as MuiAvatar,
  TextField,
  RaisedButton,
} from 'material-ui';
import {
  SocialPerson,
} from 'material-ui/svg-icons';
import DefaultLayout from './DefaultLayout';

const Avatar = () =>
  <MuiAvatar
    size={96} icon={<SocialPerson />} style={{
      marginBottom: 10,
    }}
  />;

const LoginFields = ({ children }) =>
  <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
    {children}
  </Flexbox>;

LoginFields.propTypes = {
  children: PropTypes.node,
};

const LoginUserField = ({ ...otherProps }) =>
  <TextField
    hintText="Username or email"
    style={{
      marginBottom: 10,
    }}
    {...otherProps}
  />;

const LoginPasswordField = ({ ...otherProps }) =>
  <TextField
    hintText="Password"
    type="password"
    style={{
      marginBottom: 10,
    }}
    {...otherProps}
  />;

const LoginButton = () =>
  <RaisedButton
    primary
    fullWidth
    label="Sign in"
    style={{
      marginBottom: 10,
    }}
  />;

const RecoverButton = () =>
  <Flexbox alignSelf="flex-end" >
    <a
      href="#/"
      style={{
        fontFamily: 'Roboto',
        textDecoration: 'none',
        fontSize: 14,
        marginBottom: 10,
      }}
    >
      Forgot password
    </a>
  </Flexbox>;

const SignupButton = () =>
  <Flexbox>
    <a
      href="#/"
      style={{
        fontFamily: 'Roboto',
        textDecoration: 'none',
        fontSize: 16,
      }}
    >
      Create account
    </a>
  </Flexbox>;

const Header = getContext({
  accounts: PropTypes.object,
})(({ accounts }) =>
  <div
    style={{
      fontSize: 32,
      fontWeight: 400,
      fontFamily: 'Roboto',
      marginBottom: 10,
    }}
  >
    {accounts.options().title}
  </div>,
  );

const Footer = ({
  SignupButton,
}) =>
  <SignupButton />;

Footer.propTypes = {
  SignupButton: PropTypes.node,
};

const Login = ({
  Header,
  Footer,
  Avatar,
  LoginFields,
  LoginUserField,
  LoginPasswordField,
  RecoverButton,
  LoginButton,
  SignupButton,
  ...otherProps
}) => (
  <DefaultLayout
    Header={Header}
    Footer={() => <Footer SignupButton={SignupButton} />}
    {...otherProps}
  >
    <Avatar />
    <LoginFields>
      <LoginUserField />
      <LoginPasswordField />
    </LoginFields>
    <LoginButton />
    <RecoverButton />
  </DefaultLayout>
  );

Login.propTypes = {
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

Login.defaultProps = {
  Avatar,
  LoginFields,
  LoginUserField,
  LoginPasswordField,
  RecoverButton,
  LoginButton,
  SignupButton,
  Header,
  Footer,
};

export default Login;
