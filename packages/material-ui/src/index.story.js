import React from 'react';
import { storiesOf } from '@kadira/storybook';
import AccountsClient from '@accounts/client';
import { PasswordSignupFields } from '@accounts/common';
import { Accounts } from './index';
import './font.css';

AccountsClient.config({
  passwordSignupFields: PasswordSignupFields.USERNAME_AND_EMAIL,
  title: 'Site Title',
}, {});

const style = {
  marginTop: 75,
};

storiesOf('Accounts', module)
  .add('login', () => (
    <div style={style}>
      <Accounts formType="login" accounts={AccountsClient} />
    </div>
  ))
  .add('signup', () => (
    <div style={style}>
      <Accounts formType="signup" accounts={AccountsClient} />
    </div>
  ),
);
