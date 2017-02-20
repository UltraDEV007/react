import React, { PropTypes } from 'react';
import { storiesOf } from '@kadira/storybook';
import { withContext } from 'recompose';
import { PasswordSignupFields } from '@accounts/common';
import { Accounts } from './index';
import './font.css';

const AccountsWithContext = withContext({
  accounts: PropTypes.object,
}, () => ({
  accounts: {
    options: () => ({
      title: 'Site Title',
      passwordSignupFields: PasswordSignupFields.USERNAME_AND_EMAIL,
    }),
  },
}))(Accounts);

const style = {
  marginTop: 75,
};

storiesOf('Accounts', module)
  .add('login', () => (
    <div style={style}>
      <AccountsWithContext formType="login" />
    </div>
  ))
  .add('signup', () => (
    <div style={style}>
      <AccountsWithContext formType="signup" />
    </div>
  ),
);
