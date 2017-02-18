import React, { PropTypes } from 'react';
import { storiesOf } from '@kadira/storybook';
import { withContext } from 'recompose';
// import Accounts from '@accounts/client';
import { DefaultLayout } from './index';
import './font.css';

const Accounts = {
  options: () => ({
    title: 'Site Title',
  }),
};

const DefaultLayoutWithContext = withContext({
  accounts: PropTypes.object,
}, () => ({
  accounts: Accounts,
}))(DefaultLayout);

storiesOf('Accounts', module)
  .add('default layout', () => (
    <div
      style={{
        marginTop: 75,
      }}
    >
      <DefaultLayoutWithContext />
    </div>
  ));
