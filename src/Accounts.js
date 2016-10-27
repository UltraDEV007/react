import React from 'react';
import { default as AccountsClient } from 'graphql-accounts';
import './Wrapper';

const {
  Wrapper,
  Title,
} = AccountsClient.ui;

const Accounts = ({
  className,
}) =>
  <Wrapper className={className}>
    <Title />
  </Wrapper>;

Accounts.propTypes = {
  className: React.PropTypes.string,
};

export default Accounts;
