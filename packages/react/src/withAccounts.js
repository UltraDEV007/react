import { withProps } from 'recompose';
import Accounts from '@accounts/client';

const withAccounts = withProps(() => ({
  accounts: Accounts,
}));

export default withAccounts;
