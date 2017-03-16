import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Accounts from '@accounts/client';
import '../src/';

storiesOf('Login', module)
  .add('Form', () => (
    <Accounts.ui.login.Form />
  ));
