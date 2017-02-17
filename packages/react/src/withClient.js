import { withProps } from 'recompose';
import Accounts from '@accounts/client';

const withClient = withProps(() => ({
  accounts: Accounts,
}));

export default withClient;
