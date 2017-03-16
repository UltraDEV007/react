/* eslint-disable no-shadow */
import React, { PropTypes } from 'react';
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

const SignupFields = ({ children }) =>
  <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
    {children}
  </Flexbox>;

SignupFields.propTypes = {
  children: PropTypes.node,
};

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

const Footer = ({
  ...otherProps
}) =>
  <LoginButton {...otherProps} />;

export default {
  Container,
  Content,
  Avatar,
  SignupFields,
  SignupEmailOptionalField: EmailField,
  SignupEmailField: EmailField,
  SignupUsernameField: EmailField,
  SignupPasswordField: PasswordField,
  SignupPasswordConfirmField: PasswordField,
  SignupButton: SubmitButton,
  LoginButton,
  Header,
  Footer,
  FormError,
};
