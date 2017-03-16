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

const ForgotPasswordFields = ({ children }) =>
  <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
    {children}
  </Flexbox>;

ForgotPasswordFields.propTypes = {
  children: PropTypes.node,
};

const ForgotPasswordEmailField = ({ ...otherProps }) =>
  <TextField
    hintText="Email"
    style={{
      marginBottom: 10,
    }}
    {...otherProps}
  />;

const ForgotPasswordButton = ({ ...otherProps }) =>
  <RaisedButton
    primary
    fullWidth
    label="Recover my password"
    style={{
      marginTop: 10,
      marginBottom: 10,
    }}
    {...otherProps}
  />;

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
      Log in
    </a>
  </Flexbox>);

const Footer = ({ ...otherProps }) =>
  <LoginButton {...otherProps} />;

Footer.propTypes = {
  SignupButton: PropTypes.node,
};

export default {
  Container,
  Content,
  Avatar,
  ForgotPasswordFields,
  ForgotPasswordEmailField,
  ForgotPasswordButton,
  Header,
  Footer,
  FormError,
};
