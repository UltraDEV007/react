import React from 'react';
import { default as AccountsClient } from 'graphql-accounts'
import './Wrapper';

const Accounts = ({
  className
}) =>
<AccountsClient.ui.Wrapper className={className}>
  <AccountsClient.ui.Title />
</AccountsClient.ui.Wrapper>

Accounts.propTypes = {
  className: React.PropTypes.string,
};

export default Accounts;
