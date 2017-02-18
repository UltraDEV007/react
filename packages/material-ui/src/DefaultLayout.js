import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import { DefaultLayout as DefaultLayoutBase } from '@accounts/react';
import {
  getContext,
} from 'recompose';
import {
  Paper,
  Avatar as MuiAvatar,
  TextField,
  RaisedButton,
} from 'material-ui';
import {
  SocialPerson,
} from 'material-ui/svg-icons';

const Container = ({ children }) =>
  <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
    {children}
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

const Content = ({ children }) =>
  <Paper
    style={{
      minWidth: 350,
      padding: 40,
      backgroundColor: '#f7f7f7',
      marginBottom: 20,
    }}
  >
    <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
      {children}
    </Flexbox>
  </Paper>;

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

const DefaultLayout = ({
  ...otherProps
}) =>
  <DefaultLayoutBase
    components={{
      Container,
      Header,
      Content,
      Avatar,
      LoginFields,
      LoginUserField,
      LoginPasswordField,
      SignupFields: () => <div />,
      LoginButton,
      SignupButton,
      RecoverButton,
      Footer: () => <div />,
    }}
    {...otherProps}
  />;

export default DefaultLayout;
