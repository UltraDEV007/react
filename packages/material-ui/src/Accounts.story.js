import 'babel-polyfill';
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import AccountsClient from '@accounts/client';
import { PasswordSignupFields } from '@accounts/common';
import { Accounts } from './index';

const defaultConfig = {
  title: 'Welcome to js-accounts',
};

AccountsClient.config(defaultConfig, {});

storiesOf('Login', module)
  .addWithInfo('login', () => (
    <Accounts formType="login" />
  ));

storiesOf('Signup', module)
  .addWithInfo('email only', () => {
    AccountsClient.config({
      ...defaultConfig,
      passwordSignupFields: PasswordSignupFields.EMAIL_ONLY,
    }, {});
    return <Accounts formType="signup" />;
  })
  .addWithInfo('username only', () => {
    AccountsClient.config({
      ...defaultConfig,
      passwordSignupFields: PasswordSignupFields.USERNAME_ONLY,
    }, {});
    return <Accounts formType="signup" />;
  })
  .addWithInfo('username and email', () => {
    AccountsClient.config({
      ...defaultConfig,
      passwordSignupFields: PasswordSignupFields.USERNAME_AND_EMAIL,
    }, {});
    return <Accounts formType="signup" />;
  })
  .addWithInfo('username and optional email', () => {
    AccountsClient.config({
      ...defaultConfig,
      passwordSignupFields: PasswordSignupFields.USERNAME_AND_OPTIONAL_EMAIL,
    }, {});
    return <Accounts formType="signup" />;
  });
