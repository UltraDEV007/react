/* eslint-disable no-shadow */
import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import getContext from 'recompose/getContext';
import Container from './Container';
import Content from './Content';
import FormError from './FormError';
import Header from './components/header';
import Avatar from './components/avatar';
import PasswordField from './components/password';
import SubmitButton from './components/submitButton';

const ResetPasswordFields = ({ children }) =>
  <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
    {children}
  </Flexbox>;

ResetPasswordFields.propTypes = {
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
  ResetPasswordFields,
  ResetPasswordPasswordField: PasswordField,
  ResetPasswordPasswordConfirmField: PasswordField,
  ResetPasswordButton: SubmitButton,
  Header,
  Footer,
  FormError,
};
