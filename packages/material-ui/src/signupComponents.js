/* eslint-disable no-shadow */
import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import getContext from 'recompose/getContext';
import MuiAvatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SocialPerson from 'material-ui/svg-icons/social/person';
import Container from './Container';
import Content from './Content';
import FormError from './FormError';

const Avatar = () =>
  <MuiAvatar
    size={96} icon={<SocialPerson />} style={{
      marginBottom: 10,
    }}
  />;

const SignupFields = ({ children }) =>
  <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
    {children}
  </Flexbox>;

SignupFields.propTypes = {
  children: PropTypes.node,
};

const SignupEmailField = ({ ...otherProps }) =>
  <TextField
    hintText="Email"
    style={{
      marginBottom: 10,
    }}
    {...otherProps}
  />;

const SignupEmailOptionalField = ({ ...otherProps }) =>
  <TextField
    hintText="Email (optional)"
    style={{
      marginBottom: 10,
    }}
    {...otherProps}
  />;

const SignupUsernameField = ({ ...otherProps }) =>
  <TextField
    hintText="Username"
    style={{
      marginBottom: 10,
    }}
    {...otherProps}
  />;

const SignupPasswordField = ({ ...otherProps }) =>
  <TextField
    hintText="Password"
    type="password"
    style={{
      marginBottom: 10,
    }}
    {...otherProps}
  />;

const SignupPasswordConfirmField = ({ ...otherProps }) =>
  <TextField
    hintText="Confirm password"
    type="password"
    style={{
      marginBottom: 10,
    }}
    {...otherProps}
  />;

const SignupButton = ({ ...otherProps }) =>
  <RaisedButton
    primary
    fullWidth
    label="Sign up"
    style={{
      marginTop: 10,
    }}
    {...otherProps}
  />;

const LoginButton = getContext({
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
      onClick={() => setFormType('login')}
      {...otherProps}
    >
      Already have an account?
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

const Footer = ({
  ...otherProps
}) =>
  <LoginButton {...otherProps} />;

export default {
  Container,
  Content,
  Avatar,
  SignupFields,
  SignupEmailOptionalField,
  SignupEmailField,
  SignupUsernameField,
  SignupPasswordField,
  SignupPasswordConfirmField,
  SignupButton,
  LoginButton,
  Header,
  Footer,
  FormError,
};
