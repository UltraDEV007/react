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
import Container from './Container';
import Content from './Content';
import FormError from './FormError';

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

const LoginButton = ({ ...otherProps }) =>
  <RaisedButton
    primary
    fullWidth
    label="Sign in"
    style={{
      marginTop: 10,
      marginBottom: 10,
    }}
    {...otherProps}
  />;

const RecoverButton = ({ ...otherProps }) =>
  <Flexbox alignSelf="flex-end" >
    <a
      href="#/"
      style={{
        fontFamily: 'Roboto',
        textDecoration: 'none',
        fontSize: 14,
      }}
      {...otherProps}
    >
      Forgot password
    </a>
  </Flexbox>;

const SignupButton = getContext({
  setFormType: PropTypes.func,
})(({ setFormType, ...otherProps }) =>
  <Flexbox>
    <a
      href="#/"
      style={{
        fontFamily: 'Roboto',
        textDecoration: 'none',
        fontSize: 16,
      }}
      onClick={() => setFormType('signup')}
      {...otherProps}
    >
      Create account
    </a>
  </Flexbox>);

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

const Footer = ({ ...otherProps }) =>
  <SignupButton {...otherProps} />;

Footer.propTypes = {
  SignupButton: PropTypes.node,
};

export default {
  Container,
  Content,
  Avatar,
  LoginFields,
  LoginUserField,
  LoginPasswordField,
  RecoverButton,
  LoginButton,
  SignupButton,
  Header,
  Footer,
  FormError,
};
