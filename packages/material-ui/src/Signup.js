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
import { Signup as SignupBase } from '@accounts/react';
import DefaultLayout from './DefaultLayout';

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

const SignupButton = () =>
  <RaisedButton
    primary
    fullWidth
    label="Sign up"
    style={{
      marginBottom: 10,
    }}
  />;

const LoginButton = () =>
  <Flexbox>
    <a
      href="#/"
      style={{
        fontFamily: 'Roboto',
        textDecoration: 'none',
        fontSize: 16,
      }}
    >
      Already have an account?
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
  LoginButton,
}) =>
  <LoginButton />;

Footer.propTypes = {
  LoginButton: PropTypes.node,
};

const Signup = ({
  Header,
  Footer,
  Avatar,
  SignupFields,
  SignupEmailField,
  SignupEmailOptionalField,
  SignupUsernameField,
  SignupPasswordField,
  SignupPasswordConfirmField,
  SignupButton,
  LoginButton,
  ...otherProps
}) =>
  <SignupBase
    DefaultLayout={({ children }) =>
      <DefaultLayout
        Header={Header}
        Footer={() => <Footer LoginButton={LoginButton} />}
        {...otherProps}
      >
        {children}
      </DefaultLayout>
    }
    SignupFields={SignupFields}
    Avatar={Avatar}
    SignupEmailField={SignupEmailField}
    SignupEmailOptionalField={SignupEmailOptionalField}
    SignupUsernameField={SignupUsernameField}
    SignupPasswordField={SignupPasswordField}
    SignupPasswordConfirmField={SignupPasswordConfirmField}
    SignupButton={SignupButton}
    {...otherProps}
  />;

Signup.propTypes = {
  Avatar: PropTypes.node,
  SignupFields: PropTypes.node,
  SignupEmailOptionalField: PropTypes.node,
  SignupEmailField: PropTypes.node,
  SignupUsernameField: PropTypes.node,
  SignupPasswordField: PropTypes.node,
  SignupPasswordConfirmField: PropTypes.node,
  RecoverButton: PropTypes.node,
  SignupButton: PropTypes.node,
  LoginButton: PropTypes.node,
  Header: PropTypes.node,
  Footer: PropTypes.node,
};

Signup.defaultProps = {
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
};

export default Signup;
