import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import Paper from 'material-ui/Paper';
import { Accounts as AccountsBase } from '@accounts/react';
import AccountsClient from '@accounts/client';
import Title from './Title';

const styles = {
  base: {
    maxWidth: 500,
    width: '100%',
  },
  content: {
    padding: '20px 40px',
  },
};

const Accounts = ({
  formType,
}) => (
  <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
    <div style={styles.base}>
      <Paper style={styles.content}>
        <Title title={AccountsClient.options().title} />
        <AccountsBase formType={formType} />
      </Paper>
    </div>
  </Flexbox>
  );


Accounts.propTypes = {
  formType: PropTypes.string,
};

export default Accounts;
