import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Accounts from '@accounts/client';
import './index';

storiesOf('Login', module)
  .add('Form', () => (
    <Accounts.ui.login.Form />
  ));

storiesOf('Accounts', module)
  .add('login', () => (
    <Accounts.ui.Accounts formType="login" />
  ));
