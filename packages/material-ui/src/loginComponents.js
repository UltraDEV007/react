import PropTypes from 'prop-types';
/* eslint-disable no-shadow */
import React from 'react';
import Flexbox from 'flexbox-react';
import getContext from 'recompose/getContext';
import Container from './Container';
import Content from './Content';
import FormError from './FormError';
import Header from './components/header';
import Avatar from './components/avatar';
import EmailField from './components/email';
import PasswordField from './components/password';
import SubmitButton from './components/submitButton';

const LoginFields = ({ children }) =>
  <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
    {children}
  </Flexbox>;

LoginFields.propTypes = {
  children: PropTypes.node,
};

const RecoverButton = getContext({
  setFormType: PropTypes.func,
})(({ setFormType, ...otherProps }) =>
  <Flexbox alignSelf="flex-end" >
    <a
      href="#/"
      style={{
        fontFamily: 'Roboto',
        textDecoration: 'none',
        fontSize: 14,
      }}
      onClick={() => setFormType('forgot-password')}
      {...otherProps}
    >
      Forgot password
    </a>
  </Flexbox>);

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
  LoginUserField: EmailField,
  LoginPasswordField: PasswordField,
  RecoverButton,
  LoginButton: SubmitButton,
  SignupButton,
  Header,
  Footer,
  FormError,
};
