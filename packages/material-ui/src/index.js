import AccountsClient from '@accounts/client';
import Accounts from './Accounts';
import Title from './Title';
import Services from './Services';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

import {
  UserField,
  PasswordField,
  PasswordConfirmField,
  EmailField,
  UsernameField,
  EmailOptionalField,
} from './Fields';

const components = {
  Accounts,
  LoginForm,
  SignupForm,
  UserField,
  PasswordField,
  PasswordConfirmField,
  EmailField,
  UsernameField,
  EmailOptionalField,
};

AccountsClient.ui = components;

export {
  Title,
  Services,
  Accounts,
  LoginForm,
  SignupForm,
  UserField,
  PasswordField,
  PasswordConfirmField,
  EmailField,
  UsernameField,
  EmailOptionalField,
};
