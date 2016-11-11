import { withProps } from 'recompose';
import Accounts from '@accounts/accounts';
import accountRoutes from './accountRoutes';

export { accountRoutes };

const connectAccounts = Component =>
    withProps(ownProps => ({
      ...ownProps,
      config: Accounts.ui._options,
      formType: Accounts.getState().formType,
      loginForm: Accounts.getState().forms.loginForm,
      signupForm: Accounts.getState().forms.signupForm,
    }))(Component);


export { connectAccounts };
